import { defineComponent, reactive, PropType } from 'vue'

const PropsType = {
  msg: String,
  age: {
    type: Number,
    required: true,
  },
} as const

export const HelloWorld = defineComponent({
  props: PropsType,
  setup(props, { slots, attrs, emit }) {
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
        <div id="HelloWorld">
          <p>{props.msg}</p>
        </div>
      )
    }
  },
})
