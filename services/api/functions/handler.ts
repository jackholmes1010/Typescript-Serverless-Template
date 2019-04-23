import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';

export const index = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    return {
        statusCode: 200,
        body: 'This is a lambda function'
    }
}
