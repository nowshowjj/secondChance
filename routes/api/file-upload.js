const express = require("express");
const router = require("express").Router();
const multer = require("multer");

const uploading = multer({
    dest: "./public/uploads/"
})


router.post("/", (req, res) => {
    console.log(req.body)
    res.send()
})



module.exports = router