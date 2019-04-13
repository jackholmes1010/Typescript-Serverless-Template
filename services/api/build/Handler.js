"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Responses_1 = require("lib/build/Responses");
exports.index = async (event) => {
    return Responses_1.ok('this is a lambd function');
};
