import { prisma } from "../lib/prisma";

export const dynamic = "force-dynamic";

const openTaskStatuses = [
  "BACKLOG",
  "PLANNED",
  "RUNNING",
  "NEEDS_APPROVAL",
] as const;

function formatStatus(status: string) {
  return status.replaceAll("_", " ");
}

export default async function HomePage() {
  const [
    activeAgentCount,
    openTaskCount,
    approvalCount,
    agents,
    tasks,
  ] = await Promise.all([
    prisma.agent.count({
      where: {
        isActive: true,
      },
    }),

    prisma.task.count({
      where: {
        status: {
          in: [...openTaskStatuses],
        },
      },
    }),

    prisma.task.count({
      where: {
        status: "NEEDS_APPROVAL",
      },
    }),

    prisma.agent.findMany({
      orderBy: {
        createdAt: "asc",
      },
      take: 6,
    }),

    prisma.task.findMany({
      where: {
        status: {
          in: [...openTaskStatuses],
        },
      },
      include: {
        agent: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    }),
  ]);

  return (
    <main>
      <header>
        <div>
          <p className="eyebrow">AI COMPANY OPERATING SYSTEM</p>
          <h1>FounderOS</h1>
          <p>
            One command center for your agents, projects, approvals, memory,
            and execution.
          </p>
        </div>

        <button>New objective</button>
      </header>

      <section className="metrics">
        <article>
          <span>Active agents</span>
          <strong>{activeAgentCount}</strong>
        </article>

        <article>
          <span>Open tasks</span>
          <strong>{openTaskCount}</strong>
        </article>

        <article>
          <span>Approvals needed</span>
          <strong>{approvalCount}</strong>
        </article>

        <article>
          <span>Connected products</span>
          <strong>0</strong>
        </article>
      </section>

      <section className="grid">
        <div className="panel">
          <h2>Agent team</h2>

          {agents.length === 0 ? (
            <p>No agents have been created yet.</p>
          ) : (
            agents.map((agent) => (
              <div className="row" key={agent.id}>
                <div>
                  <strong>{agent.name}</strong>
                  <p>{agent.systemPrompt}</p>
                </div>

                <span>{agent.isActive ? "Active" : "Standby"}</span>
              </div>
            ))
          )}
        </div>

        <div className="panel">
          <h2>Execution queue</h2>

          {tasks.length === 0 ? (
            <p>No open tasks in the execution queue.</p>
          ) : (
            tasks.map((task) => (
              <div className="task" key={task.id}>
                <span>{formatStatus(task.status)}</span>
                <h3>{task.title}</h3>
                <p>{task.description}</p>

                {task.agent && <p>Assigned to: {task.agent.name}</p>}

                <button className="secondary">Review task</button>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="panel roadmap">
        <h2>MVP execution path</h2>

        <ol>
          <li>
            <b>Control plane</b>
            <span>Agents, tasks, approvals</span>
          </li>

          <li>
            <b>Memory</b>
            <span>Workspace knowledge and project context</span>
          </li>

          <li>
            <b>Tool runner</b>
            <span>GitHub and safe terminal actions</span>
          </li>

          <li>
            <b>FreedomCRM connector</b>
            <span>First production integration</span>
          </li>
        </ol>
      </section>
    </main>
  );
}
