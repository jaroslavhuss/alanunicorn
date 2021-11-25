"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class SubjectMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1 }, { unique: true });
  }
  async create(subject) {
    const data = await super.insertOne(subject);
    console.log(data);
    return {};
  }
  async get(awid, id) {
    return await super.find({ awid, id });
  }
  async update(subject) {
    let filter = {
      id: subject.id,
    };
    return await super.findOneAndUpdate(filter, subject, "NONE");
  }
  async delete(awid, id) {
    return await super.deleteOne({ awid, id });
  }

  //Custom search methods
  async findByName(name) {
    let filter = {
      name,
    };
    return await super.findOne({ language });
  }
  async findById(id) {
    let filter = {
      id,
    };
    return await super.findOne(filter);
  }
}

module.exports = SubjectMongo;
