import { randomUUID } from "node:crypto";
import { sql } from "./db.js";

export class DatabasePostgres {
  async userslist(search) {
    //users
    let users;
    if (search) {
      users = await sql`select * from users where fullname ilike ${
        "%" + search + "%"
      }`;
    } else {
      users = await sql`select * from users`;
    }

    return users;
  }

  async taskslist(search) {
    //users
    let tasks;
    if (search) {
      tasks = await sql`select * from tasks where fullname ilike ${
        "%" + search + "%"
      }`;
    } else {
      tasks = await sql`select * from tasks`;
    }

    return tasks;
  }
  //users
  async create(users) {
    const userId = randomUUID();
    const { fullname, age } = tasks;

    await sql`insert into tasks (id , fullname, age) values(${userId},${fullname},${age})`;
  }

  async update(id, users) {
    const { fullname, age } = users;

    await sql`update tasks set fullname = ${fullname}, age = ${age}, WHERE id = ${id}`;
  }

  async delete(id) {
    await sql`delete from tasks where id = ${id}`;
  }

  //tasks
  async create(tasks) {
    const tasksId = randomUUID();
    const { title, description, status } = tasks;

    await sql`insert into tasks (id, title, description, status) values(${tasksId},${title},${description},${status})`;
  }

  async update(id, tasks) {
    const { title, description, status } = tasks;

    await sql`update tasks set title = ${title}, description = ${description}, status = ${status}, WHERE id = ${id}`;
  }

  async delete(id) {
    await sql`delete from tasks where id = ${id}`;
  }
}
