<script>
    import {completeUserInfo, currentTemplate, isPreviewMode} from "../../stores/store"
    export let designation = $completeUserInfo.designation;

    function handleBlur(e){
        completeUserInfo.update(value => ({...value, designation: designation}));
    }
</script>

{#if $isPreviewMode}
    <p class="{$currentTemplate === "template 02" ? "template-02" : ""}">{designation}</p>
{:else}
    <p bind:innerText={designation} on:blur={handleBlur} class="{$currentTemplate === "template 02" ? "template-02" : ""}" contenteditable>{designation}</p>
{/if}
<style>
    p{
        color: rgba(0,0,0,.3);
        font-size: 3rem;
        max-width: 38rem;
    }

    .template-02{
        color: #fff;
        opacity: .8;
    }
</style>