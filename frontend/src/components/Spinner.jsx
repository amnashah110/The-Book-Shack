import React from "react";

const Spinner = () => {
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <img src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif" className="w-16 h-16 rounded-full" alt="Loading Spinner" />
        </div>
    );
}

export default Spinner;
