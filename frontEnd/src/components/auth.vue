<template>
  <div class="container-modal">
    <div class="modal">
      <p>Вход</p>
      <a>Логин</a>
      <input type="text" v-model.trim="name" placeholder="Введите логин" maxlength="20">
      <a>Пароль</a>
      <input type="password" v-model.trim="password" placeholder="Введите пароль" maxlength="20">
      <button @click="authentication()">Войти</button>
      <button @click="toRegistration()">Перейти к регистрации</button>
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
            toRegistration() {
                this.$router.push("/")
            },
            async authentication() {
                const url = "http://localhost:3000/user/api/authentication";
                let requestParams = {
                    url: url,
                    method: "POST",
                    params: { name: this.name, password: this.password }
                };
                await axios(requestParams).then(
                    resp => {
                        if (resp.data === 'Ошибка') {
                            console.log('Ошибка')
                            console.log(resp)
                        }
                        else if (resp.data === 'Неверный пароль'){
                            console.log('Неверный пароль')
                            console.log(resp)

                        }
                        else {
                            console.log(resp)
                            console.log('Вошел')
                            document.cookie = `name=${this.name}`;
                            document.cookie = `password=${this.password}`;
                            this.name = ""
                            this.password = ""
                            this.$router.push("/gallery")
                        }
                    },
                    err => {
                        console.log(err);
                    }
                );
            }
        }
    }
</script>

<style lang="scss">
  @import "../assets/scss.scss";

</style>