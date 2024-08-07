<script>
import {completeUserInfo, isPreviewMode} from "../stores/store";
import generatePDF from "../utils/generatePDF";
import { goto } from '$app/navigation';
function handlePreview(){
    isPreviewMode.set(true);
}
function handleDownload(){
    generatePDF("resumeToExport");  
}
function handleClick(){
    isPreviewMode.set(false);
}
function handleRedirect(){
    window.location.assign("/")
}
</script>

<div class="nav">
    <div class="nav__route">
    {#if $isPreviewMode}
        <a href="/template/edit" style="cursor: pointer;" on:click={handleClick}><img src="/goback.svg" alt="arrow"></a>
    {/if}
    <a href="/"><img src="/logo-only.png" on:click={handleRedirect} alt=""></a>
    </div>
     {#if !$isPreviewMode}
        <div class="nav__btn" on:click={handlePreview}>
            <img src="/preview.svg" alt="preview div" />
            <a href="/template/preview">Preview</a>
        </div>
        {:else}
            <div class="nav__btn" on:click={handleDownload}>
            <img src="/download.svg" alt="download" />
            <a href="">Download</a>
        </div>
        {/if}
  
</div>

<style>
    .nav{
        display: flex;
        justify-content: space-between;
        align-items: center;

        border-radius: 6rem;
        background: rgba(255, 255, 255, 0.40);
        backdrop-filter: blur(12px);
        padding: 1.125rem 2.1875rem;
        margin: 0 1.5rem;
    }

    .nav__route{
        display: flex;
        gap: 1.5rem;
        align-items: center;
    }

    .nav__btn{
        display: flex;
        padding: 0.75rem 1rem;
        align-items: center;
        gap: 0.25rem;
    }

    .nav__btn > a, .nav__btn > button{
        color: #2C0A70;
        font-size: 1rem;
    }

</style>