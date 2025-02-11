import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateLocker1739255881029 implements MigrationInterface {
    name = 'UpdateLocker1739255881029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`locker\` ADD \`lock\` tinyint NOT NULL COMMENT 'สถานะ' DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`locker\` DROP COLUMN \`lock\``);
    }

}
