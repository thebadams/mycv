import {
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log(`Inserted User With ID: ${this.id}`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`Updated User With ID: ${this.id}`);
  }

  @AfterRemove()
  logDelete() {
    console.log(`Deleted User With ID: ${this.id}`);
  }
}
