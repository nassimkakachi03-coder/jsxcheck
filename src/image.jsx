import product from "./product";

function image() {
  return (
    <img src={product.image} alt={product.name} style={{ width: "200px" }} />
  );
}

export default image;
