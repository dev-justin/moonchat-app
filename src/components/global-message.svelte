<script context="module">
	import { fetchChat, globalChat } from '../stores/moonchat-store';
	fetchChat();
</script>

{#each $globalChat as { message }}
	<div class=" bg-stone-500 rounded-md px-4 py-1 flex items-center mt-4">
		<img
			class="w-8 h-8 border-2 rounded-full p-1 mr-2"
			src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-alien-space-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
			alt="Alien"
		/>
		<p class="font-bold">{message}</p>
	</div>
{/each}
