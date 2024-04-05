import fastify  from "fastify";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod"
import { createEvent } from "./routes/create-event";
import { registerForEvent } from "./routes/register-for-event";
import { getEvent } from "./routes/get-event";
import { getAttendeeBadge } from "./routes/get-attendee-badge";
import { checkIn } from "./routes/check-in";
import { getEventAttendees } from "./routes/get-event-attendees";
import { fastifySwagger } from "@fastify/swagger"
import { fastifySwaggerUi } from "@fastify/swagger-ui"
import { errorHandler } from "./error-handler";
import { fastifyCors } from "@fastify/cors"

const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, {
    origin: ["http://localhost:5173", "http://localhost:3000", "http://localhost:3001",["https://nlw-events-react.vercel.app/"] ]
})
app.register(fastifySwagger, {
    swagger: {
        consumes: ['aplication/json'],
        produces: ['aplication/json'],
        info:{
            title: "pass.in",
            description: "Especificações da API para o backend da aplicação pass.in",
            version: "1.0.0"
        },
        },
    transform: jsonSchemaTransform,
    
});
app.register(fastifySwaggerUi, {
    routePrefix: "/docs",   
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
})