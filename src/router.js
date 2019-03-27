import Vue from 'vue'
import VueRouter from 'vue-router'

//ルート用のコンポーネントを読み込む
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Product from '@/views/Product.vue'
import Skill from '@/views/Skill.vue'
import Social from '@/views/Social.vue'

Vue.use(VueRouter)

//VueRouterのインスタンスを生成
const router = new VueRouter({
    routes : [
        { path : '/', component : Home },
        { path : '/About', component : About },
        { path : '/Product', component : Product },
        { path : '/Skill', component : Skill },
        { path : '/Social', component : Social }
    ]
})

export default router
