import ElasticSearch from './elastic'
import { generateId } from '../helpers/generate-ids'

class ElasticSearchDatabase {
    async create(data: any) {
        try {
            if (Array.isArray(data)) {
                for await (const element of data) {
                    await this.save(element)
                }
            } else await this.save(data)
            return data
        } catch (error) {
            console.error(error)
            return Array.isArray(data) ? [] : {}
        }
    }

    private async save(data: any) {
        await ElasticSearch.index({
            id: generateId().toString(),
            index: "testing",
            document: {
                ...data
            }
        })
    }

    async read(query_param: string) {
        try {
            return await ElasticSearch.search({
                query: {
                    match: {
                        query_param
                    }
                }
            })
        } catch (error) {
            console.error(error)
            return []
        }
    }

    async update(data: any, id: number) {
        try {
            return await ElasticSearch.update({
                id: String(id),
                index: "testing",
                doc: {
                    ...data
                }
            })
        } catch (error) {
            console.error(error)
            return []
        }
    }

    async delete(id: number) {
        try {
            return await ElasticSearch.delete({
                id: String(id),
                index: "testing"
            })
        } catch (error) {
            console.error(error)
            void 0
        }
    }

}

export default new ElasticSearchDatabase()