import { fastify } from "fastify";
import { DatabaseMemory } from "./Database-memory.js";

const server = fastify();

const database = new DatabaseMemory();

server.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body;

  database.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send();
});

server.get("/videos", () => {
  const videos = database.list();

  return videos;
});

server.put("/videos/:id", () => {
  return "Bem vindo ao login";
});

server.delete("/videos/:id", () => {
  return "Bem vindo ao login";
});

server.listen({ port: 3333 });
