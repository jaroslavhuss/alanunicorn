"use strict";

const SubjectmanXiiiUseCaseError = require("./subjectman-xiii-use-case-error.js");
const TOPIC_ERROR_PREFIX = `${SubjectmanXiiiUseCaseError.ERROR_PREFIX}topic/`;

const Create = {
  UC_CODE: `${TOPIC_ERROR_PREFIX}create/`,
  
};

module.exports = {
  Create
};
