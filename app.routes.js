const express = require("express");

const { getHello, getPSIReport } = require("./app.controllers");

const router = express.Router();

router.get("/", getHello);

router.post("/psi", getPSIReport);

export default router;
