

import React from "react";
const cal = () => {
    const handleClick = (value) => {
        setInput(input + value)
    }

    const clear = () =>
    {
        setInput("");
    }

    const calculate = () => {
        try {
            setInput(eval(input).toString());
        } catch {
            setInput("Error")
        }
    }

    return (
        <>
        </>
    )
}
export default cal;