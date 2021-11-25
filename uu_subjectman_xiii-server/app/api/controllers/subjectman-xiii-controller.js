"use strict";
const SubjectmanXiiiAbl = require("../../abl/subjectman-xiii-abl.js");

class SubjectmanXiiiController {
  sayHello(ucEnv) {
    return SubjectmanXiiiAbl.sayHello(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  init(ucEnv) {
    return SubjectmanXiiiAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new SubjectmanXiiiController();
