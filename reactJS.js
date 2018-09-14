// Create a Simple JSX Element
const JSX = <h1>Hello JSX!</h1>


// Create a Complex JSX Element
const JSX = (
    <div>
        <h1>Header</h1>
        <p>Paragraph</p>
        <ul>
            <li>list 1</li>
            <li>list 2</li>
            <li>list 3</li>
        </ul>>
</div>);

// Add Comments in JSX
const JSX = (
    <div>
        {/*Comment in JSX*/}
        <h1>This is a block of JSX</h1>
        <p>Here's a subtitle</p>
    </div>
);



// Render HTML Elements to the DOM
const JSX = (
    <div>
        <h1>Hello World</h1>
        <p>Lets render this to the DOM</p>
    </div>
);
// change code below this line

ReactDOM.render(JSX, document.getElementById('challenge-node'));



// Define an HTML Class in JSX
const JSX = (
    <div className="myDiv">
        <h1>Add a class to this div</h1>
    </div>
);


// Learn About Self-Closing JSX Tags
const JSX = (
    <div>
        <h2>Welcome to React!</h2> <br />
        <p>Be sure to close all tags!</p>
        <hr />
    </div>
);





// Create a Stateless Functional Component
/*
Components are the core of React. Everything in React is a component and here you will learn how to create one.

There are two ways to create a React component. The first way is to use a JavaScript function. Defining a component in this way creates a stateless functional component. The concept of state in an application will be covered in later challenges. For now, think of a stateless component as one that can receive data and render it, but does not manage or track changes to that data. (We'll cover the second way to create a React component in the next challenge.)

To create a component with a function, you simply write a JavaScript function that returns either JSX or null. One important thing to note is that React requires your function name to begin with a capital letter. Here's an example of a stateless functional component that assigns an HTML class in JSX:

// After being transpiled, the <div> will have a CSS class of 'customClass'
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
Because a JSX component represents HTML, you could put several components together to create a more complex HTML page. This is one of the key advantages of the component architecture React provides. It allows you to compose your UI from many separate, isolated components. This makes it easier to build and maintain complex user interfaces.


The code editor has a function called MyComponent. Complete this function so it returns a single div element which contains some string of text.

Note: The text is considered a child of the div element, so you will not be able to use a self-closing tag.
*/

const MyComponent = function () {
    // change code below this line
    return (
        <div>Text</div>
    );
    // change code above this line
}


// Create a React Component usign ES6 class Syntax
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // change code below this line
        return (
            <div>
                <h1>Hello React!</h1>
            </div>
        );
        // change code above this line
    }
};




// Create a Component with Composition
/*
Now we will look at how we can compose multiple React components together. Imagine you are building an App and have created three components, a Navbar, Dashboard, and Footer.

To compose these components together, you could create an App parent component which renders each of these three components as children. To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX. For example, in the render method you could write:

return (
<App>
  <Navbar />
  <Dashboard />
  <Footer />
</App>
)
When React encounters a custom HTML tag that references another component (a component name wrapped in < /> like in this example), it renders the markup for that component in the location of the tag. This should illustrate the parent/child relationship between the App component and the Navbar, Dashboard, and Footer.


In the code editor, there is a simple functional component called ChildComponent and a React component called ParentComponent. Compose the two together by rendering the ChildComponent within the ParentComponent. Make sure to close the ChildComponent tag with a forward slash.

Note: ChildComponent is defined with an ES6 arrow function because this is a very common practice when using React. However, know that this is just a function. If you aren't familiar with the arrow function syntax, please refer to the JavaScript section.
*/

const ChildComponent = () => {
    return (
        <div>
            <p>I am the child</p>
        </div>
    );
};

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>I am the parent</h1>
                { /* change code below this line */}
                <ChildComponent />
                { /* change code above this line */}
            </div>
        );
    }
};


// Use React to Render Nested Components
const TypesOfFruit = () => {
    return (
        <div>
            <h2>Fruits:</h2>
            <ul>
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul>
        </div>
    );
};

const Fruits = () => {
    return (
        <div>
            { /* change code below this line */}
            <TypesOfFruit />
            { /* change code above this line */}
        </div>
    );
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                { /* change code below this line */}
                <Fruits />
                { /* change code above this line */}
            </div>
        );
    }
};








// Compose React Components (Nested and Nested Components)
class Fruits extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Fruits:</h2>
                { /* change code below this line */}
                <NonCitrus />
                <Citrus />
                { /* change code above this line */}
            </div>
        );
    }
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                { /* change code below this line */}
                <Fruits />
                { /* change code above this line */}
                <Vegetables />
            </div>
        );
    }
};




