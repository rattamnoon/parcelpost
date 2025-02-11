import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateParcepost1739253624778 implements MigrationInterface {
    name = 'UpdateParcepost1739253624778'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`parcel_post\` ADD \`nitiReceiverDate\` datetime NULL COMMENT 'วันที่ส่ง'`);
        await queryRunner.query(`ALTER TABLE \`parcel_post\` ADD \`customerReceiverDate\` datetime NULL COMMENT 'วันที่รับ'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`parcel_post\` DROP COLUMN \`customerReceiverDate\``);
        await queryRunner.query(`ALTER TABLE \`parcel_post\` DROP COLUMN \`nitiReceiverDate\``);
    }

}
