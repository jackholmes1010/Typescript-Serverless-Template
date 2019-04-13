"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ok = (message) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message
        })
    };
};
exports.badRequest = () => {
    return {
        statusCode: 400,
        body: ""
    };
};