import { Injectable, NotFoundException } from '@nestjs/common';

type TaskStatus = 'BACKLOG' | 'PLANNED' | 'RUNNING' | 'NEEDS_APPROVAL' | 'COMPLETED' | 'FAILED';
type Task = { id: string; title: string; description: string; status: TaskStatus; agentId?: string; requiresApproval: boolean };

@Injectable()
export class TasksService {
  private readonly tasks: Task[] = [
    { id: '1', title: 'Connect FreedomCRM', description: 'Create the first application connector.', status: 'PLANNED', agentId: 'engineering', requiresApproval: true },
  ];
  findAll(): Task[] { return this.tasks; }
  create(input: Omit<Task, 'id' | 'status'>): Task {
    const task: Task = { ...input, id: crypto.randomUUID(), status: 'BACKLOG' };
    this.tasks.push(task);
    return task;
  }
  approve(id: string): Task {
    const task = this.tasks.find((item) => item.id === id);
    if (!task) throw new NotFoundException('Task not found');
    task.status = 'PLANNED';
    return task;
  }
}
