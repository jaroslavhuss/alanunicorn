"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/subject-error.js");

const WARNINGS = {
  subjectUpdateUnsupportedKeys: {
    code: `${Errors.SubjectUpdate.UC_CODE}unsupportedKeys`,
  },
  subjectCreateUnsupportedKeys: {
    code: `${Errors.SubjectCreate.UC_CODE}unsupportedKeys`,
  },
  subjectDeleteUnsupportedKeys: {
    code: `${Errors.SubjectDelete.UC_CODE}unsupportedKeys`,
  },
  subjectReadUnsupportedKeys: {
    code: `${Errors.SubjectRead.UC_CODE}unsupportedKeys`,
  },
};

class SubjectAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("subject");
  }

  async subjectUpdate(awid, dtoIn) {}

  async subjectRead(awid, dtoIn) {
    let validationResult = this.validator.validate("subjectDtoInType", dtoIn);
    // A1, A2
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.subjectDeleteUnsupportedKeys.code, //Pro každou metodu by měl být warning
      Errors.SubjectDelete.InvalidDtoIn
    );
    let dtoOut = {};
    try {
      const subject = await this.dao.get(awid, dtoIn.id);
      dtoOut.subject = subject;
    } catch (error) {}
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async subjectDelete(awid, dtoIn) {
    let validationResult = this.validator.validate("subjectDtoInType", dtoIn);
    // A1, A2
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.subjectDeleteUnsupportedKeys.code, //Pro každou metodu by měl být warning
      Errors.SubjectDelete.InvalidDtoIn
    );

    let dtoOut = {};

    try {
      dtoOut.status = await this.dao.delete(awid, dtoIn.id);
      console.log(dtoOut);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        // A3
        throw new Errors.SubjectDelete.SubjectDaoDeleteFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    dtoOut.message = "Předmět byl smazán";

    return dtoOut;
  }

  async subjectCreate(awid, dtoIn) {
    let validationResult = this.validator.validate("subjectDtoInType", dtoIn);
    // A1, A2
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.subjectCreateUnsupportedKeys.code, //Pro každou metodu by měl být warning
      Errors.SubjectCreate.InvalidDtoIn
    );
    let dtoOut;

    try {
      dtoOut = await this.dao.create(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        // A3
        throw new Errors.SubjectCreate.SubjectDaoCreateFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }
    // hds 3
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    dtoOut.message = "Přidání subjectu proběhlo úspěšně pod id :" + dtoOut.id;
    return dtoOut;
  }
}

module.exports = new SubjectAbl();
