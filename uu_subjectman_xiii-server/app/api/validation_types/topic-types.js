/* eslint-disable */
const topicDtoInType = shape({
  id: id(),
  difficulty: number(),
  languages: shape({
    cs: shape({
      name: string(),
      description: string(),
    }),
    eng: shape({
      name: string(),
      description: string(),
    }),
  }),
});
