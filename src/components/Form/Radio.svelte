<script lang="ts">
	interface Option {
		label: string;
		value: string;
	}
	export let label: string;
	export let name: string;
	export let options: Option[];
	export let defaultValue = '';
</script>

<fieldset>
	<legend class="text-sm text-darkblue">{label}</legend>

	{#each options as option}
		<div>
			<input
				type="radio"
				id={option.value}
				{name}
				value={option.value}
				checked={defaultValue === option.value}
			/>
			<label for={option.value}>{option.label}</label>
		</div>
	{/each}
</fieldset>
