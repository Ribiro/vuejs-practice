<template>
  <header>
    <h1 @click="change_title">{{title}}</h1>
  </header>
</template>

<script>
    import {bus} from "../main";

    export default {
        props: {
            title: {
                type: String
            }
        },
        data () {
            return {
                // title : 'Vue Ninjas'
            }
        },
        methods: {
            change_title: function () {
                // this.$emit('change_title', 'Vue Wizards')
                this.title = 'Vue Wizards'
                bus.$emit('titleChanged', 'Vue Wizards')
            }
        }
    }
</script>

<style scoped>
  header{
    background: lightgreen;
    padding: 10px;
  }
  h1{
    color: #222;
    text-align: center;
  }
</style>
