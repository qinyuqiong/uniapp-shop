import XtxSwiper from '@/components/XtxSwiper.vue'
import XtxGuessVue from '@/components/XtxGuess.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuessVue
  }
}
