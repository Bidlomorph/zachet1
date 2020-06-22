<template>
  <div class="container">
    <div class="header">
      <div class="logo">
        <a>Gallery</a>
      </div>
      <div class="buttons">
        <button @click="logout()">
          Выход
        </button>
      </div>
    </div>
    <div class="upload">
      <input type="file" id="file" ref="file" name="image" @change="fileInputChange()">
      <button @click="test()">123</button>
    </div>
    <div class="gallery" v-for="item in photos" :key="item">
      {{ item }}
    </div>
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "gallery",
        data() {
            return {
                photos: []
            }
        },
        methods: {
            logout() {
                this.$cookie.delete('name')
                this.$cookie.delete('password')
                this.$router.push('/auth')
            },
            async fileInputChange() {
                let file = this.$refs.file.files[0];
                console.log(file)
                let formData = new FormData();
                formData.append('file', file);
                axios.post( 'http://localhost:3000/galery/api/upload',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(function(){
                    console.log('SUCCESS!!');
                }).catch(function(){
                    console.log('FAILURE!!');
                });
            },
            async test () {
                const url = "http://localhost:3000/galery/api/files";
                let requestParams = {
                    url: url,
                    method: "GET",
                    params: { name: this.name, password: this.password }
                };
                await axios(requestParams).then(
                    resp => {
                        console.log(resp)
                        // this.photos = resp.data
                        // console.log(resp.data[0].isImage)
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