# Klinik Sepatu Design System

Alpha canonical design system for the Klinik Sepatu Decide / Learn experience. It is a static, mobile-first component lab, not a production landing page.

## Start

```sh
npm test
npm run validate
npm run export:tokens
npm run export:tailwind
npm run check
```

Open `demo/index.html` in a browser after running the exports. No package install is needed for local validation.

## Structure

- `styles/`: tokens, resets, and reusable component styles.
- `demo/`: accessible component lab.
- `docs/`: implementation, voice, complaint-policy draft, and validation evidence.
- `exports/`: DTCG and Tailwind token outputs.
- `scripts/`: dependency-free validation and export CLIs.

## Slop Audit

| Check | Before target | After target |
| --- | --- | --- |
| Compositional tells | Not assessed | 0 |
| Generic SaaS dashboard patterns | Avoid | 0 |
| Decorative gradients / glass cards | Avoid | 0 |
| Unverified service promises | Avoid | 0 |
| Data-URI image copies | Avoid | 0 |

The system uses workshop rules, functional metadata, official marks, and intentional empty media frames instead of invented imagery. Real Drive before/after photographs must be inserted only when their service mapping is approved by the owner.

Brand files in `assets/brand/` are excluded from the MIT license. See `LICENSE`.
