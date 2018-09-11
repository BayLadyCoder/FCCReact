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