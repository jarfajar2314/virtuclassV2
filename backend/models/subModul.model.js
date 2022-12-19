module.exports = (sequelize, Sequelize) => {
	const SubModul = sequelize.define("submodul", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		nama: {
			type: Sequelize.STRING,
		},
		materi: {
			type: Sequelize.TEXT,
		},
		id_modul: {
			type: Sequelize.INTEGER,

			references: {
				model: "moduls",
				key: "id",
			},
		},
	});

	return SubModul;
};
