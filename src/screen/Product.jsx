import "../App.css"
import { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { StateContext } from "../state";



const Product = () => {
  const { products } = useContext(StateContext)

  return (
    <div>
      <Header />
      <div className="flex">
        {products.map(product => (
          <div key={product.id} style={{ width: '50%' }}>
            <div className='product-item'>
              <Link to={`/user/${product.category}`}>
                <img src={product.url} className='image' alt={product.name} />
              </Link>
              <p className="name">{product.name} | {product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product;

