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
    render() {
        return <div className="app">
            <div className="app__children">
                <div className="child-container child-container--class">
                    <input type="text" onChange={this.onClassComponentNameInputChanged}/>
                    <ClassComponent name={this.state.classComponentName} />
                </div>
                <div className="child-container child-container--functional">
                    <input type="text" onChange={this.onFunctionalComponentNameInput}/>
                    <FunctionalComponent name={this.state.functionalComponentName} />
                </div>
            </div>
            <button onClick={this.onRenderMoreClicked}></button>
        </div>;
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'));