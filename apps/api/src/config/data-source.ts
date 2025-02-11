import 'dotenv/config';
import { join } from 'path';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3308,
  username: 'developer',
  password: 'Dev0ri2022',
  database: 'parcelpost_demo',
  synchronize: false,
  logging: false,
  entities: [join(__dirname, '../database/entities/**/*{.ts,.js}')],
  migrations: [join(__dirname, '../database/migrations/*.ts')],
  subscribers: [],
});
