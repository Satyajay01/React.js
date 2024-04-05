import React, { useState } from 'react';

const Element_Hide_Show = () => {
    const [Status, setStatus] = useState(true);
    
    return (
        <>
            {Status ? <h1>Show and Hide Element</h1> : null}

            {/* <button onClick={() => setStatus(false)}>Hide</button>
            <button onClick={() => setStatus(true)}>Show</button> */}

                {/* ---------Toggle--------------- */}
            <button onClick={() => setStatus(!Status)}>Toggle</button>
        </>
    );
}

export default Element_Hide_Show;
