import { Controller, Get } from '@nestjs/common';
import { AgentsService } from './agents.service';
@Controller('agents')
export class AgentsController {
  constructor(private readonly agents: AgentsService) {}
  @Get()
  findAll() { return this.agents.findAll(); }
}