// Render a Class Component to the DOM
class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                {/* change code below this line */}
                <Fruits />
                <Vegetables />
                {/* change code above this line */}
            </div>
        );
    }
};

// change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));





// Write a React Component from Scratch
class MyComponent extends React.Component {

    render() {
        return (
            <div>
                <h1>My First React Component!</h1>
            </div>
        );
    }
};

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));









// Pass Props to a Stateless Functional Component
const CurrentDate = (props) => {
    return (
        <div>
            { /* change code below this line */}
            <p>The current date is: {props.date}</p>
            { /* change code above this line */}
        </div>
    );
};

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>What date is it?</h3>
                { /* change code below this line */}
                <CurrentDate date={Date()} />
                { /* change code above this line */}
            </div>
        );
    }
};



// Pass an Array as Props
/*
The last challenge demonstrated how to pass information from a parent component to a child component as props or properties. This challenge looks at how arrays can be passed as props. To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.

<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
The child component then has access to the array property colors. Array methods such as join() can be used when accessing the property.

const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>

This will join all colors array items into a comma separated string and produce:

<p>green, blue, red</p>

Later, we will learn about other common methods to render arrays of data in React.


There are List and ToDo components in the code editor. When rendering each List from the ToDo component, pass in a tasks property assigned to an array of to-do tasks, for example ["walk dog", "workout"]. Then access this tasks array in the List component, showing its value within the p element. Use join(", ") to display the props.tasksarray in the p element as a comma separated list. Today's list should have at least 2 tasks and tomorrow's should have at least 3 tasks.
 */

const List = (props) => {
    { /* change code below this line */ }
    return <p>{props.tasks.join(", ")}</p>
    { /* change code above this line */ }
};

class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>To Do Lists</h1>
                <h2>Today</h2>
                { /* change code below this line */}
                <List tasks={["shopping", "watch a movie", "clean house"]} />
                <h2>Tomorrow</h2>
                <List tasks={["feed cats", "buy groceries", "go to school"]} />
                { /* change code above this line */}
            </div>
        );
    }
};




// Use Default Props
/*
React also has an option to set default props. You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary. This allows you to specify what a prop value should be if no value is explicitly provided. For example, if you declare MyComponent.defaultProps = { location: 'San Francisco' }, you have defined a location prop that's set to the string San Francisco, unless you specify otherwise. React assigns default props if props are undefined, but if you pass null as the value for a prop, it will remain null.


The code editor shows a ShoppingCart component. Define default props on this component which specify a prop items with a value of 0.
*/

const ShoppingCart = (props) => {
    return (
        <div>
            <h1>Shopping Cart Component</h1>
        </div>
    )
};
// change code below this line
ShoppingCart.defaultProps = { items: 0 };




// Override Default Props
/*
The ability to set default props is a useful feature in React. The way to override the default props is to explicitly set the prop values for a component.


The ShoppingCart component now renders a child component Items. This Items component has a default prop quantity set to the integer 0. Override the default prop by passing in a value of 10 for quantity.

Note: Remember that the syntax to add a prop to a component looks similar to how you add HTML attributes. However, since the value for quantity is an integer, it won't go in quotes but it should be wrapped in curly braces. For example, {100}. This syntax tells JSX to interpret the value within the braces directly as JavaScript.
*/
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
    quantity: 0
}

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        { /* change code below this line */ }
        return <Items quantity={10} />
        { /* change code above this line */ }
    }
};




// Use PropTypes to Define the Props You Expect
/*
React provides useful type-checking features to verify that components receive props of the correct type. For example, your application makes an API call to retrieve data that you expect to be in an array, which is then passed to a component as a prop. You can set propTypes on your component to require the data to be of type array. This will throw a useful warning when the data is of any other type.

It's considered a best practice to set propTypes when you know the type of a prop ahead of time. You can define a propTypes property for a component in the same way you defined defaultProps. Doing this will check that props of a given key are present with a given type. Here's an example to require the type function for a prop called handleClick:

MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }

In the example above, the PropTypes.func part checks that handleClick is a function. Adding isRequired tells React that handleClick is a required property for that component. You will see a warning if that prop isn't provided. Also notice that func represents function. Among the seven JavaScript primitive types, function and boolean (written as bool) are the only two that use unusual spelling. In addition to the primitive types, there are other types available. For example, you can check that a prop is a React element. Please refer to the documentation for all of the options.

Note: As of React v15.5.0, PropTypes is imported independently from React, like this:

import React, { PropTypes } from 'react';


Define propTypes for the Items component to require quantity as a prop and verify that it is of type number.
*/

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// change code below this line
Items.propTypes = { quantity: PropTypes.number.isRequired };
// change code above this line

