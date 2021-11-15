const getTea = (name = "Earl Grey") => {
    return {
      drinkType: "Tea",
      name,
    };
  };
  
  module.exports = {
    getTea,
  };