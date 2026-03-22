import { useState } from "react";

export default function Colorpicker() {
    const [color, setcolor] = useState("#3498db");
   

    const handleChange = (e) => {
        setcolor(e.target.value);
    };

    const copy = () => {
        navigator.clipboard.writeText(color);
        alert("copied"+ color)
    }

    const randomColor = () => {
        const random = `#${Math.floor(Math.random() * 0xffffff)
            .toString(16)
            .padStart(6, "0")}`;
        setcolor(random);
    };

    return (
        <div className="container">
            <h2>Color picker</h2>

            <div className="color-box"
            style={{backgroundColor:color}}
            >

            </div>

            <input type="color" value={color} onChange={handleChange} />

            <p > {color}</p>

        
                <button   className="b" onClick={copy}>copy</button>
                <button className="b" onClick={randomColor}>random</button>
            
        </div>
    )
}