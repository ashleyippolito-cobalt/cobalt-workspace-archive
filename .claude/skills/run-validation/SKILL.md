---
name: run-validation
description: Run SALT24 agreement validation pipeline and open the report
---

Run the SALT24 agreement validation pipeline and open the report.

The pipeline is expected at /Users/ashley/Cobalt/Ashley/validation/src/pipeline/ and compares
gold-standard SALT24 outputs against Cobalt model outputs across clinical speech-language measures.

**Known issue (confirmed 2026-07-15):** the pipeline source is missing on this machine —
`Ashley/validation/` currently contains only a `docs/` folder; `src/pipeline/`, `input/`,
`output/`, `config.yaml`, and `requirements.txt` are all absent. This wasn't just a path
change, the code itself isn't here. Check before running:

```bash
ls -d /Users/ashley/Cobalt/Ashley/validation/src/pipeline 2>/dev/null || echo "MISSING"
```

If missing, stop and tell the user this needs to be recovered (from a backup/prior machine)
or rebuilt from scratch before this skill can run — this is an open decision, not yet made
(see [[new-laptop-environment-rebuild]]). Don't invent a pipeline or guess at CSV formats.

Once the source is present, run these steps using the Bash tool:

## 1. Install dependencies (if needed)
```bash
cd /Users/ashley/Cobalt/Ashley/validation
pip install -q -r requirements.txt
```

## 2. Run the pipeline
```bash
cd /Users/ashley/Cobalt/Ashley/validation
python -m pipeline.cli \
  --gold input/gold \
  --novel input/novel \
  --config config.yaml \
  --out output
```

## 3. Open the report
```bash
open /Users/ashley/Cobalt/Ashley/validation/output/summary_stats.csv
```

If an HTML report exists, open it too:
```bash
ls /Users/ashley/Cobalt/Ashley/validation/output/*.html 2>/dev/null && open /Users/ashley/Cobalt/Ashley/validation/output/*.html
```

## 4. Print a summary
Show the key metrics from output/summary_stats.csv:
- Mean Pearson correlation
- Any measures below 0.5 (flag these)
- Count of measures computed

## Notes
- Gold CSVs: /Users/ashley/Cobalt/Ashley/validation/input/gold/
- Novel CSVs: /Users/ashley/Cobalt/Ashley/validation/input/novel/
- Output: /Users/ashley/Cobalt/Ashley/validation/output/ (per_measure_stats.csv, summary_stats.csv, plots/)
- Config: /Users/ashley/Cobalt/Ashley/validation/config.yaml (controls measures, tolerances, plot options)
- To swap in new model output: replace CSVs in input/novel/ and re-run
- To generate synthetic test data: cd /Users/ashley/Cobalt/Ashley/validation/synthetic_salt_corpus && python generate_corpus.py --mode pilot --seed 123 --out outputs/pilot --probe-rate 0.05 --strict