Items.defaultProps = {
    quantity: 0
};

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Items />
    }
};




// Access Props Using this.props in ES6 Class Component
/*
The last several challenges covered the basic ways to pass props to child components. But what if the child component that you're passing a prop to is an ES6 class component, rather than a stateless functional component? The ES6 class component uses a slightly different convention to access props.

Anytime you refer to a class component within itself, you use the this keyword. To access props within a class component, you preface the code that you use to access it with this. For example, if an ES6 class component has a prop called data, you write {this.props.data} in JSX.


Render an instance of the ReturnTempPassword component in the parent component ResetPassword. Here, give ReturnTempPassword a prop of tempPassword and assign it a value of a string that is at least 8 characters long. Within the child, ReturnTempPassword, access the tempPassword prop within the strong tags to make sure the user sees the temporary password.
*/
class ReturnTempPassword extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                { /* change code below this line */}
                <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
                { /* change code above this line */}
            </div>
        );
    }
};

class ResetPassword extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <h2>Reset Password</h2>
                <h3>We've generated a new temporary password for you.</h3>
                <h3>Please reset this password from your account settings ASAP.</h3>
                { /* change code below this line */}
                <ReturnTempPassword tempPassword={"a2a4a6a8a10"} />
                { /* change code above this line */}
            </div>
        );
    }
};



// Review Using Props with Stateless Functional Components
/*
The code editor has a CampSite component that renders a Camper component as a child. Define the Camper component and assign it default props of { name: 'CamperBot' }. Inside the Camper component, render any code that you want, but make sure to have one p element that includes only the name value that is passed in as a prop. Finally, define propTypes on the Camper component to require name to be provided as a prop and verify that it is of type string.
*/
class CampSite extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Camper />
            </div>
        );
    }
};
// change code below this line
const Camper = (props) => {
    return <p>{props.name}</p>

};

Camper.propTypes = { name: PropTypes.string.isRequired };
Camper.defaultProps = {
    name: 'CamperBot'
};








// Create a Stateful Component
/*
One of the most important topics in React is state. State consists of any data your application needs to know about, that can change over time. You want your apps to respond to state changes and present an updated UI when necessary. React offers a nice solution for the state management of modern web applications.

You create state in a React component by declaring a state property on the component class in its constructor. This initializes the component with state when it is created. The state property must be set to a JavaScript object. Declaring it looks like this:

this.state = {
  // describe your state here
}
You have access to the state object throughout the life of your component. You can update it, render it in your UI, and pass it as props to child components. The state object can be as complex or as simple as you need it to be. Note that you must create a class component by extending React.Component in order to create state like this.


There is a component in the code editor that is trying to render a name property from its state. However, there is no state defined. Initialize the component with state in the constructor and assign your name to a property of name.
*/
class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);
        // initialize state here
        this.state = {
            name: 'My Name'
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
};




// Render State in the User Interface
/*
Once you define a component's initial state, you can display any part of it in the UI that is rendered. If a component is stateful, it will always have access to the data in state in its render() method. You can access the data with this.state.

If you want to access a state value within the return of the render method, you have to enclose the value in curly braces.

State is one of the most powerful features of components in React. It allows you to track important data in your app and render a UI in response to changes in this data. If your data changes, your UI will change. React uses what is called a virtual DOM, to keep track of changes behind the scenes. When state data updates, it triggers a re-render of the components using that data - including child components that received the data as a prop. React updates the actual DOM, but only where necessary. This means you don't have to worry about changing the DOM. You simply declare what the UI should look like.

Note that if you make a component stateful, no other components are aware of its state. Its state is completely encapsulated, or local to that component, unless you pass state data to a child component as props. This notion of encapsulated state is very important because it allows you to write certain logic, then have that logic contained and isolated in one place in your code.


In the code editor, MyComponent is already stateful. Define an h1 tag in the component's render method which renders the value of name from the component's state.

Note: The h1 should only render the value from state and nothing else. In JSX, any code you write with curly braces { } will be treated as JavaScript. So to access the value from state just enclose the reference in curly braces.
*/
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'freeCodeCamp'
        }
    }
    render() {
        return (
            <div>
                { /* change code below this line */}
                <h1>{this.state.name}</h1>
                { /* change code above this line */}
            </div>
        );
    }
};






