export default defineEventHandler(async(event)=>{
    let slug = event.context.params.slug

    //this is the post uri 

    const uri = `https://dev-louis-dev.pantheonsite.io/wp-json/wp/v2/posts/${slug}?_embed`

    //fectching the data from the data base

    let post = await $fetch(uri);

    return post

});