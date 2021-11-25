"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class StudentMongo extends UuObjectDao {
  async createSchema() {}
  async create(student) {
    const data = await super.insertOne(student);
    return data;
  }

  async get(uuIdentity) {
    const data = await super.findOne({ uuIdentity });
    return data;
  }
}

module.exports = StudentMongo;
