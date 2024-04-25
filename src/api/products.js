import axios from "axios";

export const Products = () => {
  useEffect(() => {
    Data();
  });
  const Data = async () => {
    const Value = await axios.get("https://dummyjson.com/products/1");
    console.log(Value.data);
  };
};
