// This seems like a great idea to do myself, behold

export default data => {
  let answerString = "";
  data.map(
    (q, i) =>
      (answerString += i + 1 + "=" + q.c + `${i < data.length - 1 ? "&" : ""}`)
  );

  return answerString;
};
