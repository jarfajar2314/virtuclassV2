const db = require("../models");
const Modul = db.modul;

exports.create = (req, res) => {
	Modul.create({
		nama: req.body.nama,
		id_course: req.body.id_course,
	})
		.then(() => {
			res.status(200).send({
				message: "Modul was created successfully.",
			});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};
