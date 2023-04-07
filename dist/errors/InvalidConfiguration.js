"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const APIError_1 = __importDefault(require("./APIError"));
class InvalidConfiguration extends APIError_1.default {
    constructor(message) {
        super(message, http_status_1.default.INTERNAL_SERVER_ERROR);
    }
}
exports.default = InvalidConfiguration;
//# sourceMappingURL=InvalidConfiguration.js.map