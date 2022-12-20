const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const Siswa = db.siswa;
const Guru = db.guru;
const Admin = db.admin;

verifyToken = (req, res, next) => {
	let token = req.headers["x-access-token"];

	if (!token) {
		return res.status(403).send({
			message: "No token provided!",
		});
	}

	jwt.verify(token, config.secret, (err, decoded) => {
		if (err) {
			return res.status(401).send({
				message: "Unauthorized!",
			});
		}
		req.userId = decoded.id;
		req.userRole = decoded.role;
		next();
	});
};

isModerator = (req, res, next) => {
	User.findByPk(req.userId).then((user) => {
		user.getRoles().then((roles) => {
			for (let i = 0; i < roles.length; i++) {
				if (roles[i].name === "moderator") {
					next();
					return;
				}
			}

			res.status(403).send({
				message: "Require Moderator Role!",
			});
			return;
		});
	});
};

isModeratorOrAdmin = (req, res, next) => {
	User.findByPk(req.userId).then((user) => {
		user.getRoles().then((roles) => {
			for (let i = 0; i < roles.length; i++) {
				if (roles[i].name === "moderator") {
					next();
					return;
				}

				if (roles[i].name === "admin") {
					next();
					return;
				}
			}

			res.status(403).send({
				message: "Require Moderator or Admin Role!",
			});
		});
	});
};

isStudent = (req, res, next) => {
	if (req.userRole == "siswa") {
		Siswa.findByPk(req.userId).then((siswa) => {
			if (siswa) {
				next();
				return;
			} else {
				res.status(404).send({
					message: "User not found.",
				});
				return;
			}
		});
	} else {
		res.status(403).send({
			message: "Require Siswa Role!",
		});
		return;
	}
};

isTeacher = (req, res, next) => {
	if (req.userRole == "guru") {
		Guru.findByPk(req.userId).then((guru) => {
			if (guru) {
				next();
				return;
			} else {
				res.status(404).send({
					message: "User not found.",
				});
				return;
			}
		});
	} else {
		res.status(403).send({
			message: "Require Guru Role!",
		});
		return;
	}
};

isAdmin = (req, res, next) => {
	if (req.userRole == "admin") {
		Admin.findByPk(req.userId).then((admin) => {
			if (admin) {
				next();
				return;
			} else {
				res.status(404).send({
					message: "User not found.",
				});
				return;
			}
		});
	} else {
		res.status(403).send({
			message: "Require Admin Role!",
		});
		return;
	}
};

const authJwt = {
	verifyToken: verifyToken,
	isAdmin: isAdmin,
	isModerator: isModerator,
	isModeratorOrAdmin: isModeratorOrAdmin,
	isStudent: isStudent,
	isTeacher: isTeacher,
};

module.exports = authJwt;
