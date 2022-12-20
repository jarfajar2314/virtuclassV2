const db = require("../models");
const Nilai = db.nilai;

exports.update = (req, res) => {
	Nilai.update(
		{
			nilai: req.body.nilai,
		},
		{
			where: {
				id_siswa: req.body.id_siswa,
				kategori: req.body.kategori,
			},
		}
	)
		.then((result) => {
			if (!result[0]) {
				return res.status(404).send({
					message: "Id Siswa not found.",
				});
			}
			res.status(200).send({ message: "Nilai updated successfully." });
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};
