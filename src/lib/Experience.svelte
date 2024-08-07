<script>
  import ExperienceShowcase from "./Atoms/ExperienceShowcase.svelte";
  import {currentTemplate} from "../stores/store"
  let isEditMode = false;
  let isDeleted = false;

  let experiences = [ExperienceShowcase];  

  function handleMouseEnter(e){
    isEditMode = true; 
  }
  function handleMouseLeave(e){
    isEditMode = false;
  }
  function handleDelete(e){
    isDeleted = true;
  }
  function handleAdd(e){
    experiences = [...experiences, ExperienceShowcase];
  }
</script>

{#if !isDeleted}
  <div class="experience {$currentTemplate === "template 02" ? "template-02" : ""}" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
    {#if isEditMode}
    <div class="experience__edit">
        <img src="/add.svg" alt="" on:click={handleAdd}>
        <img src="/delete.svg" alt="" on:click={handleDelete}>
    </div>
    {/if}
    <div class="experience__title">
      <p>Experience</p>
      <div class="horizontal-line"></div>
    </div>
    <div class="experience__showcase">
        {#each experiences as Experience, index}
          <Experience {isEditMode} {index}/>
        {/each}
    </div>
  </div>
{/if}

<style>
  .experience {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1.5rem;
    padding: .5rem;
    position: relative;
  }

  .experience:hover {
    border-radius: 0.5rem;
    border: 1px solid #A983F4;
  }

  .experience__title {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }

  .template-02 .experience__title p{
    color: #fff;
    opacity: .8;
  }

  .template-02 .horizontal-line{
    background-color: #fff;
    opacity: .8;
  }

  .template-02 .experience__edit > * {
    background-color: rgba(255, 255, 255, .2)
  }

  .experience__edit {
    position: absolute;
    right: 0;
    top: -1.5rem;
    display: inline-flex;
    gap: 1rem;
  }

  :global(.experience__edit > *) {
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

  .experience__showcase {
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
