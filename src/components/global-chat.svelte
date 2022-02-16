<script context="module">
	import GlobalMessage from '../components/global-message.svelte';
	import { sendMessage } from '../stores/moonchat-store';
	import Cookies from 'js-cookie';

	let message, messageInput;
	let aliasValue = Cookies.get('alias');

	const handleSubmit = async () => {
		if (!message || !message.replace(/\s/g, '').length || message.length > 300) {
			messageInput.value = '';
			return;
		}
		await sendMessage(message, aliasValue);
		messageInput.value = '';
	};
</script>

<p class="absolute -right-6 -top-6 bg-black text-green-600 rounded-full p-8 font-bold">
	{aliasValue}
</p>

<div class="h-full flex items-center flex-col pt-10">
	<h1 class="text-4xl font-bold pb-10 sm:text-6xl">Moonchat 👽</h1>
	<div
		class=" rounded-lg p-6 w-full md:w-5/6 h-full overflow-y-hidden break-all flex flex-col-reverse"
	>
		<GlobalMessage />
	</div>
	<form
		class="form-control w-11/12 mb-4 md:w-5/6 md:mb-10 md:border-2 md:mx-10 md:border-green-600 md:rounded-lg"
		on:submit|preventDefault={handleSubmit}
	>
		<div class="relative">
			<input
				bind:value={message}
				bind:this={messageInput}
				name="message"
				type="text"
				placeholder="Message..."
				class="w-full pr-16 input input-bordered bg-black text-green-600"
			/>
			<button class="absolute top-0 right-0 rounded-l-none btn hover:bg-green-600">Send 🚀</button>
		</div>
	</form>
</div>
