const verifyApiKey = (req, res, next) => {
  const { secret_key } = req.headers;
  console.log(
    "secret_key.localeCompare(process.env.API_KEY): ",
    secret_key.localeCompare(process.env.API_KEY)
  );

  if (secret_key.localeCompare(process.env.API_KEY) === 0) {
    return next();
  } else {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = verifyApiKey;
