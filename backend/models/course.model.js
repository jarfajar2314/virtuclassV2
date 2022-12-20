module.exports = (sequelize, Sequelize) => {
	const Course = sequelize.define("course", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		nama: {
			type: Sequelize.STRING,
		},
		description: {
			type: Sequelize.STRING,
		},
		kelas: {
			type: Sequelize.STRING,
		},
		backgroundImage: {
			type: Sequelize.STRING,
		},
		id_guru: {
			type: Sequelize.INTEGER,

			references: {
				model: "teachers",
				key: "id",
			},
		},
	});

	return Course;
};
