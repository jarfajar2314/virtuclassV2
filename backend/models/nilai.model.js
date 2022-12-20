module.exports = (sequelize, Sequelize) => {
	const Nilai = sequelize.define("score", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		kategori: {
			type: Sequelize.STRING,
		},
		nilai: {
			type: Sequelize.INTEGER,
		},
		id_siswa: {
			type: Sequelize.INTEGER,

			references: {
				model: "students",
				key: "id",
			},
		},
	});

	return Nilai;
};
