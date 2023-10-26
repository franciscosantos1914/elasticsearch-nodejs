import express, { Request, Response } from 'express'
import ElasticSearchDatabase from './elasticsearch/crud'

const server = express()

server.get("/", async (request: Request, response: Response) => {
    const { search } = request.query
    const result = await ElasticSearchDatabase.read(search as string)
    return response.json(result)
})

server.post("/", async (request: Request, response: Response) => {
    const result = await ElasticSearchDatabase.create({
        ...request.body
    })
    return response.json(result)
})

server.put("/", async (request: Request, response: Response) => {
    const result = await ElasticSearchDatabase.update(request.params["id"], {
        ...request.body
    })
    return response.json(result)
})

server.delete("/", async (request: Request, response: Response) => {
    const result = await ElasticSearchDatabase.delete(+request.params["id"])
    return response.json(result)
})

server.listen(3333, () => console.log("Running....."))