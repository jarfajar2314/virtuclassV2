const db = require("../models");
const config = require("../config/auth.config");
const Siswa = db.siswa;
const Guru = db.guru;
const Admin = db.admin;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
	var role = req.body.role;

	if (role == "siswa") {
		Siswa.create({
			nama: req.body.nama,
			asal_sekolah: req.body.asalSekolah,
			jenis_kelamin: req.body.jenisKelamin,
			email: req.body.email,
			password: bcrypt.hashSync(req.body.password, 8),
			telepon: req.body.nomorTelp,
			kelas: req.body.kelas,
			bukti_identitas_pelajar: req.body.kartuPelajar,
			validated: 0,
		})
			.then(() => {
				res.send({
					message: "Student was registered successfully.",
				});
			})
			.catch((err) => {
				res.status(500).send({ message: err.message });
			});
	} else if (role == "guru") {
		Guru.create({
			nama: req.body.nama,
			email: req.body.email,
			password: bcrypt.hashSync(req.body.password, 8),
		})
			.then(() => {
				res.send({
					message: "Teacher was registered successfully.",
				});
			})
			.catch((err) => {
				res.status(500).send({ message: err.message });
			});
	} else {
		res.status(400).send({
			message: "Role not found.",
		});
	}
};

exports.signin = (req, res) => {
	var role = req.body.role;

	if (role == "siswa") {
		Siswa.findOne({
			where: {
				email: req.body.email,
			},
		})
			.then((siswa) => {
				if (!siswa) {
					return res
						.status(404)
						.send({ message: "Email not found." });
				}

				var passwordIsValid = bcrypt.compareSync(
					req.body.password,
					siswa.password
				);

				if (!passwordIsValid) {
					return res.status(401).send({
						accessToken: null,
						message: "Invalid Password!",
					});
				}

				var token = jwt.sign({ id: siswa.id }, config.secret, {
					expiresIn: 86400, // 24 hours
				});

				res.status(200).send({
					id: siswa.id,
					nama: siswa.nama,
					email: siswa.email,
					role: "siswa",
					isValidated: siswa.validated,
					accessToken: token,
				});
			})
			.catch((err) => {
				res.status(500).send({ message: err.message });
			});
	} else if (role == "guru") {
		Guru.findOne({
			where: {
				email: req.body.email,
			},
		})
			.then((guru) => {
				if (!guru) {
					return res
						.status(404)
						.send({ message: "Email not found." });
				}

				var passwordIsValid = bcrypt.compareSync(
					req.body.password,
					guru.password
				);

				if (!passwordIsValid) {
					return res.status(401).send({
						accessToken: null,
						message: "Invalid Password!",
					});
				}

				var token = jwt.sign({ id: guru.id }, config.secret, {
					expiresIn: 86400, // 24 hours
				});

				res.status(200).send({
					id: guru.id,
					nama: guru.nama,
					email: guru.email,
					role: "guru",
					accessToken: token,
				});
			})
			.catch((err) => {
				res.status(500).send({ message: err.message });
			});
	} else if (role == "admin") {
		Admin.findOne({
			where: {
				email: req.body.email,
			},
		})
			.then((admin) => {
				if (!admin) {
					return res
						.status(404)
						.send({ message: "Email not found." });
				}

				var passwordIsValid = bcrypt.compareSync(
					req.body.password,
					admin.password
				);

				if (!passwordIsValid) {
					return res.status(401).send({
						accessToken: null,
						message: "Invalid Password!",
					});
				}

				var token = jwt.sign({ id: admin.id }, config.secret, {
					expiresIn: 86400, // 24 hours
				});

				res.status(200).send({
					id: admin.id,
					nama: admin.nama,
					email: admin.email,
					role: "admin",
					accessToken: token,
				});
			})
			.catch((err) => {
				res.status(500).send({ message: err.message });
			});
	} else {
		res.status(400).send({
			message: "Role not found.",
		});
	}
};
