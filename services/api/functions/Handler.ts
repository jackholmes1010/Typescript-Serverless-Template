import IEvent from 'lib/build/IEvent'
import IResponse from 'lib/build/IResponse'
import { ok } from 'lib/build/Responses'

export const index = async (event: IEvent): Promise<IResponse> => {
    return ok('this is a lambd function')
}
