import {create} from "zustand";

const useMouse = create((set) => {
 window.addEventListener('mousemove', e=> set({left:e.clientX, top:e.clientY}))
 return {
  position:'absolute',
  left:0,
  top:0
 }
})

export function useMouseXY() {
 let {left, top} = useMouse()
 return [left, top]
}

export function Mouse ({children}) {
 const followsMouse = useMouse()
 return <div style={followsMouse}>{children}</div>
}