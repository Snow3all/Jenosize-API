exports.game24 = async (req, res) => {
  try {
    const { number } = req.body;
    if (number.length > 4)
      return res.status(400).send({
        message: "Must be 4 digits",
      });
    const regEx = /^[0-9]$/;
    number.forEach((numb) => {
      if (!regEx.test(numb.toString())) {
        return res.status(400).send({
          message: "Input must be 0-9",
        });
      }
    });
    //logic
    const result = game24Logic(number);
    console.log("result: ", result);
  } catch (err) {
    console.log("err: ", err);
  }
};

const game24Logic = (arr) => {
  return arr;
};