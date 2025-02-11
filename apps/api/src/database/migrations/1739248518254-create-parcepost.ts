import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateParcepost1739248518254 implements MigrationInterface {
    name = 'CreateParcepost1739248518254'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`parcel_post\` (\`id\` varchar(36) NOT NULL, \`code\` varchar(255) NOT NULL COMMENT 'รหัสพัสดุที่สร้างเอง', \`parcelCode\` varchar(255) NOT NULL COMMENT 'รหัสพัสดุ', \`senderName\` varchar(255) NULL COMMENT 'ชื่อผู้ส่ง', \`receiverName\` varchar(255) NULL COMMENT 'ชื่อผู้รับ', \`unitCode\` varchar(255) NULL COMMENT 'ห้อง', \`status\` varchar(255) NOT NULL COMMENT 'สถานะพัสดุ' DEFAULT 'ส่งสำเร็จ', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, UNIQUE INDEX \`IDX_8806aee60fea4a86e267d6c978\` (\`code\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_8806aee60fea4a86e267d6c978\` ON \`parcel_post\``);
        await queryRunner.query(`DROP TABLE \`parcel_post\``);
    }

}
