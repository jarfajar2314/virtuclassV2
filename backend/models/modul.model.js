module.exports = (sequelize, Sequelize) => {
	const Modul = sequelize.define("modul", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		judul: {
			type: Sequelize.STRING,
		},
		deskripsi: {
			type: Sequelize.STRING,
		},
		kelas: {
			type: Sequelize.STRING,
		},
		// id_course: {
		// 	type: Sequelize.INTEGER,

		// 	references: {
		// 		model: "courses",
		// 		key: "id",
		// 	},
		// },
	});

	return Modul;
};
