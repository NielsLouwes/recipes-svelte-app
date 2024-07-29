<script lang="ts">
	let wakeLock: any = null;
	let wakeLockActive: boolean = false;

	const requestWakeLock = async () => {
		try {
			wakeLock = await navigator.wakeLock.request('screen');
			wakeLockActive = true;
			wakeLock.addEventListener('release', () => {
				console.log('Screen Wake Lock released');
				wakeLockActive = false;
			});
			console.log('Screen Wake Lock acquired');
		} catch (err) {
			console.error(`${err.name}, ${err.message}`);
		}
	};

	const releaseWakeLock = async () => {
		if (wakeLock !== null) {
			await wakeLock.release();
			wakeLock = null;
			wakeLockActive = false;
		}
	};

	const handleCheckboxChange = async (event: Event) => {
		if ((event.target as HTMLInputElement).checked) {
			await requestWakeLock();
		} else {
			await releaseWakeLock();
		}
	};

	// Release the wake lock when the page is hidden
	const handleVisibilityChange = async () => {
		if (document.visibilityState === 'hidden') {
			await releaseWakeLock();
		}
	};

	document.addEventListener('visibilitychange', handleVisibilityChange);
</script>

<label class="switch" for="checkbox">
	<input
		id="checkbox"
		type="checkbox"
		name="checkbox"
		bind:checked={wakeLockActive}
		on:change={handleCheckboxChange}
	/>
	<span class="slider round"></span>
</label>

<style>
	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: purple;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px purple;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
