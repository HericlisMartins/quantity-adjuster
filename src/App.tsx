import React from "react";

import ProductCard from "./components/ProductCard";
import productmock from "./productmock.json"; // Make sure to adjust the path based on your project structure

const App: React.FC = () => {
  return (
    <div>
      <ProductCard product={productmock} />
    </div>
  );
};

export default App;
