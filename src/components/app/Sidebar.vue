<template>
    <ul class="sidenav app-sidenav" :class="{open: value}">
        <router-link
                v-for="link in links"
                :key="link.url"
                tag="li"
                active-class="active"
                :to="link.url"
                :exact="link.exact"
        >
            <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
        </router-link>
    </ul>
</template>

<script>
    import localizeFiler from '@/filters/localize.filter'
    export default {
        name: "Sidebar",
        props: ['value'],
        data: ()=>({
            links: [
                {title: localizeFiler('Menu_Bill'),url:'/',exact:true},
                {title: localizeFiler('Menu_History'),url:'/history'},
                {title: localizeFiler('Menu_Planning'),url:'/planning'},
                {title: localizeFiler('Menu_NewRecord'),url:'/record'},
                {title: localizeFiler('Menu_Categories'),url:'/categories'}
            ]
        })
    }
</script>

<style scoped>

</style>