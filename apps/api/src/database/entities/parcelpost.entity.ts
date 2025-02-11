import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ParcelPost {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, comment: 'รหัสพัสดุที่สร้างเอง' })
  code: string;

  @Column({ comment: 'รหัสพัสดุ' })
  parcelCode: string;

  @Column({ comment: 'ชื่อผู้ส่ง', nullable: true })
  senderName: string;

  @Column({ comment: 'ชื่อผู้รับ', nullable: true })
  receiverName: string;

  @Column({ comment: 'ห้อง', nullable: true })
  unitCode: string;

  @Column({ comment: 'สถานะพัสดุ', default: 'ส่งสำเร็จ' })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
