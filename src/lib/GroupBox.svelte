<script lang="ts">

    export let label: string;
    export let style: string = '';
    export let error: string = '';
    export let required: boolean = true;

</script>
<div class="tsui-group-box" >
    <div class="box-content" {style}>
        <slot></slot>
        {#if error && error.length > 0}
            <div class="error-message">
                <span>{error}</span>
            </div>
        {/if}
    </div>
    <div class="title">
        {#if required}
            <span class="required-indicator">*</span>
        {/if}
        <span>{label}</span>
    </div>
</div>