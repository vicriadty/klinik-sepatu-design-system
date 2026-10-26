# Validation Evidence

## RED: 26 October 2026

Command: `npm test`

Actual output excerpt:

```text
✖ required design-system deliverables exist
AssertionError [ERR_ASSERTION]: Missing DESIGN.md
```

The file-contract test was written before the implementation, then run while `DESIGN.md` and the remaining deliverables did not exist.

## GREEN: 26 October 2026

Command: `npm test`

Actual output excerpt:

```text
✔ required design-system deliverables exist
✔ design validator accepts the published system
ℹ pass 2
ℹ fail 0
```

The validator's successful output was:

```text
Validation passed: files, tokens, accessibility, components, landmarks, logos, policy, and owner facts.
```

The subsequent static smoke output was:

```text
Static smoke passed: anchors resolve and no data URI images are embedded.
```
