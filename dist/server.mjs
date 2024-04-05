import {
  registerForEvent
} from "./chunk-KSNDPUEE.mjs";
import {
  errorHandler
} from "./chunk-ZX3NGTZJ.mjs";
import {
  checkIn
} from "./chunk-SA5U26PZ.mjs";
import {
  createEvent
} from "./chunk-V7UVKMEI.mjs";
import "./chunk-IJ5G3CPU.mjs";
import {
  getAttendeeBadge
} from "./chunk-WGGLNMGO.mjs";
import {
  getEventAttendees
} from "./chunk-6GCUW6SN.mjs";
import {
  getEvent
} from "./chunk-5A23N7XO.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-46LWWE6N.mjs";

// src/server.ts
import fastify from "fastify";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { fastifyCors } from "@fastify/cors";
var app = fastify();
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(fastifyCors, {
  origin: ["http://localhost:5173", "http://localhost:3000", "http://localhost:3001", ["https://nlw-events-react.vercel.app/"]]
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["aplication/json"],
    produces: ["aplication/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o backend da aplica\xE7\xE3o pass.in",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({
  port: 8080,
  host: "0.0.0.0"
}).then(() => {
  console.log("Server listening on port http://localhost:8080");
});
