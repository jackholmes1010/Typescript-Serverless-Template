import IResponse from './IResponse'

export const ok = (message: any): IResponse => {
    return {
        statusCode: 200,
        body: JSON.stringify(message)
    }
}
