import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes';
import App from './App.vue'
import './assets/tailwind.css'
// import error from '~/pages/error.vue';

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.config.performance = process.env.NODE_ENV != "production";
// app.config.silent = true
app.config.errorHandler = function (err, vm, info) {
  // handle error
  // console.log('info',err,info);
  // `info` is a Vue-specific error info, e.g. which lifecycle hook
  // the error was found in. Only available in 2.2.0+
}
// router.beforeEach((to, from) => {
//   if (!!to.params.error) {
//     console.log(to.params.error);
//     return  { meta: { layout: 'error' }, props: true }
//   }
//   // ...
//   // explicitly return false to cancel the navigation
//   // return false
// })
// router.beforeResolve(async to => {
//   if (to?.meta?.layout) {
//     const metaLayout = to.meta.layout
//     // if (!!metaLayout) 
//     await import(/* @vite-ignore */ `./layouts/${metaLayout}.vue`)
//     .then(Component => { layout.value = metaLayout ? markRaw(Component?.default) : defaultLayout })
//   }
//   if (to.meta.error) {
//     try {
//       console.log(to.meta.error);
//       // return { ...to, meta: { layout: 'error' }}
//       // await askForCameraPermission()
//     } catch (error) {
//       if (error instanceof NotAllowedError) {
//         // ... handle the error and then cancel the navigation
//         return false
//       } else {
//         // unexpected error, cancel the navigation and pass the error to the global handler
//         throw error
//       }
//     }
//   }
// })
app.use(router)
app.mount('#app')
