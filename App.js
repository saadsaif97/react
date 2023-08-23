import React from "react"
import ReactDOM from "react-dom/client"

const root = document.getElementById("root");

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

const reactDOMRoot = ReactDOM.createRoot(root);
reactDOMRoot.render(parent);
