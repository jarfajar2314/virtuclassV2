<template>
	<nav
		class="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-5"
		style="box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.1)"
	>
		<div class="container ps-4 pe-4">
			<RouterLink class="navbar-brand" to="/">
				<img :src="logoVirtu" alt="virtuclass-logo" />
			</RouterLink>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav ms-auto">
					<li class="nav-item">
						<RouterLink class="nav-link" to="/"
							>Home&emsp;</RouterLink
						>
					</li>
					<li class="nav-item">
						<RouterLink class="nav-link" to="/course"
							>Course&emsp;</RouterLink
						>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#about">About&emsp;</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#faq">FAQ&emsp;</a>
					</li>
					<li class="nav-item" v-if="!sessionData">
						<RouterLink class="nav-link" to="/login"
							>Login&emsp;</RouterLink
						>
					</li>
					<li class="nav-item" v-if="!sessionData">
						<RouterLink class="nav-link" to="/register"
							>Sign Up&emsp;</RouterLink
						>
					</li>
					<li class="nav-item p-0" v-if="sessionData">
						<div class="dropdown">
							<button
								class="btn"
								type="button"
								id="dropdownMenuButton1"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<Icon
									class="iconify"
									style="font-size: 25px; color: black"
									icon="healthicons:ui-user-profile-outline"
								/>
							</button>
							<div
								class="dropdown-menu"
								aria-labelledby="dropdownMenuButton1"
							>
								<!-- Kasih kondisional login atau belum untuk tampilkan ini -->
								<RouterLink
									class="dropdown-item"
									to="/user/profile"
								>
									<p>{{ sessionData.userData.nama }}</p>
								</RouterLink>
								<span>
									<Icon
										style="color: white"
										class="iconify-inline"
										icon="carbon:logout"
									/>
								</span>
								<span class="ml-4">
									<button
										@click="logout"
										class="btn btn-block text-light"
										style="
											background-color: #901311;
											text-transform: none;
										"
										>Keluar</button
									>
								</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import { mapGetters } from "vuex";

export default {
	name: "NavbarTop",
	components: {
		RouterLink,
		Icon,
	},
	data() {
		let decodedCookie = document.cookie.split(";");
		let filteredCookie = decodedCookie.filter((cookie) =>
			cookie.includes("sessionData")
		);
		let sessionData = null;
		if (filteredCookie.length > 0)
			sessionData = JSON.parse(filteredCookie[0].split("=")[1]);
		// let sessionData = JSON.parse(
		// 	decodedCookie
		// 		.filter((cookie) => cookie.includes("sessionData"))[0]
		// 		.split("=")[1]
		// );
		return {
			logoVirtu: require("../assets/logo.png"), // eslint-disable-line no-undef
			sessionData: sessionData,
			renderComponent: true,
		};
	},
	methods: {
		logout() {
			document.cookie =
				"sessionData=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";

			console.log("log out.");
			this.$router.go();
		},
	},
	computed: {
		...mapGetters(["isLoggedIn"]),
	},
};
</script>
