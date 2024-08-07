<script>
    export let repo;
    import {repos, currentRepos, reposChoosedTemporary} from "../../stores/store"

    let isClicked = false;

    function handleClick(e) {
    isClicked = !isClicked;

    reposChoosedTemporary.update(value => {
        if (isClicked) {
            // Add repo if less than 3 and not already in the array
            if (value.length < 3 && !value.find(r => r.id === repo.id)) {
                return [...value, repo];
            } else {
                isClicked = false; // Revert the click if it cannot be added
                return value;
            }
        } else {
            // Remove repo when unselected
            return value.filter(r => r.id !== repo.id);
        }
    });
}

</script>

<div on:click={handleClick} class="repo {isClicked ? "selected" : ""}">
    <p class="repo__heading">{repo.name}</p>
    {#if repo.description}
        <p class="repo__desc">{repo.description}</p>
    {/if}
</div>

<style>
   .repo{
        display: flex;
        flex-direction: column;
        gap: .75rem;
        padding: 1.5rem;
        border-radius: 1rem;
        border: 1px solid transparent;
        cursor: pointer;

        background: #FFF;
        max-width: 32rem;
        width: 100%;
   } 

   .repo:hover, .selected{
        border: 2px solid #A983F4;
   }

   .repo__heading{
    color: #1F0750;
    font-size: 1.5rem;
    font-weight: 600;
   }

   .repo__desc{
    font-size: 1.125rem;
    opacity: .7;
   }
</style>