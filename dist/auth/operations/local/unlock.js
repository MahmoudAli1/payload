"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const unlock_1 = __importDefault(require("../unlock"));
const dataloader_1 = require("../../../collections/dataloader");
const init_1 = __importDefault(require("../../../translations/init"));
const errors_1 = require("../../../errors");
async function localUnlock(payload, options) {
    const { collection: collectionSlug, data, overrideAccess = true, req = {}, } = options;
    const collection = payload.collections[collectionSlug];
    if (!collection) {
        throw new errors_1.APIError(`The collection with slug ${String(collectionSlug)} can't be found.`);
    }
    req.payload = payload;
    req.payloadAPI = 'local';
    req.i18n = (0, init_1.default)(payload.config.i18n);
    if (!req.t)
        req.t = req.i18n.t;
    if (!req.payloadDataLoader)
        req.payloadDataLoader = (0, dataloader_1.getDataLoader)(req);
    return (0, unlock_1.default)({
        data,
        collection,
        overrideAccess,
        req,
    });
}
exports.default = localUnlock;
//# sourceMappingURL=unlock.js.map