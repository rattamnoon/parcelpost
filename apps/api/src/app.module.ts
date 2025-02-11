import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParcelpostsModule } from './features/parcelposts/parcelposts.module';
import { LockersModule } from './features/lockers/lockers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'developer',
      password: 'Dev0ri2022',
      database: 'parcelpost_demo',
      entities: [join(__dirname, './database/entities/**/*{.ts,.js}')],
      migrations: [join(__dirname, './database/migrations/**/*{.ts,.js}')],
      synchronize: false,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ParcelpostsModule,
    LockersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
