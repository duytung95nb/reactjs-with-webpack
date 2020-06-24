import React, { Suspense } from 'react';
import './classComponent.scss';
const LargeSizeComponent = React.lazy(() => import('../largeSizeComponents/largeSizeDialogWithComplexLogic'));
class ClassComponent extends React.Component {
    renderTimes = 0;
    constructor(props) {
        super(props);
        this.state = {
            showDynamicLoadingComponent: false
        };
    }
    componentDidUpdate() {

    }
    onToggleDynamicLoadingComponentClicked = () => {
        this.setState({
            showDynamicLoadingComponent: true
        });
    }
    render() {
        this.renderTimes++;
        console.log('ClassComponent Re-render');
        return <div className="class-component">
            Class component
            <div>
                {this.props.name}
            </div>
            <div>Render times: <b>{this.renderTimes}</b></div>
            <button onClick={this.onToggleDynamicLoadingComponentClicked}></button>
            {this.state.showDynamicLoadingComponent
                && (<div className="class-component__dynamic-component">
                    <Suspense fallback={<div>Loading...</div>}>
                        <LargeSizeComponent />
                    </Suspense>
                </div>)}
        </div>
    }
}

export default ClassComponent;