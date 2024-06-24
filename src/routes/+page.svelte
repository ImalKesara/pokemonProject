<script lang="ts">
	import type { PageData } from './$types.js';
	import '../app.css';

	export let data: PageData;
	console.log(data); // get data from api == +page.ts file
</script>

<div class="monsters flex flex-row flex-wrap justify-center">
	{#each data.monsters as montser (monster.url)}
		<div
			class="monster relative flex flex-col justify-center items-center p-1 m-1 monster w-32 h-32 border-2 border-red-500"
		>
			<img src={montser.image} alt={montser.name} />
			{montser.name}
			<div class="monster-id absolute top-0 left-1">
				{montser.id}
			</div>
		</div>
	{/each}
</div>
