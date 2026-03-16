// menu overlay state management

import { create } from "zustand"; 

interface MenuStateProps {
    isOpened: boolean; 
    changeMenu: (status: boolean) => void; 
}

export const useMenuStateStore = create<MenuStateProps>((set) => ({
    isOpened: false, 
    changeMenu: (status) => (set({isOpened: status}))
})) 