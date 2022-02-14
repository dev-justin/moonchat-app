<script context="module">
	import { checkUserExist, addUser, aliasCookie } from '../stores/user-store';

	let alias, aliasInput, userExist;

	const handleSubmit = async () => {
		userExist = await checkUserExist(alias);
		if (!userExist) {
			await addUser(alias);
			aliasCookie(alias);
			aliasInput.value = '';
			location.reload();
		} else {
			alert('User exists');
		}
	};
</script>

<div class="flex items-center justify-center h-[100vh]">
	<div class="bg-moon-500 p-8 rounded-xl border-2 border-accent">
		<h1 class="text-moon-100 text-6xl font-bold">Moonchat</h1>
		<form class="form-control pt-6" on:submit|preventDefault={handleSubmit}>
			<input
				bind:value={alias}
				bind:this={aliasInput}
				type="text"
				placeholder="Alias 👽"
				class="input input-accent input-bordered bg-moon-800"
			/>
			<button class="btn bg-moon-800 mt-2 hover:bg-accent border-none">Join Moonchat</button>
		</form>
	</div>
</div>
