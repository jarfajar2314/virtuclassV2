const controller = require("../controllers/siswa.controller");

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	app.get("/api/siswa", controller.getAll);
	app.get("/api/siswa/detail/:id", controller.lihat);
	app.get("/api/siswa/detail/:id/nilai", controller.getNilai);
	app.post("/api/siswa/update/:id", controller.update);
};
