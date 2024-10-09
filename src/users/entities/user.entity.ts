import { Number } from 'src/numbers/entities/number.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Users' })
export class User {
  @PrimaryColumn({ nullable: false })
  user_id: number;

  @Column({ type: 'text', nullable: false })
  userName: string;

  @Column({ type: 'character varying', nullable: false })
  password: string;

  @Column({ unique: true, nullable: false })
  full_name: string;

  @Column({ type: 'character varying', nullable: false })
  api_key: string;

  @Column({ type: 'date', nullable: false })
  date_added: Date;

  @Column({ type: 'date', nullable: false })
  date_modified: Date;

  @OneToMany(() => Number, (number) => number.user)
  numbers: Number[];
}

