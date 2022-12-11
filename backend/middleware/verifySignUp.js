const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;
const Siswa = db.siswa;
const Guru = db.guru;
const Admin = db.admin;

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

checkRolesExisted = (req, res, next) => {
	if (req.body.roles) {
		for (let i = 0; i < req.body.roles.length; i++) {
			if (!ROLES.includes(req.body.roles[i])) {
				res.status(400).send({
					message:
						"Failed! Role does not exist = " + req.body.roles[i],
				});
				return;
			}
		}
	}

	next();
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
	checkRolesExisted: checkRolesExisted,
};

module.exports = verifySignUp;
