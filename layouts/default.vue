<template>
  <section
 >
<page-header/>
    <slot/>
 <page-footer/>
  </section>
</template>

<script setup>
import pageFooter from '~~/pages/components/pageFooter.vue';
import pageHeader from '~~/pages/components/pageHeader.vue';

</script>

<style>

/* colors an theme */
:root{
    --primaryColor:#E0E0E0;
    --cardBackground:#f3e9e9;
    --secondaryColor:#3680C5;
    --borderColor:#e4e0e0;
}

*{
    margin:0 ;
    padding: 0;
}
a{
    text-decoration: none;
}
li{
    list-style: none;
}
.container{
    padding: 30px;
}
.icon{
    width: 30px;
    height: 3px;
    background:var(--secondaryColor);
    border-radius: 2px;
    margin-top: 4px;

}
.nav-bg{
    background-color: var(--borderColor);
    margin-top:0;
   position: relative;

}
.secondary-color{
    color: var(--secondaryColor);
}
.secondary-color-bg{
    background-color: var(--secondaryColor);
}
.round-border{
    border: 2px var(--secondaryColor) solid;
}
.card-border{
    border: 0.1px var(--borderColor) solid;
}
.card-bg{
    background-color:var( --cardBackground) ;

}
.btn-bg{
    background-color: #E0E0E0;
    width:100px
}
.category-drop{
    border-radius: 20px;
}
p{
    font-family: Open Sans, sans-serif;
}
.logo-border{
    margin-bottom: 20px;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    border: 4px solid var(--secondaryColor);
}
.trending-image{
    width: 8px;

}
.input-width{
    width:100%;
}
.input-width-c{
    width:300px;
}
.max-heigth{
    max-height: 530px;
}
.title-width{
    width:100%;
}

</style>