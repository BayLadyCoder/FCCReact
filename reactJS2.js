// Pass a Callback as Props (Pass a method from a Parent component to children component as a prop)
/*
You can pass state as props to child components, but you're not limited to passing data. You can also pass handler functions or any method that's defined on a React component to a child component. This is how you allow child components to interact with their parent components. You pass methods to a child just like a regular prop. It's assigned a name and you have access to that method name under this.props in the child component.


There are three components outlined in the code editor. The MyApp component is the parent that will render the GetInput and RenderInput child components. Add the GetInput component to the render method in MyApp, then pass it a prop called input assigned to inputValue from MyApp's state. Also create a prop called handleChange and pass the input handler handleChange to it.

Next, add RenderInput to the render method in MyApp, then create a prop called input and pass the inputValue from state to it. Once you are finished you will be able to type in the input field in the GetInput component, which then calls the handler method in its parent via props. This updates the input in the state of the parent, which is passed as props to both children. Observe how the data flows between the components and how the single source of truth remains the state of the parent component. Admittedly, this example is a bit contrived, but should serve to illustrate how data and callbacks can be passed between React components.
*/

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }
    render() {
        return (
            <div>
                { /* change code below this line */}
                <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
                <RenderInput input={this.state.inputValue} />
                { /* change code above this line */}
            </div>
        );
    }
};

class GetInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Get Input:</h3>
                <input
                    value={this.props.input}
                    onChange={this.props.handleChange} />
            </div>
        );
    }
};

class RenderInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Input Render:</h3>
                <p>{this.props.input}</p>
            </div>
        );
    }
};




// Use the Lifecycle Method componentWillMount
/*
React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. These are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time. This can be before they are rendered, before they update, before they receive props, before they unmount, and so on. Here is a list of some of the main lifecycle methods:

componentWillMount()

componentDidMount()

componentWillReceiveProps()

shouldComponentUpdate()

componentWillUpdate()

componentDidUpdate()

componentWillUnmount()

The next several lessons will cover some of the basic use cases for these lifecycle methods.


The componentWillMount() method is called before the render() method when a component is being mounted to the DOM. Log something to the console within componentWillMount() - you may want to have your browser console open to see the output.
*/
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        // change code below this line
        console.log("componentWillMount")
        // change code above this line
    }
    render() {
        return <div />
    }
};








// Use the Lifecycle Method componentDidMount
/*
Most web developers, at some point, need to call an API endpoint to retrieve data. If you're working with React, it's important to know where to perform this action.

The best practice with React is to place API calls or any calls to your server in the lifecycle method componentDidMount(). This method is called after a component is mounted to the DOM. Any calls to setState() here will trigger a re-rendering of your component. When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.


There is a mock API call in componentDidMount(). It sets state after 2.5 seconds to simulate calling a server to retrieve data. This example requests the current total active users for a site. In the render method, render the value of activeUsers in the h1. Watch what happens in the preview, and feel free to change the timeout to see the different effects.
*/
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUsers: null
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                activeUsers: 1273
            });
        }, 2500);
    }
    render() {
        return (
            <div>
                <h1>Active Users: {this.state.activeUsers}</h1>
            </div>
        );
    }
};