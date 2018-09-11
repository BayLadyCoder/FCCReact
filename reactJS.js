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




//Override Default Props
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