// Render State in the User Interface Another Way
/*
There is another way to access state in a component. In the render() method, before the return statement, you can write JavaScript directly. For example, you could declare functions, access data from state or props, perform computations on this data, and so on. Then, you can assign any data to variables, which you have access to in the return statement.


In the MyComponent render method, define a const called name and set it equal to the name value in the component's state. Because you can write JavaScript directly in this part of the code, you don't have to enclose this reference in curly braces.

Next, in the return statement, render this value in an h1 tag using the variable name. Remember, you need to use the JSX syntax (curly braces for JavaScript) in the return statement.
*/

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'freeCodeCamp'
        }
    }
    render() {
        // change code below this line

        const name = this.state.name;

        // change code above this line
        return (
            <div>
                { /* change code below this line */}
                <h1>{name}</h1>
                { /* change code above this line */}
            </div>
        );
    }
};






// Set State with this.setState
/*
The previous challenges covered component state and how to initialize state in the constructor. There is also a way to change the component's state. React provides a method for updating component state called setState. You call the setState method within your component class like so: this.setState(), passing in an object with key-value pairs. The keys are your state properties and the values are the updated state data. For instance, if we were storing a username in state and wanted to update it, it would look like this:

this.setState({
  username: 'Lewis'
});
React expects you to never modify state directly, instead always use this.setState() when state changes occur. Also, you should note that React may batch multiple state updates in order to improve performance. What this means is that state updates through the setState method can be asynchronous. There is an alternative syntax for the setState method which provides a way around this problem. This is rarely needed but it's good to keep it in mind! Please consult the React documentation for further details.


There is a button element in the code editor which has an onClick() handler. This handler is triggered when the button receives a click event in the browser, and runs the handleClick method defined on MyComponent. Within the handleClick method, update the component state using this.setState(). Set the name property in state to equal the string React Rocks!.

Click the button and watch the rendered state update. Don't worry if you don't fully understand how the click handler code works at this point. It's covered in upcoming challenges.
*/
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Initial State'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // change code below this line
        this.setState({
            name: 'React Rocks!'
        });
        // change code above this line
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
};




// Bind 'this' to a Class Method
/*
In addition to setting and updating state, you can also define methods for your component class. A class method typically needs to use the this keyword so it can access properties on the class (such as state and props) inside the scope of the method. There are a few ways to allow your class methods to access this.

One common way is to explicitly bind this in the constructor so this becomes bound to the class methods when the component is initialized. You may have noticed the last challenge used this.handleClick = this.handleClick.bind(this) for its handleClick method in the constructor. Then, when you call a function like this.setState() within your class method, this refers to the class and will not be undefined.

Note: The this keyword is one of the most confusing aspects of JavaScript but it plays an important role in React. Although its behavior here is totally normal, these lessons aren't the place for an in-depth review of this so please refer to other lessons if the above is confusing!


The code editor has a component with a state that keeps track of an item count. It also has a method which allows you to increment this item count. However, the method doesn't work because it's using the this keyword that is undefined. Fix it by explicitly binding this to the addItem() method in the component's constructor.

Next, add a click handler to the button element in the render method. It should trigger the addItem() method when the button receives a click event. Remember that the method you pass to the onClick handler needs curly braces because it should be interpreted directly as JavaScript.

Once you complete the above steps you should be able to click the button and see the item count increment in the HTML.
*/

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemCount: 0
        };
        // change code below this line
        this.addItem = this.addItem.bind(this);
        // change code above this line
    }
    addItem() {
        this.setState({
            itemCount: this.state.itemCount + 1
        });
    }
    render() {
        return (
            <div>
                { /* change code below this line */}
                <button onClick={this.addItem}>Click Me</button>
                { /* change code above this line */}
                <h1>Current Item Count: {this.state.itemCount}</h1>
            </div>
        );
    }
};









