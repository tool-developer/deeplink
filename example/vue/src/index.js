import el from '../../lib/index.js';
//
const app = Vue.createApp({})
const {nextTick,ref} = Vue;
//
app.component('component', {
  template:'<div :ref="setContainerRef"></div>',
  setup(){
    let containerRef = ref([]);
    //
    const setContainerRef = (el)=>{
      containerRef.current = el;
    }
    //
    nextTick(()=>{
      //
      containerRef.current.appendChild(el)
    })
    //
    return {
      setContainerRef
    }
  }
})

app.mount('#wp')