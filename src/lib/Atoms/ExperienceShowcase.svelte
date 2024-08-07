<script>
    import {completeUserInfo} from "../../stores/store";
    let year = "Year";
    let designation = "Your Designation...";
    let companyName = "company name...";
    let description = "describe your experience milestones...";

    function handleBlur(e, key, value){
        completeUserInfo.update(obj => ({...obj, experience: {...obj.experience, [key]: value}}))
        console.log($completeUserInfo.experience);
        
    }
</script>

<div class="project">
    <div class="project__intro">
        <p bind:innerText={year} class="project__time" contenteditable on:blur={(e) => handleBlur(e, "year", year)}></p>
        <p bind:innerText={companyName} class="project__designation" contenteditable on:blur={(e) => handleBlur(e, "company_name", companyName)}></p>
    </div>
    
    <div class="project__info">
        <p bind:innerText={designation} class="project__name" contenteditable on:blur={(e) => handleBlur(e, "designation", designation)}></p>
        <p bind:innerText={description} class="project__description" contenteditable on:blur={(e) => handleBlur(e, "description", description)}></p>
    </div>
</div>

<style>
    .project{
        display: flex;
        gap: 4.5rem;
        max-width: 52rem;
        width: 52rem;
    }

    .project__intro{
         max-width: 4.5rem;
    }

    .project__time, .project__Designation{
        width: 4.5rem;
        align-self: flex-end;
        font-size: 1rem;
        opacity: .5;
    }

    .project__Designation{
        font-size: 1rem;
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