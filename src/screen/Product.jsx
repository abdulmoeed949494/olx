import "../App.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductData } from "../common/productsData";
import Profile from "./Profile";


const Product = () => {
  const [products, setProducts] = useState(ProductData);

  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  }

  return (
    <div>
      <div className="bg-blue-500 flex justify-between items-center pr-10 pl-10 text-white h-16">
    <Link to={"/login"}>Login</Link>
        <div className="border-2 border-black rounded-full w-14 h-14">
          <button onClick={toggleProfile}>
          <img src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png" alt="" />
          </button>
          {showProfile ? <Profile /> : null}
        </div>
      </div>
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

