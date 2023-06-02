 
 export const filterOrdenamiento = (data, ordenamiento) => {
    const sortedData = data.pokemon.sort(function (a, b){
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
    let result = data.pokemon.filter(item => item.generation.includes(condition.toLowerCase()));
    console.log(result)
    return result;
  };
  export const filterData = (data, condition) => {
    let result = data.pokemon.filter(item => item.type.includes(condition.toLowerCase()));
    console.log(result)
    return result;
  };