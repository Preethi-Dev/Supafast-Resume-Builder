<script>
  import { onMount } from "svelte";
  import { repos, completeUserInfo, currentTemplate, isPreviewMode } from "../stores/store";
  import Badge from "./Atoms/Badge.svelte";


  let isEditMode = false;
  let isDeleted = false;

  let skills;

  $: console.log($completeUserInfo?.skills);
  

  onMount(() => {
    if(!$completeUserInfo.skills && !$isPreviewMode){
      skills = fetchSkills();
      completeUserInfo.update(obj => ({...obj, skills: skills}))
    }
  })
  

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
    completeUserInfo.update(obj => ({...obj, skills: [...$completeUserInfo?.skills, "new skill"]}))
  }

  function fetchSkills(){
    return Array.from(new Set($repos.filter(repo => repo.language !== null).map(repo => repo.language)));
  }
</script>

{#if !isDeleted}
  <div style="border-color: {$isPreviewMode && "transparent"}" class="skills {$currentTemplate === "template 02" ? "template-02" : ""}" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
    {#if !$isPreviewMode && isEditMode}
        <div class="skills__edit">
            <img src="/add.svg" alt="" on:click={handleAdd}>
            <img src="/delete.svg" alt="" on:click={handleDelete}>
        </div>
    {/if}
    <div class="skills__title">
      <p>Skills</p>
      <div class="horizontal-line"></div>
    </div>
    <div class="skills__showcase">
        {#if $completeUserInfo?.skills}
            {#each $completeUserInfo?.skills as skill, index}
                <Badge {skill} {isEditMode} {index}/>
            {/each}
        {/if}
    </div>
  </div>
{/if}

<style>
  .skills {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1.5rem;
    padding: .5rem;
    position: relative;
  }

  .skills:hover {
    border-radius: 0.5rem;
    border: 1px solid #A983F4;
  }

  .template-02 .skills__title p{
    color: #fff;
    opacity: .8;
  }

  .template-02 .horizontal-line{
    background-color: #fff;
    opacity: .8;
  }

  .template-02 .skills__edit > * {
    background-color: rgba(255, 255, 255, .2)
  }
  
  .skills__title {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }

  .skills__edit {
    position: absolute;
    right: 0;
    top: -1.5rem;
    display: inline-flex;
    gap: 1rem;
  }

  :global(.skills__edit > *) {
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

  .skills__showcase {
    align-self: center;
    display: flex;
    flex-wrap: wrap;
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
