import React from 'react';
import './Analyze.css'

const Analyze = () => {
    return (
    <img src="frontend/images/salooninside.jpeg" alt="saloon indoors" />
    )
    var element = document.querySelector(".door");
    element.addEventListener("click", toggleDoor);

    function toggleDoor() {
    element.classList.toggle("doorOpen");
    }
}


export default Analyze;
