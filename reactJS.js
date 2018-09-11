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