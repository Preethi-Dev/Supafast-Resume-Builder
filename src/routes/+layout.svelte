<script>
    import "../styles/global.css"; 
    import { page } from '$app/stores';
    import NavBar from "$lib/NavBar.svelte";

    let isHome;
    $: isHome = $page.route.id === "/";
    $: isEditPage = $page.route.id.includes("edit");
    
</script>

{#if isEditPage}
    <NavBar />
{/if}
<main>
    <div class="container {isHome ? "bg" : ""} {isEditPage ? "shrink-padding" : "main-center grow-padding"}">
        <slot></slot>
    </div>
</main>

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


</style>