<script>
    import {repos} from "../../stores/store"
    export let project;

    let created_at = convertDateToReadable(project.created_at);
    let name = project.name;
    let description = project.description;
    

    function handleBlur(e, key, val){
         repos.update(projects => {
            const projectToUpdate = projects.find(proj => proj.id === project.id);
            if (projectToUpdate) {
                projectToUpdate[key] = val;
            }
            return projects;
        });
    }

    function convertDateToReadable(created_at){
        const date = new Date(created_at);
        const options = { year: 'numeric', month: 'short' };
        return date.toLocaleDateString('en-US', options);
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
    }

    .project__time{
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