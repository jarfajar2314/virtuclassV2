const { guru, nilai } = require("../models");
const db = require("../models");

init = () => {
	db.sequelize.sync({ force: true }).then(() => {
		console.log("Drop and Resync Db");
		initial();
	});

	const Admin = db.admin;
	const Siswa = db.siswa;
	const Course = db.course;
	const Guru = db.guru;
	const Nilai = db.nilai;
	const Modul = db.modul;
	const SubModul = db.submodul;
	const bcrypt = require("bcryptjs");

	function initial() {
		Admin.create({
			nama: "admin",
			email: "admin@mail.com",
			password: bcrypt.hashSync("123456", 8),
		});

		Siswa.create({
			nama: "Roger Sumatra",
			asalSekolah: "SMPN 2 Bandung",
			jenisKelamin: "L",
			email: "rogersumatra@mail.com",
			password: bcrypt.hashSync("123123123", 8),
			role: "siswa",
			nomorTelp: "081234567890",
			kelas: "IX",
			kartuPelajar: "kartupelajar.jpg",
			validated: 0,
		}).then(() => {
			Nilai.create({
				kategori: "UTS",
				nilai: 90,
				id_siswa: 1,
			});

			Nilai.create({
				kategori: "UAS",
				nilai: 95,
				id_siswa: 1,
			});
		});

		Siswa.create({
			nama: "Agus Tiger",
			asalSekolah: "SMPN 3 Bandung",
			jenisKelamin: "L",
			email: "agustiger@mail.com",
			password: bcrypt.hashSync("123123", 8),
			role: "siswa",
			nomorTelp: "081234567890",
			kelas: "IX",
			kartuPelajar: "kartupelajar.jpg",
			validated: 0,
		});

		Guru.create({
			id: 1,
			nama: "Muhammad Sumbul",
			email: "muhammadsumbul@mail.com",
			password: bcrypt.hashSync("111111", 8),
		}).then(() => {
			Course.create({
				nama: "Kimia Dasar",
				description: "Lorem Ipsum Dolor Sit Amet.",
				kelas: "IX",
				backgroundImage: "kimia.jpg",
				id_guru: 1,
			});
		});

		Guru.create({
			id: 2,
			nama: "Khalid Kashmiri",
			email: "khalidkashmiri@mail.com",
			password: bcrypt.hashSync("111111", 8),
		}).then(() => {
			Course.create({
				nama: "Matematika Dasar",
				description: "Lorem Ipsum Dolor Sit Amet.",
				kelas: "IX",
				backgroundImage: "mtk.jpg",
				id_guru: 2,
			});
		});

		Modul.create({
			judul: "Matematika",
			deskripsi:
				"Mathematics is an area of knowledge that includes the topics of numbers, formulas and related structures, shapes and the spaces in which they are contained, and quantities and their changes",
			kelas: "x",
		}).then(() => {
			SubModul.create({
				nama: "Kesusatraan",
				materi: JSON.stringify([
					{
						nama: "Puisi",
						materi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <link> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					},
					{
						nama: "Pantun",
						materi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <link> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					},
				]),
				id_modul: 1,
			});
		});
	}
};

module.exports = init;
