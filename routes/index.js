var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const data = {
    data: {
      msg: "Hello World",
    },
  };

  res.json(data);
});

// Testing routes GET, POST, PUT and DELETE
router.get("/user", (req, res) => {
  const data = {
    data: {
      msg: "Got a GET request",
    },
  };

  res.json(data);
});

router.post("/user", (req, res) => {
  const data = {
    data: {
      msg: "Got a POST request",
    },
  };

  res.json(data);
});

router.put("/user", (req, res) => {
  const data = {
    data: {
      msg: "Got a PUT request (201)",
    },
  };

  res.status(201).json(data);
});

router.delete("/user", (req, res) => {
  // DELETE requests should return 204 No Content
  res.status(204).send();
});

/* router.get("/hello/:msg", (req, res) => {
  const data = {
    data: {
      msg: req.params.msg
    }
  };

  res.json(data);
}); */

module.exports = router;
