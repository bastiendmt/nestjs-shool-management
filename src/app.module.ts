import { Module } from '@nestjs/common';
import { LessonModule } from './lesson/lesson.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { LessonResolver } from './lesson/lesson.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    LessonModule,
  ],
})
export class AppModule {}
