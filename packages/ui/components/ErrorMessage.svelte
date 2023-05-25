<script lang="ts">
	import { Warning } from '../index';

	// Props
	export let message: string | undefined;
	export let active: boolean | undefined;
</script>

<div class={`${$$props.class} ${active ? 'h-5' : 'h-0'} transition-all duration-300 ease-in-out`}>
	<p
		class={`${
			active ? 'opacity-100 transition-all delay-150 duration-150 ease-in' : 'opacity-0'
		} flex items-center gap-1.5 text-sm text-red-600 `}
	>
		<Warning class="h-3 text-red-600" />
		{message}
	</p>
</div>
