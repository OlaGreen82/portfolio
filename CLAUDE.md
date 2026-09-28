# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Bilingual (English + Hebrew RTL) portfolio landing page for a senior instructional designer. Plain static HTML/CSS/JS (no build step, no package manager, no tests), hosted on a private S3 bucket behind CloudFront in AWS account `831617909795`, region `eu-north-1`. Must stay within the AWS free tier.

Live URL: https://drka4duc5eqcu.cloudfront.net

## Architecture

**Site (`site/`)** - content is fully data-driven:
- `site/js/content.js` defines `window.SITE_CONTENT` with `shared` (links, clients, portrait, CV URL), `en` and `he`. Every visible string comes from here; `en` and `he` must keep the same shape.
- `site/index.html` is an empty skeleton. Elements with `data-t="dotted.path"` get text from the active language object; `.js-*` containers are filled by render functions; `.js-whatsapp` / `.js-email` / `.js-linkedin` / `.js-cv` get their `href` from `shared`.
- `site/js/main.js` renders everything, and re-renders on language switch (sets `<html lang dir>`). Language priority: `?lang=` → localStorage → browser language. Optional fields: project `image`/`link`, client `logo`; the CV button stays hidden while `cvUrl` is `"#"`.
- `site/css/styles.css`: palette tokens at the top (`--dewdrop` ≈ Pantone 13-5612 TCX "Dewdrops"; the hex is an approximation). Use logical properties (`margin-inline-*`, `inset-inline-*`) so RTL works; RTL-specific overrides use `[dir="rtl"]`.

**Infrastructure** - two layers:
- `infra/bootstrap/bootstrap.yaml` (CloudFormation stack `portfolio-bootstrap`, deployed manually with the AWS CLI): Terraform state bucket `portfolio-tfstate-831617909795`, GitHub OIDC provider, and role `github-actions-portfolio`. It is CloudFormation rather than Terraform because local Terraform can't run on the owner's machine (see below).
- `infra/site/` (Terraform, S3 backend with native locking `use_lockfile`, state key `site/terraform.tfstate`): site bucket `portfolio-site-831617909795` (private, OAC-only) and the CloudFront distribution (managed CachingOptimized + SecurityHeaders policies, 403/404 → `/404.html`, PriceClass_100).
- The deploy role's inline policy only allows the site bucket, the `site/*` state objects, and CloudFront. New AWS resource types in `infra/site/` need matching permissions added to `bootstrap.yaml` and a redeploy of that stack first.
- The role trusts GitHub's **immutable** OIDC subject `repo:OlaGreen82@334989489/portfolio@1392648597:{ref:refs/heads/main|pull_request}`, not the name-only `repo:OlaGreen82/portfolio` form.

**CI/CD (`.github/workflows/deploy.yml`)**: PR → `terraform fmt -check`, `validate`, `plan`. Push to `main` → apply, `aws s3 sync site/` (HTML/CSS/JS with `max-age=0, must-revalidate`; other files cached 7 days), then CloudFront `/*` invalidation.

## Commands

Local machine quirks: Avast HTTPS scanning intercepts TLS, and tool shells have a stale PATH.

```powershell
# refresh PATH so git / gh / terraform resolve
$env:Path = [Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [Environment]::GetEnvironmentVariable('Path','User')

# AWS CLI (not on PATH; needs Avast's CA bundle)
$env:AWS_CA_BUNDLE = 'C:\ProgramData\Avast Software\Avast\wscert.pem'
& "$env:LOCALAPPDATA\Programs\Amazon\AWSCLIV2\aws.exe" <cmd> --profile portfolio --region eu-north-1

# update the bootstrap stack
aws cloudformation deploy --stack-name portfolio-bootstrap --template-file infra/bootstrap/bootstrap.yaml --capabilities CAPABILITY_NAMED_IAM --profile portfolio --region eu-north-1

# Terraform formatting (works locally; CI fails on unformatted files)
terraform fmt -recursive infra

# watch the latest pipeline run
gh run watch (gh run list --limit 1 --json databaseId -q '.[0].databaseId') --exit-status
```

- `terraform init/plan/apply` **cannot run locally**: Avast breaks Terraform's localhost gRPC connection to its provider plugin. Let CI run Terraform. Don't change Avast settings; that's the owner's decision.
- There is no Python or Node on this machine. For a local preview, serve `site/` with any static server (e.g. a small PowerShell `HttpListener` script). Opening `index.html` via `file://` in the preview pane won't load CSS/JS.
