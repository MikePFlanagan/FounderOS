const agents = [
  ['Founder Agent', 'Coordinates company priorities', 'Active'],
  ['Engineering Agent', 'Builds and tests product work', 'Active'],
  ['Marketing Agent', 'Runs growth experiments', 'Standby'],
];
export default function HomePage() {
  return (
    <main>
      <header><div><p className="eyebrow">AI COMPANY OPERATING SYSTEM</p><h1>FounderOS</h1><p>One command center for your agents, projects, approvals, memory, and execution.</p></div><button>New objective</button></header>
      <section className="metrics">
        <article><span>Active agents</span><strong>2</strong></article>
        <article><span>Open tasks</span><strong>1</strong></article>
        <article><span>Approvals needed</span><strong>0</strong></article>
        <article><span>Connected products</span><strong>0</strong></article>
      </section>
      <section className="grid">
        <div className="panel"><h2>Agent team</h2>{agents.map(([name, mission, state]) => <div className="row" key={name}><div><strong>{name}</strong><p>{mission}</p></div><span>{state}</span></div>)}</div>
        <div className="panel"><h2>Execution queue</h2><div className="task"><span>PLANNED</span><h3>Connect FreedomCRM</h3><p>Create the first application connector and shared workspace context.</p><button className="secondary">Review task</button></div></div>
      </section>
      <section className="panel roadmap"><h2>MVP execution path</h2><ol><li><b>Control plane</b><span>Agents, tasks, approvals</span></li><li><b>Memory</b><span>Workspace knowledge and project context</span></li><li><b>Tool runner</b><span>GitHub and safe terminal actions</span></li><li><b>FreedomCRM connector</b><span>First production integration</span></li></ol></section>
    </main>
  );
}
