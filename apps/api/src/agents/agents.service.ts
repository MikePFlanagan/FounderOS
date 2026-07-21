import { Injectable } from '@nestjs/common';

export type Agent = {
  id: string;
  name: string;
  role: string;
  mission: string;
  active: boolean;
};

@Injectable()
export class AgentsService {
  private readonly agents: Agent[] = [
    { id: 'founder', name: 'Founder Agent', role: 'FOUNDER', mission: 'Prioritize outcomes and coordinate the company.', active: true },
    { id: 'engineering', name: 'Engineering Agent', role: 'ENGINEERING', mission: 'Plan, implement, test, and document software changes.', active: true },
    { id: 'marketing', name: 'Marketing Agent', role: 'MARKETING', mission: 'Create campaigns and measure growth experiments.', active: false },
  ];
  findAll(): Agent[] { return this.agents; }
}
