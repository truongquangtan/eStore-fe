import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from '@/router'

createApp(App)
.use(router)
.mount('#app')

/* Default title tag */
const defaultDocumentTitle = 'Training Project'

/* Set document title from route meta */
router.afterEach((to) => {
  document.title = to.meta?.title
    ? `${to.meta.title}`
    : defaultDocumentTitle
})