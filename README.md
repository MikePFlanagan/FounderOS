# FounderOS MVP

FounderOS is an AI company operating system: agents, objectives, approvals, memory, tools, and application connectors in one reusable platform.

## Included in this first shipment

- Next.js command-center dashboard
- NestJS API with health, agents, and task approval endpoints
- PostgreSQL/Prisma domain model for workspaces, agents, tasks, and memory
- Redis and pgvector-ready PostgreSQL through Docker Compose
- Initial roadmap with FreedomCRM as the first connector

## Run locally

```bash
cp .env.example .env
pnpm install
docker compose up -d
pnpm --filter @founderos/database generate
pnpm --filter @founderos/database migrate
pnpm dev
```

Open:

- Dashboard: http://localhost:3000
- API health: http://localhost:3001/health
- Agents: http://localhost:3001/agents
- Tasks: http://localhost:3001/tasks

## MVP safety boundary

Agents do not execute destructive or external actions automatically. Tasks that can modify repositories, contact customers, spend money, deploy code, or access production data must enter `NEEDS_APPROVAL` before execution.

## Next build slice

1. Replace in-memory API services with Prisma repositories.
2. Add authentication and workspace membership.
3. Add an append-only audit event model.
4. Implement the tool registry and approval-gated runner.
5. Connect GitHub, then FreedomCRM.
