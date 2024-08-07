<script>
    import {currentRepos} from "../../stores/store"
    export let project;
    export let name;
    export let description;
    export let created_at;
    

    function handleBlur(e, key, val){
         currentRepos.update(projects => {     
             const projectToUpdate = projects.find(proj => proj.id === project.id);             
             if (projectToUpdate) {
                 projectToUpdate[key] = val;
                }     
                console.log(projects);
                
            return projects;
        });
    }
</script>

<div class="project">
    <p bind:innerText={created_at} class="project__time" contenteditable on:blur={(e) => handleBlur(e, "created_at", created_at)}></p>
    <div class="project__info">
        <p bind:innerText={name} class="project__name" contenteditable on:blur={(e) => handleBlur(e, "name", name)}></p>
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