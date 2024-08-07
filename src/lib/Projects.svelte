<script>
  import ProjectShowcase from "./Atoms/ProjectShowcase.svelte";
  import { repos, currentRepos, isEditProjects, reposChoosedTemporary } from "../stores/store";
  
  let isEditMode = false;
  let isDeleted = false;
  

  function handleMouseEnter(e){
    isEditMode = true; 
  }
  function handleMouseLeave(e){
    isEditMode = false;
  }
  function handleDelete(e){
    isDeleted = true;
  }
  function handleEdit(e){
    reposChoosedTemporary.set([]);
    isEditProjects.set(true);
  }
</script>

{#if !isDeleted}
  <div class="projects" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
    {#if isEditMode}
      <div class="projects__edit">
        <div><img src="/edit.svg" alt="icon" on:click={handleEdit}></div>
        <div><img src="/delete.svg" alt="icon" on:click={handleDelete}></div>
      </div>
    {/if} 
    <div class="projects__title">
      <p>Projects</p>
      <div class="horizontal-line"></div>
    </div>
    <div class="projects__showcase">
      {#each $currentRepos as project}  
        <ProjectShowcase project={project} name={project.name} created_at={new Date(project.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} description={project.description}/>
      {/each}
    </div>
  </div>
{/if}

<style>
  .projects {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1.5rem;
    padding: .5rem;
    position: relative;
  }

  .projects:hover {
    border-radius: 0.5rem;
    border: 1px solid #A983F4;
  }

  .projects__title {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }

  .projects__edit {
    position: absolute;
    right: 0;
    top: -1.5rem;
    display: inline-flex;
    gap: 1rem;
  }

  .projects__edit > * {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: .5rem;
    background: #FFF;
    box-shadow: 0px 4px 36px 0px rgba(169, 131, 244, 0.06);
    backdrop-filter: blur(6px);
  }

  .projects__showcase {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  p {
    color: #000;
    font-size: 2.5rem;
  }

  .horizontal-line {
    height: 0.125rem;
    width: 100%;
    background: rgba(0, 0, 0, 0.12);
  }
</style>
