import el from '../../lib/index.js';

//
const {useRef,useEffect} = React;

//
const Component = ()=>{
  const containerRef = useRef(null);
  useEffect(()=>{
    //
    containerRef.current.appendChild(el);
  },[])
  //
  return <div ref={containerRef}></div>
}

//
ReactDOM.render(
  <Component/>,
  document.querySelector('#wp')
);