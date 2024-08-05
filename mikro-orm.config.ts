import { MikroORM } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

export default {
  driver: PostgreSqlDriver,
  entities: ['./dist/src/common/entities'],
  entitiesTs: ['./src/common/entities'],
  dbName: 'fancy-todo-app',
  user: 'postgres',
  password: '1234',
  debug: true,
  migrations: {
    path: './db/migrations',
  },
  metadataProvider: TsMorphMetadataProvider,
} as Parameters<typeof MikroORM.init>[0];
