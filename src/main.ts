import { createApp } from 'vue'
// import './style.css'
import 'animate.css'
import App from './App.vue'
import Card from './pages/Components/Card.vue'
import Tree from './pages/Components/Tree.vue'

const app = createApp(App)
app.component('Card', Card).component('Tree',Tree)
app.mount('#app')