// Use State to Toggle an Element
/*
You can use state in React applications in more complex ways than what you've seen so far. One example is to monitor the status of a value, then render the UI conditionally based on this value. There are several different ways to accomplish this, and the code editor shows one method.


MyComponent has a visibility property which is initialized to false. The render method returns one view if the value of visibility is true, and a different view if it is false.

Currently, there is no way of updating the visibility property in the component's state. The value should toggle back and forth between true and false. There is a click handler on the button which triggers a class method called toggleVisibility(). Define this method so the state of visibility toggles to the opposite value when the method is called. If visibility is false, the method sets it to true, and vice versa.

Finally, click the button to see the conditional rendering of the component based on its state.

Hint: Don't forget to bind the this keyword to the method in the constructor!
*/
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        // change code below this line
        this.toggleVisibility = this.toggleVisibility.bind(this);
        // change code above this line
    }
    // change code below this line
    toggleVisibility() {
        if (this.state.visibility) {
            this.setState({
                visibility: false
            });
        }
        else {
            this.setState({
                visibility: true
            });
        }
    }
    // change code above this line
    render() {
        if (this.state.visibility) {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                    <h1>Now you see me!</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                </div>
            );
        }
    }
};







// Write a Simple Counter with Increment() Decrement() and Reset() buttons
/*
You can design a more complex stateful component by combining the concepts covered so far. These include initializing state, writing methods that set state, and assigning click handlers to trigger these methods.


The Counter component keeps track of a count value in state. There are two buttons which call methods increment() and decrement(). Write these methods so the counter value is incremented or decremented by 1 when the appropriate button is clicked. Also, create a reset() method so when the reset button is clicked, the count is set to 0.

Note: Make sure you don't modify the classNames of the buttons. Also, remember to add the necessary bindings for the newly-created methods in the constructor.
*/


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        // change code below this line
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        // change code above this line
    }
    // change code below this line
    increment() {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    };

    reset() {
        this.setState({
            count: 0
        });
    };
    // change code above this line
    render() {
        return (
            <div>
                <button className='inc' onClick={this.increment}>Increment!</button>
                <button className='dec' onClick={this.decrement}>Decrement!</button>
                <button className='reset' onClick={this.reset}>Reset</button>
                <h1>Current Count: {this.state.count}</h1>
            </div>
        );
    }
};










// Create a Controlled Input
/*
Your application may have more complex interactions between state and the rendered UI. For example, form control elements for text input, such as input and textarea, maintain their own state in the DOM as the user types. With React, you can move this mutatable state into a React component's state. The user's input becomes part of the application state, so React controls the value of that input field. Typically, if you have React components with input fields the user can type into, it will be a controlled input form.


The code editor has the skeleton of a component called ControlledInput to create a controlled input element. The component's state is already initialized with an input property that holds an empty string. This value represents the text a user types into the input field.

First, create a method called handleChange() that has a parameter called event. When the method is called, it receives an event object that contains a string of text from the input element. You can access this string with event.target.value inside the method. Update the input property of the component's state with this new string.

In the render method, create the input element above the h4 tag. Add a value attribute which is equal to the input property of the component's state. Then add an onChange() event handler set to the handleChange() method.

When you type in the input box, that text is processed by the handleChange() method, set as the input property in the local state, and rendered as the value in the input box on the page. The component state is the single source of truth regarding the input data.

Last but not least, don't forget to add the necessary bindings in the constructor.
*/
class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        // change code below this line
        this.handleChange = this.handleChange.bind(this);
        // change code above this line
    }
    // change code below this line
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    // change code above this line
    render() {
        return (
            <div>
                { /* change code below this line */}
                <input value={this.state.input} onChange={this.handleChange}></input>
                { /* change code above this line */}
                <h4>Controlled Input:</h4>
                <p>{this.state.input}</p>
            </div>
        );
    }
};









// Create a Controlled Form
/*
The last challenge showed that React can control the internal state for certain elements like input and textarea, which makes them controlled components. This applies to other form elements as well, including the regular HTML form element.


The MyForm component is set up with an empty form with a submit handler. The submit handler will be called when the form is submitted.

We've added a button which submits the form. You can see it has the type set to submit indicating it is the button controlling the form. Add the input element in the form and set its value and onChange() attributes like the last challenge. You should then complete the handleSubmit method so that it sets the component state property submit to the current input value in the local state.

Note:  You also must call event.preventDefault() in the submit handler, to prevent the default form submit behavior which will refresh the web page.

Finally, create an h1 tag after the form which renders the submit value from the component's state. You can then type in the form and click the button (or press enter), and you should see your input rendered to the page.
*/
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    handleSubmit(event) {
        // change code below this line
        event.preventDefault();
        this.setState({
            submit: this.state.input
        });
        // change code above this line
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    { /* change code below this line */}
                    <input value={this.state.input} onChange={this.handleChange}></input>
                    { /* change code above this line */}
                    <button type='submit'>Submit!</button>
                </form>
                { /* change code below this line */}
                <h1>{this.state.submit}</h1>
                { /* change code above this line */}
            </div>
        );
    }
};