<main>
    <div class="container">
        <slot></slot>
    </div>
</main>

<style>
    main{
        display: flex;
        align-items: center;
        min-height: 100vh;
        padding: 4.1875rem 3.8125rem;
    }

    .container{
        flex-grow: 1;
        border-radius: 2rem;
        background: rgba(255, 255, 255, 0.70);

        box-shadow: 0px -44px 92px 0px rgba(255, 255, 255, 0.90), 0px 20px 36px 0px rgba(255, 255, 255, 0.75);
        backdrop-filter: blur(2px);
        background-image: url('/bg.svg');
        background-size: cover; 
        background-position: center; 
        background-repeat: no-repeat; 
        width: 100%; 
        height: 100%; 
    }
</style>