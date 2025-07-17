const express = require("express");
const router = express.Router();
const { handleuser, handlelogin } = require("../controllers/user");

// GET routes to render login and signup pages
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

// POST routes to handle form submissions
router.post("/", handleuser);           // handles signup
router.post("/login", handlelogin);     // handles login

module.exports = router;
