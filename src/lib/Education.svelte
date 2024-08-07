<script>
  import EducationShowcase from "./Atoms/EducationShowcase.svelte";

  
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
  <div class="education" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
    {#if isEditMode}
    <div class="education__edit">
        <img src="/delete.svg" alt="" on:click={handleDelete}>
    </div>
    {/if}
    <div class="education__title">
      <p>Eductaion</p>
      <div class="horizontal-line"></div>
    </div>
    <div class="education__showcase">
        <EducationShowcase />
    </div>
  </div>
{/if}

<style>
  .education {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1.5rem;
    padding: .5rem;
    position: relative;
  }

  .education:hover {
    border-radius: 0.5rem;
    border: 1px solid #A983F4;
  }

  .education__title {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }

  .education__edit {
    position: absolute;
    right: 0;
    top: -1.5rem;
    display: inline-flex;
    gap: 1rem;
  }

  .education__edit > * {
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

  .education__showcase {
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
