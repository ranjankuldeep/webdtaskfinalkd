import { useContext } from "react";
import { productstobelistedcontext } from "../store/context/producttobelisted";
import Card from "./Card";
import Card1 from "./Card1";
import { Typography } from "@material-tailwind/react";
export default function Listproducts() {
  const pctx = useContext(productstobelistedcontext);
  console.log(pctx.productsinctx);
  const mappedaray = pctx.productsinctx.map((item) => (
    <Card1 url={item.images[0]} name={item.title} price={item.price} description={item.description} />
  ));
  return(
      <div className="px-10 pt-10 bg-gray-600 text-center">
    <Typography variant="h1" className="mb-8">Products</Typography>
      <div className="flex flex-wrap mx-auto w-100 justify-between gap-y-8">
      {mappedaray}
      </div>
      </div>
  )
}
