import { fastify } from "fastify";
import { DatabasePostgres } from "./database-postgres.js";

const server = fastify();

const database = new DatabasePostgres();

// CRUD USERS

server.post("/users", async (request, reply) => {
  const { fullname, age } = request.body;

  await database.create({
    fullname,
    age,
  });

  return reply.status(201).send();
});

server.get("/users", async (request) => {
  const search = request.query.search;

  const users = await database.list(search);

  return users;
});

server.put("/users/:id", async (request, reply) => {
  const videoId = request.params.id;
  const { fullname, age,  } = request.body;

  await database.update(videoId, {
    title,
    age,
    ,
  });

  return reply.status(204).send();
});

server.delete("/users/:id", async (request, reply) => {
  const videoId = request.params.id;

  await database.delete(videoId);

  return reply.status(204).send();
});

// CRUD TASKS

server.post("/tasks", async (request, reply) => {
  const { title, description, status } = request.body;

  await database.create({
    title,
    description,
    status
  });

  return reply.status(201).send();
});

server.get("/tasks", async (request) => {
  const search = request.query.search;

  const tasks = await database.list(search);

  return tasks;
});

server.put("/tasks/:id", async (request, reply) => {
  const videoId = request.params.id;
  const { title, description, status  } = request.body;

  await database.update(videoId, {
    title,
    description,
    status
  });

  return reply.status(204).send();
});

server.delete("/tasks/:id", async (request, reply) => {
  const videoId = request.params.id;

  await database.delete(videoId);

  return reply.status(204).send();
});

server.listen({
  host: "0.0.0.0",
  port: process.env.PORT ?? 3333,
});
