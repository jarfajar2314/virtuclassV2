const db = require("../models");
const User = db.user;
const Siswa = db.siswa;
const Guru = db.guru;

checkDuplicateUsernameOrEmail = (req, res, next) => {
	// Username
	User.findOne({
		where: {
			username: req.body.username,
		},
	}).then((user) => {
		if (user) {
			res.status(400).send({
				message: "Failed! Username is already in use!",
			});
			return;
		}

		// Email
		User.findOne({
			where: {
				email: req.body.email,
			},
		}).then((user) => {
			if (user) {
				res.status(400).send({
					message: "Failed! Email is already in use!",
				});
				return;
			}

			next();
		});
	});
};

checkDuplicateEmail = (req, res, next) => {
	Siswa.findOne({
		where: {
			email: req.body.email,
		},
	}).then((siswa) => {
		if (siswa) {
			res.status(400).send({
				message: "Failed! Email is already in use!",
			});
			return;
		}

		// Email
		Guru.findOne({
			where: {
				email: req.body.email,
			},
		}).then((guru) => {
			if (guru) {
				res.status(400).send({
					message: "Failed! Email is already in use!",
				});
				return;
			}

			next();
		});
	});
};

const verifySignUp = {
	checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
	checkDuplicateEmail: checkDuplicateEmail,
};

module.exports = verifySignUp;
