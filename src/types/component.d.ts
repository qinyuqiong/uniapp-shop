import XtxSwiper from '@/components/XtxSwiper.vue'
import XtxGuessVue from '@/components/XtxGuess.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuessVue
  }
}

//组件实例类型
export type XtxGuessInstance = InstanceType<typeof XtxGuess>
