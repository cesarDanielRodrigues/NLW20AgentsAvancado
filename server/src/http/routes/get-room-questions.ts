import { FastifyPluginCallbackZod } from "fastify-type-provider-zod"
import { z, zod } from "zod/v4"


export const getRoomQuestionsRoute: FastifyPluginCallbackZod = (app) => {
  app.get("/rooms/:roomId/questions",
    {
      schema: {
        params: z.object({
          roomId: z.string()
        })
      }
    }
    , async (request, reply) => {
      const { roomId } = request.params
    })
}