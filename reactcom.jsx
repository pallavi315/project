// import React,{useState, useEffect} from 'react'
// export default function Useeffect() {
//     const[width,setwidth]=useState(window.innerWidth)
//     const[height,setheight]=useState(window.innerHeight)
//     useEffect(()=>{
//         document.title=`size:${width}x${height}`},[width,height]);
//         window.addEventListener("resize",handle)
//         console.log("EVENT LISTNER ADDED")
//     function handle(){
//         setwidth(window.innerWidth)
//         setheight(window.innerHeight)
//     }
//     return(
//         <>
//         <p>window width:{width}</p>
//         <p>window height:{height}</p>
//         </>
//     )
//   }
// import React, { useEffect, useState } from "react";

// const EveryRenderExample = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("Effect runs on every render");
//   });
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//     </div>
//   );
// };
// export default EveryRenderExample;

// import React, { useEffect, useState } from "react";

// const InitialRenderExample = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     console.log("Effect runs only on the initial render");
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []); // Empty dependency array

//   return (
//     <div>
//       <h1>Data:</h1>
//       <pre>{JSON.stringify(data,null,1)}</pre>
//     </div>
//   );
// };
// export default InitialRenderExample;
import React, { useEffect, useState } from "react";

const DependencyChangeExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Effect runs only when count changes");
  }, [count]); // Dependency array with `count`
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
};
export default DependencyChangeExample;

