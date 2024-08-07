<script>
    import Intro from "$lib/Intro.svelte";
    import ContactInfo from "$lib/ContactInfo.svelte";
    import Projects from "$lib/Projects.svelte";
    import {userInfo, currentTemplate, completeUserInfo, currentRepos} from "../../../stores/store";
  import Education from "$lib/Education.svelte";
  import Experience from "$lib/Experience.svelte";

    $: console.log($completeUserInfo, $currentTemplate);
</script>

<div class="resume">
    <div class="intro">
        <Intro />
        <ContactInfo />
    </div>
    <div class="details">
        {#if $currentRepos.length > 0} <Projects />{/if}
        <Education />
        <Experience />
    </div>
</div>

<style>
    .intro{
        display: flex;
        flex-direction: column;
        gap: 4.5rem;
        padding: 2rem 3rem;
        border-radius: 2rem;
        background-color: #fff;
    }

    .details{
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding: 4rem;
    }
</style>