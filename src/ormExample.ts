import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions.js';

export const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 12354151,
  username: 'userExample',
  password: 'passExample',
  database: 'dbExample',
};
