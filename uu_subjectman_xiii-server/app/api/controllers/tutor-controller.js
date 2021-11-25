"use strict";
const TutorAbl = require("../../abl/tutor-abl.js");

class TutorController {

  create(ucEnv) {
    return TutorAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new TutorController();
