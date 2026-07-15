---
name: pre-dev-check
description: Verify prerequisites and port availability before starting spice-rack dev stack
---

Run before `/start-spice-rack` to verify your system is ready.

```bash
/pre-dev-check
```

The agent will check:
- Go 1.24+ installed
- Node.js 18+ installed
- Docker daemon running
- Required ports available (3100, 3101, 8181, 8182, 5532, 8085, 4543)
- Git remotes configured
- Necessary binaries built

Report any issues blocking startup.
