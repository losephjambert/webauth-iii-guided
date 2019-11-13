const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, checkRole(["student"]), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

function checkRole(roles) {
  return function(req, res, next) {
    if (roles.includes(req.decodedToken.role)) {
      next();
    } else {
      res
        .status(403)
        .json({ message: `A user with role ${role} can't touch this route.` });
    }
  };
}

module.exports = router;
