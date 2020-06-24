import React, { useEffect } from 'react';
import './functionalComponent.scss';
let renderTimes = 0;
function FunctionalComponent({ name }) {
    useEffect(() => {
        console.log('Functional component update');
    }, [name]);
    renderTimes++;
    console.log('Functional Component re-render');
    return <div className="functional-component">
        Funcional component
        <div>
            {name}
        </div>
        <div>Render times: {renderTimes}</div>
    </div>
}

export default React.memo(FunctionalComponent);