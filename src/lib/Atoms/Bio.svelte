<script>
    import {completeUserInfo, currentTemplate} from "../../stores/store"
    export let bio = $completeUserInfo.bio;
    
    let isDataInAPI;

    $: isDataInAPI = !$completeUserInfo.bio.includes("Tell about yourself")

    function handleBlur(e){
        completeUserInfo.update(value => ({...value, bio: bio}));
    }

    function handleInput(e){
        isDataInAPI = true;
        
    }
</script>

<p bind:innerText={bio} on:blur={handleBlur} on:input={handleInput} class="{isDataInAPI ? "active" : "inactive"} {$currentTemplate === "template 02" ? "template-02" : ""}" contenteditable>{bio}</p>

<style>
    p{
        color: #000;
        font-size: 1.125rem;
    }

    .active{
        color: rgba(0,0,0,1);
    }

    .inactive{
        color: rgba(0,0,0,0.3);
    }

    .template-02, .template-02.active{
        color: #fff;
        opacity: .8;
    }  
</style>