import { Migration } from '@mikro-orm/migrations';

export class Migration20240802173754 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "task" ("id" serial primary key, "title" varchar(255) not null, "description" varchar(255) null, "due_date" timestamptz null, "priority" int null, "status" varchar(255) null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "task" cascade;');
  }

}
