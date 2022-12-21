<template>
	<div class="col-lg-6 offset-lg-3 offset-md-3 mt-5">
		<div class="p-5">
			<div class="card-body">
				<RouterLink
					style="color: #901311; text-decoration: none"
					to="/"
				>
					<p
						class="title-no-shadow text-center"
						style="color: #991311"
						><b>Virtu</b>Class</p
					>
				</RouterLink>
			</div>
			<div class="card-text">
				<!-- jika belum validasi -->
				<!-- <nav aria-label="breadcrumb" style="background-color: #ba8888; border-radius: 5px !important;"
                    class="mb-4 p-2">
                    <ol class="breadcrumb flex">
                        <li class="breadcrumb-item active" aria-current="page" style="color: white;">Data belum
                            tervalidasi,
                            mohon menunggu</li>
                    </ol>
                </nav> -->
				<!-- jika data salah -->
				<!-- <nav aria-label="breadcrumb" style="background-color: #ba8888; border-radius: 5px !important;"
                    class="mb-4 p-2">
                    <ol class="breadcrumb flex">
                        <li class="breadcrumb-item active" aria-current="page" style="color: white;">Data salah,
                            silahkan
                            login kembali</li>
                    </ol>
                </nav> -->
				<div class="text-start">
					<div class="mb-3 mt-3">
						<label for="email" class="form-label">Email</label>
						<input
							type="email"
							name="email"
							class="form-control"
							id="email"
							placeholder="Masukkan Email"
							v-model="email"
							required
						/>
					</div>

					<div class="mb-1">
						<label for="password" class="form-label"
							>Password</label
						>
						<input
							style="margin-right: -30px; padding-right: 35px"
							:type="passwordType"
							name="password"
							class="password-field form-control d-inline"
							placeholder="Masukkan Password"
							v-model="passwordText"
						/>
						<span
							class="display-eye fa fa-eye-slash"
							@click="hidePassword"
							:style="{ cursor: selectedType }"
						></span>
					</div>

					<div
						class="d-flex justify-content-between align-items-center mb-4"
					>
						<div class="form-check"></div>
						<a href="#" class="text-body link-danger"
							>Lupa password?</a
						>
					</div>

					<div class="d-grid mb-1">
						<button
							@click="login"
							class="btn btn-block text-light"
							style="
								background-color: #901311;
								text-transform: none;
							"
							>Masuk</button
						>
					</div>
				</div>

				<div class="text-center mt-2">
					<p class="text-muted"
						>Belum punya akun?
						<RouterLink
							style="color: #901311; text-decoration: none"
							to="/register"
						>
							<span
								class="link-danger"
								style="text-decoration: underline"
								>Daftar</span
							>
						</RouterLink>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
// import { mapState } from "vuex";
// import router from "../router";
// import axios from "axios";
export default {
	name: "LoginView",
	components: {},
	props: {
		role: {
			default: "",
			type: String,
			required: true,
		},
		pass: {
			default: "",
			type: String,
			required: true,
		},
		typePass: {
			default: "",
			type: String,
			required: true,
		},
	},
	data() {
		return {
			email: "",
			passwordHidden: {
				default: true,
				type: Boolean,
			},
			passwordType: this.typePass,
			passwordText: this.pass,
			selectedType: "auto",
		};
	},
	methods: {
		hidePassword() {
			this.passwordType =
				this.passwordType == "password" ? "text" : "password";
			this.passwordHidden = !this.passwordHidden;
			this.selectedType = !this.passwordHidden ? "auto" : "pointer";
		},
		...mapMutations(["setAccessToken", "setRole", "setUserData"]),
		async login() {
			try {
				const response = await fetch(
					"http://localhost:8081/api/auth/signin",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							email: this.email,
							password: this.passwordText,
							role: "siswa",
						}),
					}
				);
				const user = await response.json();
				const status = await response.status;
				const siswaResponse = await fetch(
					"http://localhost:8081/api/siswa/detail/" + user.id,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				const userD = await siswaResponse.json();
				// const user = users.find(u => u.email === this.email && u.password === this.typePass);
				if (status == 200) {
					// login successful, redirect to protected page
					this.setAccessToken = user.accessToken;
					this.setRole = user.role;
					this.setUserData = {
						id: user.id,
						email: user.email,
						nama: user.nama,
						isValidated: user.isValidated,
					};

					let dataCookie = {
						accessToken: user.accessToken,
						role: user.role,
						userData: {
							...userD,
						},
					};
					document.cookie =
						"sessionData=" + JSON.stringify(dataCookie) + ";";
					// console.log(this.store);
					this.$router.push("/");
					// console.log(this.$route);
					// this.$router.go({
					// 	path: "/",
					// 	force: true,
					// });
					console.log(user);
					// console.log(user);
					// console.log(status);
				} else {
					// login failed, show error message
					console.log(this.passwordText);
					console.error(user);
					alert(user.message);
				}
			} catch (error) {
				console.error(error);
			}
		},
		// login: (e) => {
		// 	e.preventDefault();
		// 	// let email = "user@email.com";
		// 	// let password = "password";
		// 	let login = () => {
		// 		let data = {
		// 			email: this.email,
		// 			password: this.passwordText,
		// 		};
		// 		axios
		// 			.post("/api/auth/signin", data)
		// 			.then((response) => {
		// 				if (response.status == 200) {
		// 					console.log("Logged in");
		// 					console.log(response);
		// 					router.push("/dashboard");
		// 				} else {
		// 					console.error(user);
		// 					alert(user.message);
		// 				}
		// 			})
		// 			.catch((errors) => {
		// 				console.error(errors);
		// 			});
		// 	};
		// 	login();
		// },
		// handleLogin() {
		// 	this.loading = true;
		// 	this.$validator.validateAll().then((isValid) => {
		// 		if (!isValid) {
		// 			this.loading = false;
		// 			return;
		// 		}

		// 		if (this.user.username && this.user.password) {
		// 			this.$store.dispatch("auth/login", this.user).then(
		// 				() => {
		// 					this.$router.push("/profile");
		// 				},
		// 				(error) => {
		// 					this.loading = false;
		// 					this.message =
		// 						(error.response && error.response.data) ||
		// 						error.message ||
		// 						error.toString();
		// 				}
		// 			);
		// 		}
		// 	});
		// },
	},
	computed: {
		// loggedIn() {
		// 	return this.$store.state.auth.status.loggedIn;
		// },
		// ...mapState(["accessToken"]),
	},
	// created() {
	// 	if (this.loggedIn) {
	// 		this.$router.push("/profile");
	// 	}
	// },
};
</script>

<style scoped></style>
