<script context="module">
	import { fetchChat, globalChat } from '../stores/moonchat-store';
	import Time from 'svelte-time';
	fetchChat();
</script>

{#each $globalChat as { message, alias, created_at }}
	<div class="flex items-center mt-4 py-2 border-b-white border-b-2 border-opacity-20">
		<span class="mr-4 text-accent">~</span>
		<img
			class="w-10 h-10 p-1 mr-2"
			src="https://img.icons8.com/external-bearicons-gradient-bearicons/64/000000/external-alien-halloween-bearicons-gradient-bearicons.png"
			alt="Alien"
		/>
		<div class="flex flex-col justify-center pl-2">
			<div>
				<span class="text-sm text-white font-semibold">{alias}</span>
				<span class="text-xs text-white text-opacity-50 py-2">
					| <Time timestamp={created_at} format="dddd MMM D, YYYY @ h:mm A" />
				</span>
			</div>
			<p class="text-sm bg-black rounded-r-md rounded-tl-md p-1 px-2 mt-2 text-green-600">
				{message}
			</p>
		</div>
	</div>
{/each}
