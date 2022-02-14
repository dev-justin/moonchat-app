<script context="module">
	import { fetchChat, globalChat } from '../stores/moonchat-store';
	fetchChat();
</script>

{#each $globalChat as { message, alias }}
	<div class="flex items-center mt-4 py-2 border-b-accent border-b-2 border-opacity-20">
		<span class="mr-4 text-accent">~</span>
		<img
			class="w-10 h-10 border-2 rounded-full p-1 mr-2"
			src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-alien-space-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
			alt="Alien"
		/>
		<div class="flex flex-col justify-center pl-2">
			<div>
				<span class="text-sm opacity-40 text-accent">{alias}</span><span
					class="text-sm pl-1 opacity-70">said:</span
				>
			</div>
			<p class="font-bold">{message}</p>
		</div>
	</div>
{/each}
