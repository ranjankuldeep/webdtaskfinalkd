import { createContext } from "react";
import { useState } from "react";
import data from "../../ProductsData/product_dummy_data";
export const productstobelistedcontext = createContext({
  productsinctx:[],
  search:(text) => {},
});
function Pcontextprovider({ children }) {
  const [products, setproductstobelisted] = useState(data.products);

function search(event) {
console.log(event.target.value);
    setproductstobelisted(function(prevstate){
      

      return (data.products.filter(item=>item.description.toLowerCase().includes(event.target.value.toLowerCase())));
    });
  }

  const value = {
    productsinctx: products,
    search: search,
  };
  return (
    <productstobelistedcontext.Provider value={value}>
      {children}
    </productstobelistedcontext.Provider>
  );
}
export default Pcontextprovider;
