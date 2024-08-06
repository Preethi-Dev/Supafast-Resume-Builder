<script>
    import {userId, userInfo} from "../stores/store";
    import { goto } from '$app/navigation';

    //Reactive variables
    let userInput;
    let error;

    const requestToGithubAPI = async () => {
        const response = await fetch("https://api.github.com/users/" + $userId);
        const data = await response.json();
        if(data.status === "404"){
            error = "We can't find you 😔";            
        } else {
            userInfo.set(data);
            goto("/template");
        }
    }

    const handleFormSubmit = (e) => {
        if(e.key === "Enter") {
            userId.set(userInput);
            requestToGithubAPI();
            //clear the input
            userInput = "";
        }
    }
</script>

<div class="container">
    <div class="intro">
        <div class="intro__logo">
            <img src="/supafast-logo.png" alt="logo"/>
        </div>
        <p class="intro__title special-font">Resume</p>
    </div>
    <div class="intro__form">
        <div class="userIdForm">
            <p>https://github.com/</p>
            <input type="text" bind:value={userInput} on:keydown={handleFormSubmit} placeholder="Your handle"/>
        </div>
        <img src="/indicator.svg" alt="" class="indicator"/>
        {#if !error}
            {#if !$userInfo && $userId}
                <p class="loading">Preparing your resume...</p>
                {:else}
                    <div class="enter-indicator">
                        <p>press <b>Enter</b></p>
                        <img src="/enter-arrow.svg" alt="">
                    </div>
            {/if}
        {:else}
            <p class="error">{error}</p>
        {/if}
    </div>
</div>
 
<style>
    .error{
        color: red;
        opacity: .6;
    }

    .intro{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .intro__logo{
        margin-bottom: -2rem;
    }

    .container{
        position: relative;
        max-width: 82.375rem;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
    }

    .intro__title{
        font-size: 10.75rem;
    }

    .indicator{
        position: absolute;
        top: 14rem;
        right: 12rem;
    }

    .intro__form{
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: .75rem;
    }

    .userIdForm{
        display: flex;
        align-items: center;
        gap: 1.625rem;

        padding: 1.125rem 1.5rem 1.125rem 2.5rem;
        color: #2C0A70;
        font-size: 2rem;
        letter-spacing: -0.04rem;
        background: #FFF;
        border-radius: 1.5rem;
    }

    .userIdForm > input{
        width: 22rem;
        font-size: 2rem;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        border: 1px solid rgba(241, 241, 241, 0.80);
        background: rgba(241, 241, 241, 0.30);
    }

    input::placeholder{
        font-size: 2rem;
        opacity: .1;
    }
    
    .enter-indicator{
        display: flex;
        gap: .5rem;
        color: #2C0A70;
        font-size: 1.25rem;
    }
</style>