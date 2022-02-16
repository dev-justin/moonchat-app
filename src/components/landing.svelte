<script context="module">
	import { checkUserExist, addUser, aliasCookie, userExists } from '../stores/user-store';
	import { errorMessage, validateAlias } from '../stores/validation-store';
	import { fade } from 'svelte/transition';

	let alias, aliasInput, userExist;

	const handleSubmit = async () => {
		if (validateAlias(alias)) {
			aliasInput.value = '';
			userExists.set(true);
			return;
		} else {
			userExist = await checkUserExist(alias);
			if (!userExist) {
				await addUser(alias);
				aliasCookie(alias);
				aliasInput.value = '';
				location.reload();
			} else {
				aliasInput.value = '';
			}
		}
	};
</script>

<div class="flex items-center justify-center h-[100vh]">
	<div class="bg-moon-500 p-8 rounded-xl border-2 border-green-600">
		{#if $userExists}
			<div class="alert shadow-lg alert-error mb-2 py-3" in:fade>
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span>{$errorMessage}</span>
				</div>
			</div>
		{/if}
		<h1 class="text-moon-100 text-6xl font-bold text-center">Moonchat</h1>
		<form class="form-control pt-6" on:submit|preventDefault={handleSubmit}>
			<input
				bind:value={alias}
				bind:this={aliasInput}
				type="text"
				placeholder="Alias 👽"
				class="input input-accent input-bordered border-none focus:shadow-none"
			/>
			<button class="btn bg-moon-800 mt-2 hover:bg-green-600 border-none">Join Moonchat</button>
		</form>
	</div>
</div>
