import { useRef } from "react";
 
const Example = () => {
    //creating a ref
    const ref = useRef();
    // Styling the element
    const handleClick = () => {
        ref.current.style.backgroundColor = "black";
        ref.current.style.padding = "4rem";
        ref.current.style.color = "white";
        ref.current.style.width = "150px";
        ref.current.style.height = "200px";
        ref.current.style.margin = "20px";
        ref.current.style.borderRadius = "10px";
    };
 return (
        <div>
            <button onClick={handleClick}>Enable dark mode</button>
            <br />
            <br />
            <div ref={ref}>
                styling an element using useRef hook in React
            </div>
        </div>
    );
};
export default Example;