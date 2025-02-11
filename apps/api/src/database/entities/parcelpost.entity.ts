import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Locker } from './locker.entity';

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

  @Column()
  lockerId: number;

  @ManyToOne(() => Locker, (locker) => locker.parcelPosts)
  @JoinColumn({ name: 'lockerId' })
  locker: Locker;
}
