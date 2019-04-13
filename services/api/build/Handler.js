"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Responses_1 = require("lib/build/Responses");
const IdGenerator_1 = require("lib/build/IdGenerator");
exports.id = async (event) => {
    return Responses_1.ok({
        id: IdGenerator_1.generate()
    });
};
