const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");

const User = require("../models/users");

router
    .route("/")
    .get((req, res) => {
        //render register page
        res.render("sign-up");
    })
    .post(async (req, res) => {
        //generate salt to hash password
        const salt = await bcrypt.genSalt(10);

        //hash password and save to database
        req.body.password = await bcrypt.hash(req.body.password, salt);
        await User.create(req.body);

        //redirect to login page
        res.redirect("../src/app/login")
    })