import IResponse from './IResponse'

export const ok = (message: string): IResponse => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message
        })
    }
}

export const badRequest = (): IResponse => {
    return {
        statusCode: 400,
        body: ""
    }
}