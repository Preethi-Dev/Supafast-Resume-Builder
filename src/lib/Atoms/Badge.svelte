<script>
    import {completeUserInfo, currentTemplate} from "../../stores/store"
    export let skill;
    export let isEditMode;
    export let index;

    let isClose = false;

    function handleClick(e){
        isClose = true;
        completeUserInfo.update(obj => {
            return {...obj, skills: obj?.skills?.filter(s => s !== skill)}
        })
        console.log($completeUserInfo); 
    }

    function handleBlur(){
        completeUserInfo.update(obj => {
            obj.skills[index] = skill;
            console.log(obj.skills);
            
            return {...obj, skills: obj.skills};
        })
    }
</script>

{#if !isClose}
    <div class="{$currentTemplate === "template 02" ? "template-02" : ""}">
        <p bind:innerText={skill} contenteditable on:blur={handleBlur}></p>
        {#if isEditMode}<img src="/small-close.svg" on:click={handleClick} alt="close icon">{/if}
    </div>
{/if}
<style>
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 1rem 0.5rem 1.5rem;
        gap: 0.5rem;
        border-radius: 1.5rem;
        background: #FFF;
        cursor: pointer;
    }

    div > img{
        width: 1.5rem;
    }

    .template-02{
        background-color: rgba(255, 255, 255, .2);
    }
</style>