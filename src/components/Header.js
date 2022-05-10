import { useState } from "react";

function Header(props){

    const [count, setCount] = useState(0);
    const [counterTheme, setCounterTheme] = useState("counter")
    
    
    const increaseCount = () => {
        if (count >= 9) {
        setCounterTheme("counterdark");
        } 
        setCount(count + 1);
    }

    const decreaseCount = () => {
        if (count <= 10) {
            setCounterTheme("counter");
            }
        setCount(Math.max(count -1, 0));
    }


    
    return (
        <header>
        <p>This is the Header</p>
        <nav> 
        <a href=" ">Home</a> |
        <a href=" ">About</a> |
        <a href=" ">Contact</a>
        </nav>

        <div id={counterTheme}>
        <button onClick={increaseCount}> Click Here</button>
        <button onClick={decreaseCount}> Turn Back Time</button>
        <h3> User has clicked {count} number of times</h3>
        </div>


        {props.children}
        
        </header>


    );
}

export default Header;