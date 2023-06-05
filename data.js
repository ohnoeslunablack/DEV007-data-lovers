export const filterOrdenamiento = (data, ordenamiento) => {
  const sortedData = data.pokemon.sort(function (a, b) {
    if (ordenamiento === "A-Z") {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
    }
    if (ordenamiento === "Z-A") {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return -1;
      }
    }
  });

  return sortedData;
};
export const filterGeneration = (data, condition) => {
  const result = data.pokemon.filter(item => item.generation.includes(condition.toLowerCase()));
  return result;
};
export const filterData = (data, condition) => {
  const result = data.pokemon.filter(item => item.type.includes(condition.toLowerCase()));
  return result;
};