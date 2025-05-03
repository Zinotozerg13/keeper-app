import React from "react";

function footer()
{
    const today = new Date();

    return <div><footer> <p>Copyright ⓒ{today.getFullYear()} </p></footer></div>
}
export default footer;