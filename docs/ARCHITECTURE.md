# FounderOS Architecture

## Core loop

Objective -> Plan -> Tasks -> Agent assignment -> Tool call proposal -> Human approval -> Execution -> Audit event -> Memory update

## Modules

- Control plane: agents, tasks, approvals, schedules
- Memory plane: workspace facts, project context, retrieved knowledge
- Tool plane: typed tools, permissions, isolated execution, audit logs
- Connector plane: FreedomCRM, Project Aphrodite, GitHub, Gmail, Calendar
- Model gateway: provider-neutral LLM interface

## Non-negotiable controls

- Least-privilege credentials per tool
- Human approval for high-impact actions
- Idempotency keys for external writes
- Append-only execution audit log
- Per-workspace data isolation
- Timeouts, retries, and spending limits
