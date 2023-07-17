<script lang="ts">
    import SexyCheckBox from "./SexyCheckBox.svelte";
    import type BooleanBits from "./BooleanBits";
    import {createEventDispatcher, SvelteComponent} from "svelte";

    export let bits: BooleanBits;
    export let style: string = '';
    export let item$style: string = '';
    export let selectAll: string = '全选';
    export let canSelectAll: boolean = true;
    export let readonly: boolean = false;
    export let checkbox: SvelteComponent = SexyCheckBox;
    export let all$style: string = '';

    export let value: number = bits.value;

    let allSelected: boolean = false;
    let indeterminate: boolean = false;

    const dispatch = createEventDispatcher();

    let list = bits ? bits.list : [];

    const doSelectAll = (e) => {
        bits.list.forEach(item=>{
            if (!item.readonly && !item.disabled) {
                item.value = e.detail;
            }
        });
        list = bits.list;
        dispatch('change');
    }

    const handleItemCheckChange = (item, idx) => {
        value = bits.value;
        determineAllSelected();
        dispatch('change');
    }

    const determineAllSelected = () => {
        if (value == 0) {
            allSelected = false;
            indeterminate = false;
        } else {
            indeterminate = !bits.allTrue;
            if (!indeterminate) {
                allSelected = true;
            }
        }
    }

    $: {
        if (canSelectAll && readonly == false) {
            bits.value = value;
            determineAllSelected();
        }
    }


</script>
<div class="tsui-checkbox-group-panel" {style}>
    {#if canSelectAll && readonly == false}
        <div style={all$style}>
            <svelte:component this={checkbox} style={item$style} {indeterminate} label={selectAll} bind:value={allSelected} on:change={doSelectAll}/>
        </div>
    {/if}
    {#if bits}
        {#each list as item, idx}
            {#if item}
                <svelte:component this={checkbox} style={item$style} readonly={item.readonly==true || readonly==true} disabled={item.disabled==true}
                          label={item.text} bind:value={item.value} on:change={()=>{handleItemCheckChange(item, idx)}}/>
            {/if}
        {/each}
    {/if}
</div>


