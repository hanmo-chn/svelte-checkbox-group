<script lang="ts">

    import "../lib/tsui-checkbox-group.scss";
    import GroupBox from "../lib/GroupBox.svelte";
    import CheckBoxGroup from "../lib/CheckBoxGroup.svelte";
    import {onMount} from "svelte";
    import BooleanBits from "../lib/BooleanBits";
    import CustomCheckBox from "./CustomCheckBox.svelte";
    import SexyCheckBox from "../lib/SexyCheckBox.svelte";

    let bits= new BooleanBits([
        {text: '卒中', readonly: true},
        {text: '胸痛', disabled: true},
        {text: '创伤'},
        {text: '孕妇'},
        {text: '新生儿'},
        {text: '发烧'}
    ], 3);

    let value = bits.value;

    $: console.debug('当前的值', value);
    onMount(()=>{

    })

</script>
<div style="width: 800px; margin: 10px auto; box-sizing: border-box">
    <div style="width: 400px; height:auto;">
        <GroupBox label="医院开通疾病通道" style="padding-top: 20px" error="至少要选择一个疾病类型">
            <CheckBoxGroup style="padding: 4px 8px; width: auto; box-sizing: border-box;" {bits} checkbox={SexyCheckBox} all$style="display: inline-block"
                            selectAll="所有疾病" bind:value
                           item$style="display: inline-block; width: 100px; overflow: hidden; line-height: 24px"
                           on:change={()=>{console.log(bits.value)}}/>
        </GroupBox>
    </div>
</div>




