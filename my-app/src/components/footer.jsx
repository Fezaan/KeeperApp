import React from "react";

let date= new Date();
let year= date.getFullYear();

export default function Footer(){
    return(
        <>
            <footer>
                <p>Copyright ©️ Fezaan {year}</p>
            </footer>
        </>
    )
}