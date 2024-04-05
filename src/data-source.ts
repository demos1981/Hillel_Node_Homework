import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/users.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTRGRES_DB,
  synchronize: true,
  logging: false,
  entities: [User],
});
