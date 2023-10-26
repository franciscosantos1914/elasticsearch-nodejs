import { Client, HttpConnection } from '@elastic/elasticsearch'

function elasticSearch(): Client {
    let client: Client | undefined

    if (!client) {
        client = new Client({
            node: "http://localhost:9200/",
            Connection: HttpConnection,
            auth: {
                username: "elastic",
                password: "K9Y03304macLAc7vdR*A"
            }
        })
    }

    return client

}

export default elasticSearch()