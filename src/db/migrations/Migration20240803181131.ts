import { Migration } from '@mikro-orm/migrations';

export class Migration20240803181131 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "task" ("id" serial primary key, "title" varchar(255) not null, "description" varchar(255) null, "due_date" timestamptz null, "priority" varchar(255) not null, "status" varchar(255) not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "task" cascade;');
  }

}
