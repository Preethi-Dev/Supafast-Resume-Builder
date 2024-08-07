<script>
    import {completeUserInfo, currentTemplate} from "../../stores/store"
    export let designation = $completeUserInfo.designation;

    function handleBlur(e){
        completeUserInfo.update(value => ({...value, designation: designation}));
    }
</script>

<p bind:innerText={designation} on:blur={handleBlur} class="{$currentTemplate === "template 02" ? "template-02" : ""}" contenteditable>{designation}</p>

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