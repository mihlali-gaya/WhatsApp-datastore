import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Numbers' })
export class Number {
  @PrimaryGeneratedColumn()
  number_id: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  telephone_number: string;

  @Column({ type: 'boolean', default: false, nullable: false })
  has_whatsapp: boolean;

  @Column({ type: 'date', nullable: false })
  date_added: Date;

  @Column({ type: 'date', nullable: false })
  date_modified: Date;

  @ManyToOne(() => User, (user) => user.numbers, { nullable: false }) // Establishes the relationship
  @JoinColumn({ name: 'user_id' }) // Specifies that user_id is the foreign key
  user: User;
}
