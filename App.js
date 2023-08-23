const root = document.getElementById("root");

const h1 = React.createElement("h1", {key:"1"}, "H1");
const h2 = React.createElement("h1", {key:"2"}, "H2");
const child = React.createElement("div", { id: "child" }, [h1, h2]);
const parent = React.createElement("div", { id: "parent" }, child);

const reactDOMRoot = ReactDOM.createRoot(root);
reactDOMRoot.render(parent);
