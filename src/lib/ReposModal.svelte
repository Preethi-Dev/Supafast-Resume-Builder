<script>
  import RepoView from "./Atoms/RepoView.svelte";
  import {repos, currentRepos, isEditProjects, reposChoosedTemporary} from "../stores/store"

    let isSubmitEnabled = false;

    function handleClose(e){
        isEditProjects.set(false);
    }

    $: isSubmitEnabled = $reposChoosedTemporary.length === 3;
    
    function handleSubmit(e){
        isEditProjects.set(false);
        currentRepos.set($reposChoosedTemporary); //update while submit 
    }
</script>
<div class="overlay-container">
    <div class="overlay">
        <div class="overlay__head"> 
            <p>Choose your Top 3 Projects</p>
            <div on:click={handleClose} class="overlay__close"><img src="/close.svg" alt="icon"></div>
        </div>
        <div class="horizontal-line"></div>
        <div class="repos">
            {#each $repos as repo}
                <RepoView {repo} />
            {/each}
        </div>
        <div class="overlay__footer">
            <button on:click={handleSubmit} class="{isSubmitEnabled ? "btn-enabled" : ""}">Done</button>
        </div>
    </div>
</div>

<style>
    .horizontal-line{
        height: 1px;
        width: 100%;
        background: rgba(0, 0, 0, 0.10);
    }

    button{
        padding: 1rem 4rem;
        border-radius: 4.5rem;
        border: transparent;
        background: #FFF;
        color: #A983F4;
        font-size: 1rem;
    }

    .btn-enabled{
        background-color: #A983F4;
        color: #FFF;
    }

    .overlay-container{
        width: 100%;
        height: 100%;
        top: 0;
        position: fixed;  
        z-index: 99; 
        display: flex;
        justify-content: center;
        align-items: center; 
        background: rgba(0, 0, 0, 0.30);
        backdrop-filter: blur(10px);
    }

    .overlay{
        max-width: 75rem;
        border-radius: 2rem;
        background: #F8F8F8;  
    }

    .overlay__head{
        display: flex;
        justify-content: space-between;
        padding: 2.5rem;
        color: #1F0750;
        font-size: 2.5rem;
    }

    .overlay__close{
        cursor: pointer;
    }

    .overlay__footer{
        padding: 1.5rem 2.1875rem;
        display: flex;
        justify-content: end;
    }

    .repos{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
        padding: 2.5rem;
        max-height: 25rem;
        overflow-y: scroll;
    }
</style>