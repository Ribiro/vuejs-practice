<template>
  <footer>
    <p>{{copyright}}</p>
  </footer>
</template>

<script>
    import {bus} from "../main";

    export default {
        data () {
            return {
                copyright : 'Copyright 2020 Vue Ninjas'
            }
        },
        created() {
            bus.$on('titleChanged', (data) =>{
                this.title = data
            })
        }
    }
</script>

<style scoped>
  footer{
    background: red;
    padding: 6px;
  }
  h1{
    color: #222;
    text-align: center;
  }
</style>
