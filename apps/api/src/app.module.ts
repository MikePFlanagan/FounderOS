import { Module } from '@nestjs/common';
import { HealthController } from './health/health.controller';
import { AgentsController } from './agents/agents.controller';
import { AgentsService } from './agents/agents.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';

@Module({
  controllers: [HealthController, AgentsController, TasksController],
  providers: [AgentsService, TasksService],
})
export class AppModule {}
