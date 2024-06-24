<script lang="ts">
	import type { PageData } from './$types.js';
	import '../app.css';
	import { generations } from './generation.js';

	export let data: PageData;
	console.log(data); // get data from api == +page.ts file
</script>

<div class="generations flex flex-row gap-1 justify-center">
	{#each generations as generation (generation.id)}
		<div class="generation text-white font-bold justify-center m-2 py-2 px-2 border-2 rounded-lg">
			{generation.main_region}
		</div>
	{/each}
</div>

<div class="monsters flex flex-row flex-wrap justify-center">
	{#each data.monsters as montser (monster.url)}
		<div
			class="monster rounded-lg bg-violet-200 relative flex flex-col justify-center items-center p-1 m-1 monster w-32 h-32 border-2 border-grey-200 hover:bg-violet-300 ease-in duration-150 cursor-pointer"
		>
			<img src={montser.image} alt={montser.name} />
			{montser.name}
			<div class="monster-id absolute top-0 left-1">
				{montser.id}
			</div>
		</div>
	{/each}
</div>
