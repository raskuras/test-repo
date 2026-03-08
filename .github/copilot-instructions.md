# Copilot Instructions

## Conventional Commits

### Format

```
<type>(<scope>): <subject>

<body>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **refactor**: Code refactoring
- **docs**: Documentation
- **style**: Formatting/style
- **test**: Tests
- **perf**: Performance
- **chore**: Tooling/dependencies
- **ci**: CI/CD changes

### Rules

- Type is required
- Scope is optional (e.g., `auth`, `api`)
- Subject: use lowercase, imperative mood, no period, max 50 chars
- Body: optional, explain what and why (wrap at 72 chars)
- Reference issues: `Closes #123`

### Examples

```
feat: add user authentication
fix(auth): resolve jwt token expiration bug
docs: update installation guide
```
