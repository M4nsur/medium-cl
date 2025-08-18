import { Module } from '@nestjs/common';
import { TagsController } from '@/tags/tags.controller';
import { TagsService } from '@/tags/tags.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagEntity } from './tag.entity';
@Module({
  imports: [TypeOrmModule.forFeature([TagEntity])],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
