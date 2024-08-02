import { Migration } from '@mikro-orm/migrations';

export class Migration20240803052922 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "task" alter column "priority" type varchar(255) using ("priority"::varchar(255));');
    this.addSql('alter table "task" alter column "priority" set not null;');
    this.addSql('alter table "task" alter column "status" type varchar(255) using ("status"::varchar(255));');
    this.addSql('alter table "task" alter column "status" set not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "task" alter column "priority" type varchar(255) using ("priority"::varchar(255));');
    this.addSql('alter table "task" alter column "priority" drop not null;');
    this.addSql('alter table "task" alter column "status" type varchar(255) using ("status"::varchar(255));');
    this.addSql('alter table "task" alter column "status" drop not null;');
  }

}
