import React from 'react';
import './classComponent.scss';

class ClassComponent extends React.PureComponent {

    componentDidUpdate() {
        
    }
    render() {
        console.log('ClassComponent Re-render');
        return <div className="class-component">
            Class component
            <div>
                {this.props.name}
            </div>
        </div>
    }
}

export default ClassComponent;