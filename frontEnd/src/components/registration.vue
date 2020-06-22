<template>
  <div class="container-modal">
    <div class="modal">
      <p>Регистрация</p>
      <a>Логин</a>
      <input type="text" v-model.trim="name" placeholder="Введите логин" maxlength="20">
      <a>Пароль</a>
      <input type="password" v-model.trim="password" placeholder="Введите пароль" maxlength="20">
      <button @click="registration()">Зарегистрироваться</button>
      <button @click="toAuth()">Перейти ко входу</button>
    </div>
  </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                name: "",
                password: "",
            };
        },
        methods: {
            toAuth() {
                this.$router.push("/auth")
            },
            async registration() {
                const url = "http://localhost:3000/user/api/registration";
                let requestParams = {
                    url: url,
                    method: "POST",
                    params: { name: this.name, password: this.password }
                };
                await axios(requestParams).then(
                    resp => {
                        console.log('Зареган');
                        console.log(resp);
                    },
                    err => {
                        console.log(err);
                    }
                );
                this.name = ""
                this.password = ""
                this.$router.push("/auth");
            }
        }
    }
</script>

<style lang="scss">
  @import "../assets/scss.scss";
</style>