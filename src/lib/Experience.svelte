<script>
  import ExperienceShowcase from "./Atoms/ExperienceShowcase.svelte";

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
</script>

{#if !isDeleted}
  <div class="experience" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
    {#if isEditMode}
    <div class="experience__edit">
        <img src="/delete.svg" alt="" on:click={handleDelete}>
    </div>
    {/if}
    <div class="experience__title">
      <p>Experience</p>
      <div class="horizontal-line"></div>
    </div>
    <div class="experience__showcase">
        <ExperienceShowcase />
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

  .experience__edit {
    position: absolute;
    right: 0;
    top: -1.5rem;
    display: inline-flex;
    gap: 1rem;
  }

  .experience__edit > * {
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
