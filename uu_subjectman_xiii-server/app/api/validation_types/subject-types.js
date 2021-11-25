/* eslint-disable */
const subjectDtoInType = shape({
  //Will not change for both mutations
  id: id(),
  awid: string(),
  credits: number(),
  degree: oneOf(["Bc.", "Ing.", "Mgr."]),
  links: array(uri()),
  topics: array(
    shape({
      ref: string(),
      id: string(),
    })
  ),
  tutor: shape({
    title: string(),
    name: string(),
    surname: string(),
  }),
  //Will change for both mutations
  language: shape({
    cz: shape({
      name: string(),
      description: string(),
      form: oneOf(["denni", "dalkove"]),
      goal: string(),
      severity: string(),
    }),
    eng: shape({
      name: string(),
      description: string(),
      form: oneOf(["daily", "distant"]),
      goal: string(),
      severity: string(),
    }),
  }),
});
