export default data =>
  data.split("&").map(a => ({ [a.split("=")[0]]: a.split("=")[1] }));
