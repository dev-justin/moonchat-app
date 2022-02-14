<script>
	import Landing from '../components/landing.svelte';
	import GlobalChat from '../components/global-chat.svelte';
	import Cookies from 'js-cookie';

	let aliasValue = Cookies.get('alias') || false;
</script>

{#if !aliasValue}
	<Landing />
{:else}
	<GlobalChat />
{/if}
