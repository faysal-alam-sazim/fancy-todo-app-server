import { Migration } from '@mikro-orm/migrations';

export class Migration20240803052143 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "task" alter column "priority" type varchar(255) using ("priority"::varchar(255));');
  }

  async down(): Promise<void> {
    this.addSql('alter table "task" alter column "priority" type int using ("priority"::int);');
  }

}
