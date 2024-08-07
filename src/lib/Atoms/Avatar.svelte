<script>
    import {completeUserInfo, isPreviewMode} from "../../stores/store"
    export let avatar = $completeUserInfo.avatar;

    let imageUrl = '';

    function handleFileUpload(e){
        const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    imageUrl = e.target.result;
                    completeUserInfo.update(value => ({...value, avatar: imageUrl}));
                };
                reader.readAsDataURL(file);
            }
    }

</script>

<div class="container">
    <img src={imageUrl || avatar} alt="avatar">
    {#if !$isPreviewMode}
        <input type="file" accept="image/*" on:change={handleFileUpload}>
    {/if}
</div>

<style>
    img{
        width: 18.5rem;
        height: 18.5rem;
        border-radius: 1rem;
    }

    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
</style>