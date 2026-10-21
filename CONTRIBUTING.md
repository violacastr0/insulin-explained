# Contributing

This project follows a lightweight GitHub Flow.

## Branches

- `main` is the only long-running branch. It should always work.
- All work happens on short-lived branches, named by type:
  - `feature/<short-name>` for new sections or functionality (e.g. `feature/header-nav`)
  - `fix/<short-name>` for bug fixes
  - `docs/<short-name>` for documentation changes
- Delete a branch after it is merged.

## Commits

- One topic per commit. If a file has changes for two topics, stage them separately with `git add -p`.
- Subject line: under 80 characters, imperative mood (e.g. "Add mobile menu toggle").
- For anything non-obvious, add a blank line and a body explaining what changed, why, and anything to watch out for.

## Pull requests

- Nothing is committed directly to `main`. Every change reaches `main` through a pull request.
- Describe what the PR changes and how to check it.
- At least one other person reviews before merging.

## Merge vs. rebase

- You may rebase your own branch onto the latest `main` before opening a PR, to keep history clean.
- Never rebase or otherwise rewrite commits that have already been pushed to a shared branch.

## Merge conflicts

- Resolve conflicts by talking to whoever made the other change, then cleaning up the conflict markers.
- If a merge goes wrong, `git merge --abort` returns you to the state before the merge.
