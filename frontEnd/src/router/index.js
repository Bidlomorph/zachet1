import Vue from "vue";
import VueRouter from "vue-router";
import auth from "../components/auth";
import registration from "../components/registration";
import gallery from "../components/gallery";
import axios from "axios";

Vue.use(VueRouter);

// eslint-disable-next-line no-unused-vars
const authTrue = async (to, from, next) => {
    if (Vue.cookie.get('name') && Vue.cookie.get('password')) {
        const url = "http://localhost:3000/user/api/authentication";
        let requestParams = {
            url: url,
            method: "POST",
            params: { name: Vue.cookie.get('name'), password: Vue.cookie.get('password') }
        };
        await axios(requestParams).then(
            resp => {
                if (resp.data === 'Вошел') {
                    next()
                }
                else if (resp.data === 'Ошибка'){
                    next('/')
                }
            },
            err => {
                console.log(err);
            }
        );
    }
    else {
        next('/')
    }
}

const routes = [
    {
        path: "/auth",
        name: "auth",
        component: auth,
    },
    {
        path: "/",
        name: "registration",
        component: registration,
    },
    {
        path: "/gallery",
        name: "gallery",
        component: gallery,
        beforeEnter: authTrue
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;