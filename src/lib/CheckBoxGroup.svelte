<script lang="ts">
    import SexyCheckBox from "./SexyCheckBox.svelte";
    import type BooleanBits from "./BooleanBits";
    import {createEventDispatcher} from "svelte";

    export let bits: BooleanBits;
    export let style: string = '';
    export let item$style: string = '';
    export let selectAll: string = '全选';
    export let canSelectAll: boolean = true;
    export let readonly: boolean = false;

    let allSelected: boolean = false;
    let indeterminate: boolean = false;

    const dispatch = createEventDispatcher();

    let list = bits ? bits.list : [];

    const doSelectAll = (e) => {
        bits.list.forEach(item=>{
            item.value = e.detail;
        });
        list = bits.list;
        dispatch('change');
    }

    const handleItemCheckChange = (item, idx) => {
        if (bits.value == 0) {
            allSelected = false;
            indeterminate = false;
        } else {
            indeterminate = !bits.allTrue;
            if (!indeterminate) {
                allSelected = true;
            }
        }
    }



</script>
<div class="tsui-checkbox-group-panel" {style}>
    {#if canSelectAll && readonly == false}
        <div>
            <SexyCheckBox style={item$style} {indeterminate} label={selectAll} bind:value={allSelected} on:change={doSelectAll}/>
        </div>
    {/if}
    {#if bits}
        {#each list as item, idx}
            <SexyCheckBox style={item$style} readonly={item.readonly==true || readonly==true} disabled={item.disabled==true}
                          label={item.text} bind:value={item.value} on:change={()=>{handleItemCheckChange(item, idx)}}/>
        {/each}
    {/if}
</div>


