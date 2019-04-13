export default interface IEvent {
    resource: string;
    path: string;
    httpMethod: string;
    headers: {[key: string]: string};
    queryStringParameters?: {[key: string]: string};
    pathParameters?: {[key: string]: string};
    stageVariables?: {[key: string]: string};
    requestContext: object;
    body: string;
    isBase64Encoded: boolean;
}
