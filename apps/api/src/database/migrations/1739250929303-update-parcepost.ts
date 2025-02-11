import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateParcepost1739250929303 implements MigrationInterface {
    name = 'UpdateParcepost1739250929303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`parcel_post\` DROP FOREIGN KEY \`FK_859749f3609e46608bd892e76fa\``);
        await queryRunner.query(`ALTER TABLE \`parcel_post\` CHANGE \`lockerId\` \`lockerId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`parcel_post\` ADD CONSTRAINT \`FK_859749f3609e46608bd892e76fa\` FOREIGN KEY (\`lockerId\`) REFERENCES \`locker\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`parcel_post\` DROP FOREIGN KEY \`FK_859749f3609e46608bd892e76fa\``);
        await queryRunner.query(`ALTER TABLE \`parcel_post\` CHANGE \`lockerId\` \`lockerId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`parcel_post\` ADD CONSTRAINT \`FK_859749f3609e46608bd892e76fa\` FOREIGN KEY (\`lockerId\`) REFERENCES \`locker\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
