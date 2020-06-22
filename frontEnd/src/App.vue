<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    // eslint-disable-next-line no-unused-vars
    import axios from "axios";

    export default {
        name: 'App',
        components: {

        },
        // async mounted() {
        //     const url = "http://localhost:3000/user/api/authentication";
        //     let requestParams = {
        //         url: url,
        //         method: "POST",
        //         params: { name: this.$cookie.get('name'), password: this.$cookie.get('password') }
        //     };
        //     await axios(requestParams).then(
        //         resp => {
        //             if (resp.data === 'Вошел') {
        //                 console.log('123')
        //                 this.$router.push("/gallery");
        //             }
        //             else if (resp.data === 'Ошибка'){
        //                 if (this.$router.app._route.path === '/gallery'){
        //                     this.$router.push("/");
        //                 }
        //             }
        //         },
        //         err => {
        //             console.log(err);
        //         }
        //     );
        // }
    }
</script>

<style lang="scss">
  @import "./assets/scss.scss";
</style>
