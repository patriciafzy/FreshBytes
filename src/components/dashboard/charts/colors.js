const colors = [
  "#fad390",
  "#f6b93b",
  "#fa983a",
  "#e58e26",
  "#f8c291",
  "#e55039",
  "#eb2f06",
  "#b71540",
  "#6a89cc",
  "#4a69bd",
  "#1e3799",
  "#0c2461",
  "#82ccdd",
  "#60a3bc",
  "#3c6382",
  "#0a3d62",
  "#b8e994",
  "#78e08f",
  "#38ada9",
  "#079992",
];

export default (length) => {
  let allowRepeats = false;
  if (length < colors.length) allowRepeats = true;

  const result = [];
  while (result.length != length) {
    const color = colors[Math.floor(Math.random() * colors.length)];

    if (allowRepeats) {
      result.push(color);
      continue;
    }

    if (result.includes(color)) {
      continue;
    }

    result.push(color);
  }

  return result;
};
