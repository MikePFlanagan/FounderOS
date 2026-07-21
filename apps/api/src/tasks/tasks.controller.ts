import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { IsBoolean, IsOptional, IsString, MinLength } from 'class-validator';
import { TasksService } from './tasks.service';

class CreateTaskDto {
  @IsString() @MinLength(3) title!: string;
  @IsString() @MinLength(3) description!: string;
  @IsOptional() @IsString() agentId?: string;
  @IsBoolean() requiresApproval = true;
}

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasks: TasksService) {}
  @Get() findAll() { return this.tasks.findAll(); }
  @Post() create(@Body() input: CreateTaskDto) { return this.tasks.create(input); }
  @Patch(':id/approve') approve(@Param('id') id: string) { return this.tasks.approve(id); }
}
