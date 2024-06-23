<script lang="ts">
	import type { PageData } from './$types.js';
	import '../app.css';

	export let data: PageData;
	console.log(data); // get data from api == +page
</script>

<div class="flex gap-1 flex-col">
	{#each data.monsters as montser (monster.url)}
		<div class=" border-t-2">
			<p>{montser.id} {montser.name}</p>
		</div>
	{/each}
</div>
