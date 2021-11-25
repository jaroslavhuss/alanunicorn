"use strict";
const SubjectAbl = require("../../abl/subject-abl.js");

class SubjectController {

  subjectUpdate(ucEnv) {
    return SubjectAbl.subjectUpdate(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  subjectRead(ucEnv) {
    return SubjectAbl.subjectRead(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  subjectDelete(ucEnv) {
    return SubjectAbl.subjectDelete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  subjectCreate(ucEnv) {
    return SubjectAbl.subjectCreate(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new SubjectController();
