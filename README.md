# numberdetailfinder

Number detail finder web app.

## GitHub token connection

Use the server endpoint below when validating a GitHub Personal Access Token from a browser form:

```http
POST /api/github
Content-Type: application/json

{ "token": "github_pat_or_ghp_token_value" }
```

The endpoint normalizes pasted tokens by removing accidental leading/trailing whitespace, wrapping quotes, and an optional `Bearer` or `token` prefix before calling GitHub's `/user` API. This prevents false `401 Bad credentials` responses caused by copy/paste formatting issues while still returning GitHub's real error when the token is actually rejected.
