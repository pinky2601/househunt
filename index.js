const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// ================= MONGODB CONNECT =================

// mongoose.connect("mongodb+srv://....")
//     .then(() => console.log("MongoDB Connected ✅"))
//     .catch(err => console.log(err));

// ================= HOME =================
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ================= LOGIN =================
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    console.log("Login Data:", req.body);

    res.send("Login successful ✅ Welcome " + username);
});

// ================= SEARCH =================
app.get("/search", (req, res) => {
    const location = req.query.location;

    console.log("Search request:", location);

    res.send("Searching houses in: " + location);
});

// ================= ADD HOME =================
app.post("/add-home", (req, res) => {
    const { title, location, rent } = req.body;

    console.log("New Home Added:", req.body);

    res.send(`
        <h2>Home Added Successfully ✅</h2>
        <p><b>Title:</b> ${title}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>Rent:</b> ${rent}</p>
        <a href="/addhome.html">Go Back</a>
    `);
});

// ================= SERVER START =================
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});