import Layout from "./views/Layout";
import { BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <Layout {...props} />
    </BrowserRouter>
  );
}

export default App;
