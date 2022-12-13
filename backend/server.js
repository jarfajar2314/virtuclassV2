if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const dbSync = require("./middleware/dbSync");

const app = express();

var corsOptions = {
	origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

if (process.env.NODE_ENV !== "production") {
	dbSync();
} else {
	db.sequelize.sync();
}

// route
app.get("/", (req, res) => {
	res.json({ message: "Virtuclass v2 API." });
});

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/admin.routes")(app);
require("./routes/siswa.routes")(app);
require("./routes/course.routes")(app);
require("./routes/modul.routes")(app);
require("./routes/subModul.routes")(app);
require("./routes/soal.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
