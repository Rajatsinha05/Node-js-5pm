const isValid = (req, res, next) => {
  const { username, email, password } = req.body;
  if (username && email && password) {
    next();
  } else {
    res.status(404).send("Invalid data");
  }
};

module.exports =isValid