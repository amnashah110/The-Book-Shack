import React from "react";
import {Link} from "react-router-dom";
import { BsCaretLeft } from "react-icons/bs";

const BackButton = ({destination = '/'}) => {
    return (
        <div className="flex">
            <Link to = {destination} className="relative text-black">
                <BsCaretLeft size = {50} style={{strokeWidth: 1, color: '#FFFFFF'}}></BsCaretLeft>
            </Link>
            <Link to = {destination} className="relative text-black">
                <h1 style = {{fontSize: '1.5em', fontFamily: 'Poppins', color: '#FFFFFF', textShadow: '10px 10px 10px #000000', marginTop: '0.3em'}}>Go Back</h1>
            </Link>
        </div>
    );
}

export default BackButton;
