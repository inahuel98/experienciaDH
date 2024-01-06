const express = require("express");
const app = express();

const path = require("path");


app.listen(3030, () => console.log("Servidor corriendo"));

app.get("/", (req, res) => {
    const ruta_index = path.join(__dirname, "/views/index.html");
    res.sendFile(ruta_index);
});
app.get("/babbage", (req, res) => {
    const ruta_babbage = path.join(__dirname, "/views/babbage.html");
    res.sendFile(ruta_babbage);
});
app.get("/berners-lee", (req, res) => {
    const ruta_berners = path.join(__dirname, "/views/berners-lee.html");
    res.sendFile(ruta_berners);
});
app.get("/clarke", (req, res) => {
    const ruta_clarke = path.join(__dirname, "/views/clarke.html");
    res.sendFile(ruta_clarke);
});
app.get("/hamilton", (req, res) => {
    const ruta_hamilton = path.join(__dirname, "/views/hamilton.html");
    res.sendFile(ruta_hamilton);
});
app.get("/hopper", (req, res) => {
    const ruta_hopper = path.join(__dirname, "/views/hopper.html");
    res.sendFile(ruta_hopper);
});
app.get("/lovelace", (req, res) => {
    const ruta_lovelace = path.join(__dirname, "/views/lovelace.html");
    res.sendFile(ruta_lovelace);
});
app.get("/turing", (req, res) => {
    const ruta_turing = path.join(__dirname, "/views/turing.html");
    res.sendFile(ruta_turing);
});

app.use(express.static("public"))