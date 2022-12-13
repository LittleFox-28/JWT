const jwt = require("jsonwebtoken");

const middlewareController = {
  //verifyToken
  verifyToken: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
        if (err) {
          res.status(403).json("Token is not valid");
        } else {
          res.user = user;
          next();
        }
      });
    } else {
      res.status(401).json("You're not authenticated");
    }
  },

  verifyTokenAndAdminAuth: (req, res, next) => {
    middlewareController.verifyToken(req, res, () => {
      if (res.user.id == req.params.id || res.user.admin) {
        next();
      } else {
        res.status(403).json("You're not allow to delete other");
      }
    });
  },
};
module.exports = middlewareController;
