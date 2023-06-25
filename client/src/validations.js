const validations = (input) => {
  let error = {};

  if (
    input.name.length < 3 ||
    input.name.length === 0 
  ) {
    error.name = "Name Requiered";
  }
  if (input.difficulty <= 0 || input.difficulty > 5 || !input.difficulty) {
    error.difficulty = "Difficulty Requered";
  }
  if (input.countries.length) {
    error.countries = "You must select at least one country";
  }

  return error;
};

export default validations;
