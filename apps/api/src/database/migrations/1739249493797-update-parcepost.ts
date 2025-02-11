import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateParcepost1739249493797 implements MigrationInterface {
    name = 'UpdateParcepost1739249493797'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`locker\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code\` varchar(255) NOT NULL COMMENT 'รหัสตู้', \`building\` varchar(255) NOT NULL COMMENT 'ตึก', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB COMMENT="master ตู้เก็บพัสดุ"`);
        await queryRunner.query(`ALTER TABLE \`parcel_post\` ADD \`lockerId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`parcel_post\` ADD CONSTRAINT \`FK_859749f3609e46608bd892e76fa\` FOREIGN KEY (\`lockerId\`) REFERENCES \`locker\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`parcel_post\` DROP FOREIGN KEY \`FK_859749f3609e46608bd892e76fa\``);
        await queryRunner.query(`ALTER TABLE \`parcel_post\` DROP COLUMN \`lockerId\``);
        await queryRunner.query(`DROP TABLE \`locker\``);
    }

}
