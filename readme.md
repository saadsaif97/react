# React practice

react and react dom with CDN

### parcel
- dev build
- Local server
- HMR - Hot module replacement
- file watch algorithm written in C++
- Caching for faster builds
- Image optimization
- Minification
- Bundling
- Compression
- Consistent Hashing
- Code splitting
- Differential bundling - support on older browsers
- HTTPs
- Diagnostic
- Error handling
- Tree shaking
- Dev vs prod build

## Browser list
- last 2 chrome versions
- last 3 version - all browsers
- cover 99% of users in US

## JSX

```JavaScript
function Title({number}) {
  return <h3>This is title number: {number}</h3>
}

const Heading = () => {
  const css = "some css class"
  return (
    <div key={"heading"}>
      <h1 key={"3"} className={css}>Function Heading</h1>
      {[1,2,3,4].map(n => <Title key={n} number={n} />)}
      {Title({number:1000})}
    </div>
  )
}
const jsxHeading = <h1 key={"2"}>Jsx heading</h1>
const h1 = React.createElement("h1", {key:"1"}, "H1");
const h2 = React.createElement("h1", {key:"2"}, "H2");
const child = React.createElement("div", { id: "child" }, [h1, jsxHeading, Heading()]);
const parent = React.createElement("div", { id: "parent" }, child);

console.log({jsxHeading, h1})

const reactDOMRoot = ReactDOM.createRoot(document.getElementById("root"));
reactDOMRoot.render(parent);

```

Sure, here's a summarized and more readable version of the process:

Creating React Elements and Rendering with JSX:

- React Element: It's a fundamental part of React that represents a virtual version of a UI component.

- JSX: JSX is a syntax extension for JavaScript that lets you write HTML-like code within your JavaScript files. It makes the code more readable and closely resembles the actual UI structure.

- React.createElement(): It's a function in React that creates a React Element. It takes three arguments: the type of element (like a HTML tag or a custom component), optional properties (props), and children elements.

- JSX to React Element: You can write JSX code that looks like HTML elements representing your UI components.

- Babel Transpilation: JSX code is not directly understood by browsers. Babel, a JavaScript compiler, transpiles JSX into equivalent React.createElement() calls.

- React.createComponent(): This is not an actual function. The correct one is React.createElement(). It's used to build the virtual component tree representing your UI.

- ReactDOM.render(): It's a React method provided by ReactDOM, used to render the virtual component tree onto the actual DOM, making it visible as a part of your web page.
