import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import QuickEditor from './QuickEditor.vue'

const app = createApp(QuickEditor)
app.use(Antd)
app.mount('#app')
