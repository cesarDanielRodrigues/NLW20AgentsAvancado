import {fastify} from "fastify"
import {client} from "./db/connection.ts"
import {serializerCompiler, validatorCompiler, type ZodTypeProvider} from "fastify-type-provider-zod"
import {fastifyCors} from "@fastify/cors"
import { env } from "./env.ts"
import { getRoomsRoute } from "./http/routes/get-rooms.ts"
import { createRoomRoute } from "./http/routes/create-room.ts"
import { getRoomQuestionsRoute } from "./http/routes/get-room-questions.ts"


const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors,{
  origin: ["http://127.0.0.1:5173", "http://localhost:5173"]
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get("/health", ()=>{
  return "OK"
})

app.register(getRoomsRoute)
app.register(createRoomRoute)
app.register(getRoomQuestionsRoute)

app.listen({port: env.PORT})