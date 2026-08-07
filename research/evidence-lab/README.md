# Evidence Lab maintenance

This folder documents how the public evidence database behind the interactive Evidence Lab is maintained.

## Source of truth

The website reads version-controlled JSON from `public/data/evidence/`:

- `studies.json` — study/report-level extraction and verified links
- `pathways.json` — causal pathways, direct/indirect source links, confidence and gaps
- `synthesis.json` — overall synthesis and future evidence needs
- `protocol.json` — Rapid Evidence Assessment scope, search method, appraisal and limitations

The Git history is the audit trail. Do not edit evidence claims directly in `evidence-map.astro` unless changing presentation only.

## Update cycle

1. Run the Rapid Evidence Assessment agent in **Full REA** or focused update mode.
2. Search published academic and official sources for evidence that is new or missing.
3. Open and verify every source proposed for inclusion. Do not populate a source from a search snippet alone.
4. Extract study design, setting, results, caveats, directness and transferability into `studies.json`.
5. Reassess affected pathways in `pathways.json`. Do not upgrade confidence merely because another positive study was found; weigh design quality, relevance, consistency and contradictory evidence.
6. Update `synthesis.json` only where the body of evidence changes materially.
7. Update `protocol.json` with the search date, material scope changes and limitations.
8. Open a pull request. CI must pass before merging.
9. Human-review pivotal evidence and any confidence-rating change before publication.

## Confidence labels

The public site uses four labels:

- **Strong** — multiple relevant high-quality studies or syntheses point in the same direction, with plausible mechanisms and limited serious contradiction.
- **Moderate** — relevant evidence supports the mechanism, but important limitations, heterogeneity or transferability issues remain.
- **Developing** — some relevant evidence exists, but direct causal evidence is sparse, mixed or context-specific.
- **Limited** — the pathway is mainly theoretical, prospective or weakly evidenced. This is not equivalent to evidence of no effect.

These are generic public-facing evidence-confidence labels. They are not copied from, or presented as, unpublished internal guidance.

## Automation boundary

Automation may **search, screen, propose sources, run link checks and prepare a pull request**. It should not silently publish new evidence ratings to the live site. A material evidence claim or confidence-rating change should remain reviewable in GitHub before merge.

## Current priority gaps

- causal English evidence linking specific devolved powers to decisions and outcomes;
- validated measures of local institutional capacity and predictive validity;
- integration/prevention evidence that follows costs and outcomes across organisational boundaries;
- behaviour under alternative equalisation and revenue-sharing rules;
- evidence on which outcome/lead indicators improve accountability without gaming or excessive burden;
- a dedicated sector REA for culture and sport.
