/* eslint-disable */
const studentDtoInType = shape({
  id: id(),
  name: string(),
  surname: string(),
  email: string(),
  form: string(),
  level: oneOf(["Bc.", "Ing.", "Mgr."]),
  language: oneOf(["cs", "eng"]),
  subjects: array(id()),
  uuIdentity: string(),
  uuIdentityName: string(),
  awid: string(),
  visibility: string(),
});

const studentGetIdentity = shape({});
