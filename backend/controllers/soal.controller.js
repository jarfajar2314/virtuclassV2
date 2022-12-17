const db = require("../models");
const Soal = db.soal;

exports.create = (req, res) => {
	Soal.create({
		id_modul: req.body.id_modul,
		judul: req.body.judul,
		isi_soal: req.body.isi_soal,
		pilihan_jawaban: req.body.pilihan_jawaban,
		kunci_jawaban: req.body.kunci_jawaban,
	})
		.then(() => {
			res.status(200).send({
				message: "Soal was created successfully.",
			});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};
