import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import ClassComponent from './children/classComponent';
import FunctionalComponent from './children/functionalComponent';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            functionalComponentName: "Functional component",
            classComponentName: "Class component",
            classComponents: []
        }
    }
    onRenderMoreClicked = () => {
        // Render list of components
        this.setState({
            ...this.state,
            classComponents: [...this.state.classComponents, {
                id: this.state.classComponents.length,
                classComponentName: `New class component ${this.state.classComponents.length}`
            }]
        });
    }
    onFunctionalComponentNameInput = (event) => {
        this.setState({
            functionalComponentName: event.target.value
        });
    }
    onClassComponentNameInputChanged = (event) => {
        this.setState({
            classComponentName: event.target.value
        });
    }
    onAdditionalClassComponentChange = (event, idx) => {
        let newClassComponents = this.state.classComponents;
        newClassComponents[idx].classComponentName = event.target.value;
        this.setState({
            classComponents: newClassComponents
        });
    }
    render() {
        return <div className="app">
            <div className="app__children">
                <div className="child-container child-container--class">
                    <input type="text" onChange={this.onClassComponentNameInputChanged} />
                    <ClassComponent name={this.state.classComponentName} />
                </div>
                <div className="child-container child-container--functional">
                    <input type="text" onChange={this.onFunctionalComponentNameInput} />
                    <FunctionalComponent name={this.state.functionalComponentName} />
                </div>
                {this.state.classComponents && this.state.classComponents.length
                    && this.state.classComponents.map((classComp, idx) =>
                        <div className="child-container child-container--additional"
                            key={classComp.id}>
                            <input type="text"
                                onChange={(evt) => this.onAdditionalClassComponentChange(evt, idx)} />
                            <ClassComponent name={classComp.classComponentName} />
                        </div>)
                }

            </div>
            <button onClick={this.onRenderMoreClicked}>Click to add more component</button>
        </div>;
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'));