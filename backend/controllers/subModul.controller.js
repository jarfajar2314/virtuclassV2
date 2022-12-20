const db = require("../models");
const SubModul = db.submodul;

exports.create = (req, res) => {
	SubModul.create({
		nama: req.body.nama,
		materi: JSON.stringify(req.body.materi),
		id_modul: req.body.id_modul,
	})
		.then(() => {
			res.status(200).send({
				message: "Submodul was created successfully.",
			});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};
