import React, { useEffect } from 'react';
import './functionalComponent.scss';

function FunctionalComponent(props) {
    useEffect(() => {
        // console.log('Functional component update');
    });
    console.log('Functional Component re-render');
    return <div className="functional-component">
        Funcional component
        <div>
            {props.name}
        </div>
    </div>
}

export default FunctionalComponent;