<script>
	import { page } from '$app/stores';
	import { ErrorPage } from '@voulr/ui';
</script>

<ErrorPage status={$page.status} message={$page.error?.message} />
