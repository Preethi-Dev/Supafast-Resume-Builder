<script>
    import "../styles/global.css"; 
    import { page } from '$app/stores';
    import {resume, isEditProjects, currentTemplate, isPreviewMode} from "../stores/store";
    import NavBar from "$lib/NavBar.svelte";
    import ReposModal from "$lib/ReposModal.svelte";

    let isHome;
    let template;
    $: template = $currentTemplate;
    $: isHome = $page.route.id === "/";
    $: isEditPage = $page.route.id.includes("edit");

    let resumeToExport;    

    $: resume.set(resumeToExport);
</script>

{#if isEditPage || $isPreviewMode}
    <NavBar />
{/if}
<main class="{$isPreviewMode ? "bg" : ""}">
    <div bind:this={resumeToExport} id="resumeToExport" class="container {(template === "template 02" && !isHome) ? "template-02" : "template-01"} {isHome ? "bg" : ""} {isEditPage ? "shrink-padding" : "main-center grow-padding"}">
        <slot></slot>
    </div>
</main>
{#if $isEditProjects}
    <ReposModal />
{/if}

<style>

    main{
        display: flex;
        min-height: 100vh;
        padding: 4.1875rem 3.8125rem;
    }

    .shrink-padding{
        padding: 1.5rem;
    }

    .grow-padding{
        padding: 3rem 4rem;
    }

    .main-center{
        align-items: center;
    }

    .container{
        flex-grow: 1;
        border-radius: 2rem;
        background: rgba(255, 255, 255, 0.70);

        box-shadow: 0px -44px 92px 0px rgba(255, 255, 255, 0.90), 0px 20px 36px 0px rgba(255, 255, 255, 0.75);
        backdrop-filter: blur(2px); 
    }

    .bg{
        background-image: url('/bg.svg');
        background-size: cover; 
        background-position: center; 
        background-repeat: no-repeat; 
        width: 100%; 
        height: 100%;
    }

    .template-01{
        background-color: #f8f8f8;
    }

    .template-02{
        background-color: #171717;
        color: rgba(255, 255, 255, .8);
    }

</style>