import { ImageStore } from '@/constant/image-reducer'
import { defineComponent, reactive } from 'vue'
import { HelloWorld } from './components/HellowWorld'

interface AppProps {
  AppName: string
}

export const App = defineComponent({
  setup(props: AppProps, { slots, attrs, emit }) {
    // const ageRef = ref(0)
    const state = reactive({ name: 'Leo' })

    return () => {
      //   return h('div', { id: 'app' }, [
      //     h('img', {
      //       alt: 'Vue logo',
      //       src: img,
      //     }),
      //   ])

      return (
        <div id="app">
          <img src={ImageStore.IMG_LOGO} alt="" />
          <HelloWorld age={18} />
          <p>{props.AppName}</p>
          <p>{state.name}</p>
          <input type="text" v-model={state.name} />
        </div>
      )
    }
  },
})
