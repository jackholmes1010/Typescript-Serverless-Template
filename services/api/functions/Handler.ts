import IEvent from 'lib/build/IEvent'
import IResponse from 'lib/build/IResponse'
import { ok } from 'lib/build/Responses'
import { generate } from 'lib/build/IdGenerator'

export const id = async (event: IEvent): Promise<IResponse> => {
    return ok({
        id: generate()
    })
}
