<script context="module">
	import GlobalMessage from '../components/global-message.svelte';
	import { sendMessage } from '../stores/moonchat-store';

	let message, messageInput;
	const handleSubmit = async () => {
		await sendMessage(message);
		messageInput.value = '';
	};
</script>

<div class="h-full flex items-center flex-col pt-10 border-4">
	<h1 class="text-6xl font-bold pb-10">Moonchat 👽</h1>
	<div class=" rounded-lg p-6 w-full md:w-5/6 h-full overflow-y-scroll">
		<GlobalMessage />
	</div>
	<form class="form-control w-full md:w-5/6 mb-10" on:submit|preventDefault={handleSubmit}>
		<div class="relative">
			<input
				bind:value={message}
				bind:this={messageInput}
				name="message"
				type="text"
				placeholder="Message..."
				class="w-full pr-16 input input-bordered"
			/>
			<button class="absolute top-0 right-0 rounded-l-none btn">Send 🚀🚀🚀</button>
		</div>
	</form>
</div>
