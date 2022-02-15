const capitalizationCheck = (str) => {
  let array = str.toLowerCase().split(" ");
  for (let i= 0; i< array.length; i++) {
    if (array[i].length > 2) {
      array[i] = array[i][0].toUpperCase() + array[i].slice(1)
    }
  }
  return array.join(" ")
};

const checkName = (req, res, next) => {
  const { name } = req.body;
  if (name) {
    next();
  } else {
    res.status(422).json({
      success: false,
      payload: "Must include name field",
    });
  }
};

module.exports = {
  capitalizationCheck,
  checkName,
};
