export default defineEventHandler( async ()=>{

    const uri = "https://dev-louis-dev.pantheonsite.io/wp-json/wp/v2/posts?_embed";
    let posts = await $fetch(uri);
    return posts;
  }
  );