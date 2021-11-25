"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/student-error.js");

const WARNINGS = {
  studentCreateUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`,
  },
  studentCreateUnsupportedKeys: {
    code: `${Errors.Get.UC_CODE}unsupportedKeys`,
  },
};
const EXECUTIVES_PROFILE = "Executives";

class StudentAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("student");
  }

  async get(awid, dtoIn, session, authorizationResult) {
    let validationResult = this.validator.validate("studentGetIdentity", dtoIn);
    // A1, A2
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.studentCreateUnsupportedKeys.code, //Pro každou metodu by měl být warning
      Errors.Get.InvalidDtoIn
    );

    let dtoOut = {};
    try {
      const identity = session.getIdentity().getUuIdentity();
      dtoOut.identity = identity;
      dtoOut.results = await this.dao.get(session.getIdentity().getUuIdentity());
    } catch (e) {
      console.log(e);
    }

    // hds 5
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }
  async create(awid, dtoIn, session, authorizationResult) {
    let validationResult = this.validator.validate("studentDtoInType", dtoIn);
    // A1, A2
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.studentCreateUnsupportedKeys.code, //Pro každou metodu by měl být warning
      Errors.Create.InvalidDtoIn
    );
    dtoIn.visibility = authorizationResult.getAuthorizedProfiles().includes(EXECUTIVES_PROFILE);
    // hds 3
    dtoIn.uuIdentity = session.getIdentity().getUuIdentity();
    dtoIn.uuIdentityName = session.getIdentity().getName();
    dtoIn.awid = awid;
    let dtoOut = {};
    try {
      dtoOut = await this.dao.create(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        // A3
        throw new Errors.Create({ uuAppErrorMap }, e);
      }
      throw e;
    }

    // hds 5
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }
}

module.exports = new StudentAbl();
