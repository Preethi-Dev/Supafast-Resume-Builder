<script>
    import {completeUserInfo, currentTemplate} from "../stores/store";
    import {ICONS} from "../utils/constants"
    export let contacts = $completeUserInfo.contacts;
    
    function handleBlur(e, key){
        completeUserInfo.update(value => ({...value, contacts: {...value.contacts, [key]: e.target.innerText}}));
    }
</script>
<div class="container {$currentTemplate === "template 02" ? "template-02" : ""}">
    {#each Object.keys(contacts) as key}   
        <div class="contact"><img src={ICONS[key]} alt="icon"><p bind:innerText={contacts[key]} on:blur={(e) => handleBlur(e, key)} contenteditable>{contacts[key]}</p></div>
    {/each}
</div>

<style>
    p{
        color: rgba(0,0,0,1);
        font-size: 1.125rem;
        max-width: 38rem;
    }

    .container{
        display: flex;
        justify-content: space-between;
    }

    .contact{
        display: flex;
        align-items: center;
        gap: .75rem;
    }

    .template-02 p{
        color: #fff;
        opacity: .8;
    }
</style>