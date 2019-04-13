export default interface IResponse {
    statusCode: number;
    body?: string | undefined;
    headers?: object | undefined;
}
