<script>
  import Avatar from "./Atoms/Avatar.svelte";
  import Bio from "./Atoms/Bio.svelte";
  import Designation from "./Atoms/Designation.svelte";
  import Name from "./Atoms/Name.svelte";
</script>

<div class="intro">
    <div class="intro__container">
        <div>
            <Name />
            <Designation />
        </div>
        <Bio />
    </div>
    <Avatar />
</div>


<style>
    .intro{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .intro__container{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        max-width: 38rem;
    }
</style>