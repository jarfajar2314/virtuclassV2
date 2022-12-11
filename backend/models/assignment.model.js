module.exports = (sequelize, Sequelize) => {
	const Assignment = sequelize.define("assignmentFile", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		filename: {
			type: Sequelize.STRING,
		},
		filetype: {
			type: Sequelize.STRING,
		},
		size: {
			type: Sequelize.STRING,
		},
		// id_siswa: {
		// 	type: Sequelize.INTEGER,

		// 	references: {
		// 		model: "students",
		// 		key: "id",
		// 	},
		// },
	});

	return Assignment;
};
