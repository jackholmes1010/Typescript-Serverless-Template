import IEvent from '../lib/IEvent'
import IResponse from '../lib/IResponse'

export const index = async (event: IEvent): Promise<IResponse> => {
    return {
        statusCode: 200,
        body: 'This is a lambda function'
    }
}
