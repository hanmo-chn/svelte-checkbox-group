<script lang="ts">
    import {createEventDispatcher} from "svelte";

    export let label: string;
    export let value;
    export let style;
    export let indeterminate: boolean = false;
    export let readonly:boolean;
    export let disabled: boolean;

    const dispatch = createEventDispatcher();

    const handleClick = (e) => {
        e.stopPropagation();
        if (readonly) {
            e.preventDefault();
        }
    }

    $: dispatch('change', value);

    //
</script>

<div {style}>
    <label>
        <input type="checkbox" disabled={disabled} {indeterminate} on:click={handleClick} class="checkbox__input"  bind:checked={value}/>
        <span>{label}</span>
    </label>
</div>
