<script>
    import {completeUserInfo, currentTemplate, isPreviewMode} from "../../stores/store";
    export let isEditMode;
    export let index;
    let year = $completeUserInfo?.experience?.[index]?.year || "Year";
    let designation = $completeUserInfo?.experience?.[index]?.designation || "Your Designation...";
    let companyName = $completeUserInfo?.experience?.[index]?.company_name || "company name...";
    let description = $completeUserInfo?.experience?.[index]?.description || "describe your experience milestones...";
    let isDeleted = false;

    let experience;
    
    $: experience = $completeUserInfo?.experience?.[index];

    function handleBlur(e, key, value){
        // update $completeUserInfo.experience
        completeUserInfo.update(obj => ({...obj, experience: {...obj.experience, [index]: {...obj?.experience?.[index], [key]: value}}}));
    }
    function handleDelete(e){
        isDeleted = true; 
        completeUserInfo.update(obj => {
            delete obj?.experience?.[index];            
            return obj;
        })       
    }
</script>

{#if !isDeleted}
<div style="border-color: {$isPreviewMode && "transparent"}" class="experience {$currentTemplate === "template 02" ? "template-02" : ""}">
    {#if !$isPreviewMode && isEditMode}
            <div class="experience__edit">
                <img src="/delete.svg" alt="" on:click={handleDelete}>
            </div>
    {/if} 
    
    {#if !$isPreviewMode}
        <div class="experience__intro">
            <p bind:innerText={year} class="experience__time" contenteditable on:blur={(e) => handleBlur(e, "year", year)}></p>
            <p bind:innerText={companyName} class="experience__designation" contenteditable on:blur={(e) => handleBlur(e, "company_name", companyName)}></p>
        </div>
    
        <div class="experience__info">
            <p bind:innerText={designation} class="experience__name" contenteditable on:blur={(e) => handleBlur(e, "designation", designation)}></p>
            <p bind:innerText={description} class="experience__description" contenteditable on:blur={(e) => handleBlur(e, "description", description)}></p>
        </div>
    {:else}
        <div class="experience__intro">
            <p class="experience__time">{experience?.year ?? ""}</p>
            <p class="experience__designation">{experience?.company_name ?? ""}</p>
        </div>
    
        <div class="experience__info">
            <p class="experience__name">{experience?.designation ?? ""}</p>
            <p class="experience__description">{experience?.description ?? ""}</p>
        </div>
    {/if}
</div>
{/if}

<style>
    .experience{
        display: flex;
        gap: 4.5rem;
        max-width: 52rem;
        width: 52rem;
        padding: .25rem;
        position: relative;
    }

    .experience__edit {
        position: absolute;
        right: 0;
        top: -1rem;
        display: inline-flex;
        gap: 1rem;
  }

    .template-02 .experience__edit > * {
    background-color: rgba(255, 255, 255, .2)
  }

    .experience:hover{
        border-radius: 0.5rem;
        border: 1px solid #A983F4;
    }

    .experience__intro{
         max-width: 4.5rem;
    }

    .experience__time, .experience__designation{
        width: 4.5rem;
        align-self: flex-start;
        font-size: 1rem;
        opacity: .5;
    }

    .experience__Designation{
        font-size: 1rem;
    }

    .experience__info{
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    .experience__name{
        font-size: 1.5rem;
        font-weight: 600;
    }

    .experience__description{
        font-size: 1.125rem;
    }
</style>