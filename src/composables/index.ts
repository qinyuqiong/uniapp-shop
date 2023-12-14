import { useMemberStore } from '@/stores/modules/member'
import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'

/**
 * 猜你喜欢的组合式函数
 * @returns 猜你喜欢组件实例，滚动触底事件
 */
export const useGuessList = () => {
  //获取会员信息
  const memberStore = useMemberStore()
  //猜你喜欢组件实例
  const guessRef = ref<XtxGuessInstance>()
  //滚动触底事件
  const onScrolltolower = () => {
    guessRef.value.getMore()
  }

  return {
    guessRef,
    onScrolltolower,
  }
}
