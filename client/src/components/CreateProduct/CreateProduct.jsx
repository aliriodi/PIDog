import React from 'react';
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/actions/index";

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateProduct = () => {
   const dispatch = useDispatch();
   let [myFormProduct, setMyFormProduct] = React.useState({
      name: "",
      price: 0,
      description: "",
      stock: 0,
    });
    let handleChange = (e) => {
      setMyFormProduct({
        ...myFormProduct,
        [e.target.name]: e.target.value,
      });
    };
    let handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createProduct(myFormProduct));
    };
  return (
      <div> 
         <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        value={myFormProduct.name}
        name="name"
      />

<label>Price: </label>
        <input
          type="number"
          onChange={(e) => handleChange(e)}
          value={myFormProduct.price}
          name="price"
        />

<label>Description: </label>
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          onChange={(e) => handleChange(e)}
          value={myFormProduct.description}
        ></textarea>
  <label>Stock: </label>
        <input
          type="number"
          onChange={(e) => handleChange(e)}
          value={myFormProduct.stock}
          name="stock"
        />
         <button type="submit">Create Product</button>
      </form>
      </div>
   );
};

export default CreateProduct;
