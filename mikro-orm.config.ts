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
    tableName: 'mikro_orm_migrations',
    path: './migrations',
    pattern: /^[\w-]+\d+\.ts$/,
    transactional: true,
    emit: 'ts',
  },
  metadataProvider: TsMorphMetadataProvider,
} as Parameters<typeof MikroORM.init>[0];
