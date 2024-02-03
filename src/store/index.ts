import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import State from './types'

const useGlobalStore = create<State>()(devtools((set) => ({
    mobileMenu: false,

    changeMobileMenu: (value: boolean) => set({ mobileMenu: value }),
})))

export default useGlobalStore