# Owner Execution Policy

Effective 2026-09-14.

- Ordinary development does not run GitHub Actions.
- Build/test/package/release compute uses self-hosted runners.
- Final Production is triggered by `workflow_dispatch` or `.github/final-production.request`.
- Final Production uses repository-scoped `cancel-in-progress: true`; newest request wins.
- Stale release candidates do not publish.

This supersedes conflicting older runner instructions.