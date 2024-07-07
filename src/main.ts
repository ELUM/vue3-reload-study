import { createApp } from 'vue'
import mitt from 'mitt'
// import './style.css'
import 'animate.css'
import App from './App.vue'
import Card from './pages/Components/Card.vue'
import Tree from './pages/Components/Tree.vue'

// 注入类型
declare module 'vue' {
  export interface ComponentCustomProperties {
    $Bus: typeof Mitt
  }
}

const Mitt = mitt()

const app = createApp(App)
app.config.globalProperties.$Bus = Mitt
app.component('Card', Card).component('Tree',Tree)
app.mount('#app')
