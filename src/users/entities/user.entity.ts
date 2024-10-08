import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Users' })
export class User {
  @PrimaryColumn()
  user_id: number;

  @Column({ type: 'text' })
  userName: string;

  @Column({ type: 'character varying' })
  password: string;

  @Column({ unique: true })
  full_name: string;

  @Column({ type: 'character varying' })
  api_key: string;

  @Column({ type: 'date' })
  date_added: Date;

  @Column({ type: 'date' })
  date_modified: Date;
}
