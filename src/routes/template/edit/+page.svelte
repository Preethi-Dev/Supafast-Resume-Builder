<script>
    import Intro from "$lib/Intro.svelte";
    import ContactInfo from "$lib/ContactInfo.svelte";
    import Projects from "$lib/Projects.svelte";
    import {userInfo, currentTemplate, completeUserInfo} from "../../../stores/store";

    $: console.log($completeUserInfo);
</script>

<div class="resume">
    <div class="intro">
        <Intro />
        <ContactInfo />
    </div>
    <div class="details">
        <Projects />
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
        padding: 4rem;
    }
</style>