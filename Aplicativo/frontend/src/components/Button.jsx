import React from 'react'

export default function Button({ children, colorButton, classNameButton, onClick }) {

    return (
        <button onClick={onClick} className={classNameButton + " btn"} style={{ backgroundColor: colorButton }}>{children}</button>
    );
}