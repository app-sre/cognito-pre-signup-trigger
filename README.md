# cognito-pre-signup-trigger

Holding repository for cognito trigger lambda function for rosa-authenticator in FedRAMP

To trigger new releases, add and upload a new versioning tag.

```
# Example
git tag 1.0.0
git push origin 1.0.0
```

By doing this, the app-sre ci-ext jenkins job 'cognito-pre-signup-trigger' will run this repo's 'build_tag.sh" script.

This script will create a new release for this repo, and upload the contents of this repo as a zip file attachment to that release.
