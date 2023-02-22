export default defineEventHandler( async ()=>{

    const uri = `/api/blog/${slug}`;
    let posts = await $fetch(uri);
    return posts;
  }
  );