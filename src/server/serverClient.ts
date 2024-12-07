
import { appRouter } from ".";
import { createCallerFactory } from "./trpc";


const serverClient = createCallerFactory(appRouter)
export const caller = serverClient({})
