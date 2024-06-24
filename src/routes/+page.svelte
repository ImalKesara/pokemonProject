<script lang="ts">
	import type { PageData } from './$types.js';
	import '../app.css';

	export let data: PageData;
	console.log(data); // get data from api == +page.ts file
</script>

<div class="monsters flex flex-row flex-wrap justify-center">
	{#each data.monsters as montser (monster.url)}
		<div
			class="flex flex-col justify-center items-center p-1 m-1 monster w-32 h-32 border-2 border-red-500"
		>
			{montser.id}
			{montser.name}
			<img src={montser.image} alt={montser.name} />
		</div>
	{/each}
</div>
