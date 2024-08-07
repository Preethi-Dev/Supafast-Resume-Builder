<script>
    import { goto } from '$app/navigation';
    import {currentTemplate} from "../../stores/store"
    const handleTemplateClick = (e) => {
        const {dataset: {template}} = e.target;
        template && currentTemplate.set(template);
        goto("/template/edit");
    }
</script>

<div class="template">
    <p class="template__title">Choose your <span class="special-font">Style</span></p>
    <div class="template__choice" on:click={handleTemplateClick}>
        <img src="/template-01.svg" alt="resume 01" data-template="template 01">
        <img src="/template-02.svg" alt="resume 02" data-template="template 02">
    </div>
</div>

<style>
    .template{
        display: flex;
        flex-direction: column;
        gap: 3.5rem;
        padding: 0rem 4rem;
    }
    .template__title{
        color: rgba(44, 10, 112, 0.20);
        font-family: "PP Neue Montreal Medium";
        font-size: 4rem;
    }

    .template__choice{
        display: flex;
        justify-content: space-around;
    }

    .template__choice > img {
      width: 28rem;
      cursor: pointer;
      border: 2px solid transparent; 
      border-radius: 1rem;
      transition: border 0.1s ease;
    }

    .template__choice > img:hover {
      border: 2px solid #A983F4; 
    }
</style>