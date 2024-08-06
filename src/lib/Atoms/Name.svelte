<script>
    import {completeUserInfo} from "../../stores/store"
    export let name = $completeUserInfo.name;

    function handleBlur(e){
        completeUserInfo.update(value => ({...value, name: name}));
    }
</script>

<p bind:innerText={name} on:blur={handleBlur} contenteditable>{name}</p>

<style>
    p {
        color: #000;
        font-size: 4rem;
        max-width: 38rem;
    }

    :global(p:focus){
        border-radius: 0.5rem;
        outline: 2px solid #A983F4;
    }

</style>
