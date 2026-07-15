---
name: run-validation
description: Run SALT24 agreement validation pipeline and open the report
---

Run the SALT24 agreement validation pipeline and open the report.

The pipeline is at /Users/ashley/Cobalt/src/pipeline/ and compares gold-standard SALT24 outputs against Cobalt model outputs across clinical speech-language measures.

Run these steps using the Bash tool:

## 1. Install dependencies (if needed)
```bash
cd /Users/ashley/Cobalt
pip install -q -r requirements.txt
```

## 2. Run the pipeline
```bash
cd /Users/ashley/Cobalt
python -m pipeline.cli \
  --gold input/gold \
  --novel input/novel \
  --config config.yaml \
  --out output
```

## 3. Open the report
```bash
open /Users/ashley/Cobalt/output/summary_stats.csv
```

If an HTML report exists, open it too:
```bash
ls /Users/ashley/Cobalt/output/*.html 2>/dev/null && open /Users/ashley/Cobalt/output/*.html
```
Or open the most recent report in the Cobalt root:
```bash
ls /Users/ashley/Cobalt/*.html 2>/dev/null && open $(ls -t /Users/ashley/Cobalt/*.html | head -1)
```

## 4. Print a summary
Show the key metrics from output/summary_stats.csv:
- Mean Pearson correlation
- Any measures below 0.5 (flag these)
- Count of measures computed

## Notes
- Gold CSVs: /Users/ashley/Cobalt/input/gold/
- Novel CSVs: /Users/ashley/Cobalt/input/novel/
- Output: /Users/ashley/Cobalt/output/ (per_measure_stats.csv, summary_stats.csv, plots/)
- Config: /Users/ashley/Cobalt/config.yaml (controls measures, tolerances, plot options)
- To swap in new model output: replace CSVs in input/novel/ and re-run
- To generate synthetic test data: cd /Users/ashley/Cobalt/synthetic_salt_corpus && python generate_corpus.py --mode pilot --seed 123 --out outputs/pilot --probe-rate 0.05 --strict
