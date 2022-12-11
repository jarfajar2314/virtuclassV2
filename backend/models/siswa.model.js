module.exports = (sequelize, Sequelize) => {
	const Siswa = sequelize.define("student", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		email: {
			type: Sequelize.STRING,
		},
		password: {
			type: Sequelize.STRING,
		},
		nama: {
			type: Sequelize.STRING,
		},
		jenis_kelamin: {
			type: Sequelize.STRING,
		},
		asal_sekolah: {
			type: Sequelize.STRING,
		},
		kelas: {
			type: Sequelize.STRING,
		},
		telepon: {
			type: Sequelize.STRING,
		},
		profil_picture: {
			type: Sequelize.STRING,
		},
		bukti_identitas_pelajar: {
			type: Sequelize.STRING,
		},
		validated: {
			type: Sequelize.INTEGER,
		},
	});

	return Siswa;
};
