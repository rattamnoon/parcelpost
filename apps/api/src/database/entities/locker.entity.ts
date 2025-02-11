import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ParcelPost } from './parcelpost.entity';

@Entity({ comment: 'master ตู้เก็บพัสดุ', schema: 'locker' })
export class Locker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: 'รหัสตู้' })
  code: string;

  @Column({ comment: 'ตึก', nullable: true })
  building: string;

  @Column({ comment: 'ไซส์', nullable: true })
  size: string;

  @Column({ comment: 'สถานที่', nullable: true })
  location: string;

  @OneToMany(() => ParcelPost, (parcelPost) => parcelPost.locker)
  parcelPosts: ParcelPost[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
