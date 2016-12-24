"use strict";
const mongoose = require("mongoose");
class RepositoryBase {
    constructor(schemaModel) {
        this._model = schemaModel;
    }
    create(item, callback) {
        this._model.create(item, callback);
    }
    retrieve(callback) {
        this._model.find({}, callback);
    }
    update(id, item, callback) {
        this._model.update({ _id: id }, item, callback);
    }
    delete(id, callback) {
        this._model.remove({ _id: this.toObjectId(id) }, (err) => callback(err, null));
    }
    findByid(_id, callback) {
        this._model.findById(_id, callback);
    }
    toObjectId(_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RepositoryBase;
//# sourceMappingURL=BaseRepository.js.map