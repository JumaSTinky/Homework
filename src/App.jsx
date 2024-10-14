import ShoeItem from "./components/ShoeItem";
import { products } from "./utils/constants";

function App() {
  return (
    <>
      <ShoeItem products={products}  />
    </>
  );
}

export default App;
