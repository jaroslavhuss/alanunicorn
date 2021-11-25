"use strict";

const SubjectmanXiiiUseCaseError = require("./subjectman-xiii-use-case-error.js");
const SUBJECT_ERROR_PREFIX = `${SubjectmanXiiiUseCaseError.ERROR_PREFIX}subject/`;

const SubjectCreate = {
  UC_CODE: `${SUBJECT_ERROR_PREFIX}subjectCreate/`,
  InvalidDtoIn: class extends SubjectmanXiiiUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${SubjectCreate.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid!";
    }
  },
};

const SubjectDelete = {
  UC_CODE: `${SUBJECT_ERROR_PREFIX}subjectDelete/`,
  InvalidDtoIn: class extends SubjectmanXiiiUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${SubjectDelete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid!";
    }
  },
};

const SubjectRead = {
  UC_CODE: `${SUBJECT_ERROR_PREFIX}subjectRead/`,
  InvalidDtoIn: class extends SubjectmanXiiiUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${SubjectRead.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid!";
    }
  },
};

const SubjectUpdate = {
  UC_CODE: `${SUBJECT_ERROR_PREFIX}subjectUpdate/`,
  InvalidDtoIn: class extends SubjectmanXiiiUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${SubjectUpdate.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid!";
    }
  },
};

module.exports = {
  SubjectUpdate,
  SubjectRead,
  SubjectDelete,
  SubjectCreate,
};
