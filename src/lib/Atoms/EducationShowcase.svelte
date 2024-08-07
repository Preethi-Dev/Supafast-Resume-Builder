<script>
    import {completeUserInfo, isPreviewMode} from "../../stores/store";
    let year = $completeUserInfo?.education?.year || "Year";
    let name = $completeUserInfo?.education?.name || "Course Name";
    let description = $completeUserInfo?.education?.description || "describe your academic milestones...";

    let education;

    $: education = $completeUserInfo?.education;

    function handleBlur(e, key, value){
        completeUserInfo.update(obj => ({...obj, education: {...obj.education, [key]: value}}))
        console.log($completeUserInfo.education);
    }
</script>

<div class="project">
    {#if $isPreviewMode}
        <p class="project__time">{education?.year ?? ""}</p>
        <div class="project__info">
            <p class="project__name">{education?.name ?? ""}</p>
            <p class="project__description">{education?.description ?? ""}</p>
        </div>
    {:else}
        <p bind:innerText={year} class="project__time" contenteditable on:blur={(e) => handleBlur(e, "year", year)}></p>
        <div class="project__info">
            <p bind:innerText={name} class="project__name" contenteditable on:blur={(e) => handleBlur(e, "name", name)}></p>
            <p bind:innerText={description} class="project__description" contenteditable on:blur={(e) => handleBlur(e, "description", description)}></p>
        </div>
    {/if}
</div>

<style>
    .project{
        display: flex;
        gap: 4.5rem;
        max-width: 52rem;
        width: 52rem;
    }

    .project__time{
        width: 4.5rem;
        align-self: flex-end;
        font-size: 1rem;
        opacity: .5;
        flex-shrink: 0;
        align-self: flex-start;
    }

    .project__info{
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    .project__name{
        font-size: 1.5rem;
        font-weight: 600;
    }

    .project__description{
        font-size: 1.125rem;
    }
</style>