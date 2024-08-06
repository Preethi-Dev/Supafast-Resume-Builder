<script>
    import Intro from "$lib/Intro.svelte";
    import ContactInfo from "$lib/ContactInfo.svelte";
    import {userInfo, currentTemplate, completeUserInfo} from "../../../stores/store";

    $: console.log($completeUserInfo);
</script>

<div class="resume">
    <div class="intro">
        <Intro />
        <ContactInfo />
    </div>
</div>

<style>
    .resume{
        background: #F8F8F8;
    }
    
    .intro{
        display: flex;
        flex-direction: column;
        gap: 4.5rem;
        padding: 2rem 3rem;
        border-radius: 2rem;
        background-color: #fff;
    }
</style>