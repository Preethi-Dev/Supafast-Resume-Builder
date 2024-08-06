<script>
    import {completeUserInfo} from "../../stores/store"
    export let designation = $completeUserInfo.designation;

    function handleBlur(e){
        completeUserInfo.update(value => ({...value, designation: designation}));
    }
</script>

<p bind:innerText={designation} on:blur={handleBlur} contenteditable>{designation}</p>

<style>
    p{
        color: rgba(0,0,0,.3);
        font-size: 3rem;
        max-width: 38rem;
    }
</style>