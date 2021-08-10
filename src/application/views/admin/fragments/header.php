<body class="app">
	<div id="loader">
		<div class="spinner"></div>
	</div>
	<script>
		window.addEventListener("load", (function() {
			const t = document.getElementById("loader");
			setTimeout((function() {
				t.classList.add("fadeOut")
			}), 300)
		}))
	</script>
	<div>
