const db = require("../models");

init = () => {
	db.sequelize.sync({ force: true }).then(() => {
		console.log("Drop and Resync Db");
		initial();
	});

	const Admin = db.admin;
	const bcrypt = require("bcryptjs");
	function initial() {
		Admin.create({
			nama: "admin",
			email: "admin@mail.com",
			password: bcrypt.hashSync("123456", 8),
		});
	}
};

module.exports = init;
