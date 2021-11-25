"use strict";

const SubjectmanXiiiUseCaseError = require("./subjectman-xiii-use-case-error.js");
const STUDENT_ERROR_PREFIX = `${SubjectmanXiiiUseCaseError.ERROR_PREFIX}student/`;

const Create = {
  UC_CODE: `${STUDENT_ERROR_PREFIX}create/`,
  InvalidDtoIn: class extends SubjectmanXiiiUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid!";
    }
  },
};

const Get = {
  UC_CODE: `${STUDENT_ERROR_PREFIX}get/`,
  InvalidDtoIn: class extends SubjectmanXiiiUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid!";
    }
  },
};

module.exports = {
  Get,
  Create,
};
