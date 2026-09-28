# Portfolio landing page

Bilingual (English / Hebrew RTL) portfolio for a senior instructional designer.
Static site on **S3 + CloudFront**, infrastructure in **Terraform**, deployed by
**GitHub Actions** using **OIDC** (no AWS keys stored in GitHub).

```
site/                  the website (HTML/CSS/JS, no build step)
  js/content.js        <- ALL text, links and project data (EN + HE)
  css/styles.css       styles; brand colour is --dewdrop at the top
  img/                 portrait and images
infra/bootstrap/       one-time CloudFormation: TF state bucket, GitHub OIDC, deploy role
infra/site/            Terraform: private S3 bucket + CloudFront
.github/workflows/     CI/CD pipeline
```

## Editing content

Everything visible on the page comes from [`site/js/content.js`](site/js/content.js):

| What | Where in `content.js` |
|---|---|
| Name, title, hero text | `en.name`, `en.hero` / `he.name`, `he.hero` |
| Email, LinkedIn, WhatsApp number | `shared` |
| Portrait | put the file in `site/img/`, set `shared.portrait` |
| CV download | put the PDF in `site/files/`, set `shared.cvUrl` (button is hidden while it is `"#"`) |
| Client logos | `shared.clients` - `{ name: "Teva", logo: "img/clients/teva.svg" }` (logo optional) |
| Projects | `en.projects.items` / `he.projects.items` - optional `image` and `link` per item |
| Experience | `en.experience.items` / `he.experience.items` |

Remember to update both `en` and `he`. Push to `main` and the site redeploys.

The language is picked from `?lang=en|he`, then the visitor's last choice, then
the browser language.

## Colour

Pantone 13-5612 TCX "Dewdrops". Pantone only publishes the exact hex in Pantone
Connect, so `--dewdrop: #A6D4C9` in `styles.css` is an approximation - replace it
with the exact value if you have it.

## How deployment works

| Event | What runs |
|---|---|
| Pull request to `main` | `terraform fmt`, `validate`, `plan` (no changes applied) |
| Push to `main` | plan + `apply`, sync `site/` to S3, invalidate CloudFront |

GitHub Actions assumes `arn:aws:iam::831617909795:role/github-actions-portfolio`
through OIDC. The role trusts only `main` and pull requests of
`OlaGreen82/portfolio`, and can only touch the site bucket, its own Terraform
state and CloudFront.

## One-time bootstrap (already done)

Region: `eu-north-1` (Stockholm). CloudFront itself is global.

```bash
aws cloudformation deploy --stack-name portfolio-bootstrap \
  --template-file infra/bootstrap/bootstrap.yaml \
  --capabilities CAPABILITY_NAMED_IAM --profile portfolio --region eu-north-1
```

## Cost

Everything fits in the AWS free tier at portfolio traffic levels
(CloudFront always-free: 1 TB/month and 10M requests; S3 storage is a few MB).
A custom domain would add ~$0.50/month for a Route 53 hosted zone.

## Local preview

Any static file server pointed at `site/` works, e.g. `npx serve site`
or `python -m http.server -d site`.

## Notes for this machine (Avast)

Avast's HTTPS scanning intercepts TLS, which breaks the AWS CLI and local
Terraform. For the AWS CLI, set
`AWS_CA_BUNDLE=C:\ProgramData\Avast Software\Avast\wscert.pem`. Local Terraform
needs an Avast exception - or just let GitHub Actions run it.
