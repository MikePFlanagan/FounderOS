const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const workspace = await prisma.workspace.upsert({
    where: {
      id: "founderos-default-workspace",
    },
    update: {},
    create: {
      id: "founderos-default-workspace",
      name: "FounderOS",
    },
  });

  const agent = await prisma.agent.upsert({
    where: {
      id: "founder-agent",
    },
    update: {},
    create: {
      id: "founder-agent",
      workspaceId: workspace.id,
      name: "Founder Agent",
      role: "FOUNDER",
      systemPrompt:
        "You are the FounderOS orchestration agent responsible for coordinating all company objectives, projects, and AI agents.",
      isActive: true,
    },
  });

  await prisma.task.upsert({
    where: {
      id: "connect-dashboard-task",
    },
    update: {},
    create: {
      id: "connect-dashboard-task",
      workspaceId: workspace.id,
      agentId: agent.id,
      title: "Connect dashboard to live database",
      description:
        "Replace hardcoded dashboard metrics with live PostgreSQL data.",
      status: "PLANNED",
      requiresApproval: true,
    },
  });

  console.log("FounderOS seed complete.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
