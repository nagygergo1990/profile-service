const express = require("express");
const { initDB } = require("./models");
const studentRoutes = require("./routes/studentRoutes");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use("/students", studentRoutes);
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // Csak az Angular frontendnek engedélyezett
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    
    if (req.method === "OPTIONS") {
        return res.sendStatus(200); // Preflight request esetén válaszolunk
    }
    next();
});
app.options('*', cors());

const PORT = 3000;

initDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

module.exports = app;
