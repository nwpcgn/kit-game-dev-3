<footer class="flex justify-between px-4 space-x-2 py-2">
		<span>
			<slot><!-- optional fallback --></slot>
		</span>
		{#if $$slots.red}
			<span class="text-xs font-extralight self-end text-rose-700">
				<slot name="red"><!-- optional fallback --></slot>
			</span>
		{/if}
		{#if $$slots.end}
			<span>
				<slot name="end"><!-- optional fallback --></slot>
			</span>
		{/if}
	</footer>

