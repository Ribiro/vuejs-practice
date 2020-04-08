<template>
  <div>
    <app-header v-bind:title="title" v-on:change_title="update_title($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  import Ninjas from "./components/Ninjas";

  export default {
    components:{
        'app-header': Header,
        'app-footer': Footer,
        'app-ninjas': Ninjas
    },

    data () {
        return {
            ninjas: [
                {name: 'Peter', speciality: 'footballer', show: false},
                {name: 'John', speciality: 'musician', show: false},
                {name: 'Dennis', speciality: 'comedian', show: false},
                {name: 'Ribiro', speciality: 'journalist', show: false},
                {name: 'David', speciality: 'governor', show: false},
                {name: 'Doe', speciality: 'rapper', show: false}
            ],
            title: "Vue Ninjas"
        }
    },
    methods: {
        update_title: function (updatedTitle) {
            this.title = updatedTitle;
        }
    }
  }
</script>

<style scoped>

</style>
