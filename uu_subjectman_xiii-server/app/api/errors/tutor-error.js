"use strict";

const SubjectmanXiiiUseCaseError = require("./subjectman-xiii-use-case-error.js");
const TUTOR_ERROR_PREFIX = `${SubjectmanXiiiUseCaseError.ERROR_PREFIX}tutor/`;

const Create = {
  UC_CODE: `${TUTOR_ERROR_PREFIX}create/`,
  
};

module.exports = {
  Create
};
