const isSuperadmin = (req, res, next) => {
  if (req.user.role == "superadmin") {
    return next();
  } else {
    return res
      .status(403)
      .send({ message: "You are not allowed to access this" });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user.role == "admin") {
    return next();
  } else {
    return res
      .status(403)
      .send({ message: "You are not allowed to access this" });
  }
};

module.exports = { isAdmin, isSuperadmin };
