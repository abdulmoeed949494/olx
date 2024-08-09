import "../App.css"
import { useState } from "react";
// import { StateContext } from "../components/state";
import { Link } from "react-router-dom";
import { ProductData } from "../common/productsData";


const Product = () => {
  const [products, setProducts] = useState(ProductData);
  // const addToCart = (product) => {
  //   const existingItem = cart.find(item => item.id === product.id);

  //   if (existingItem) {
  //     const updatedCart = cart.map(item =>
  //       item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  //     );
  //     setCart(updatedCart);
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }
  // }

  // const increaseQuantity = (id) => {
  //   const updatedCart = cart.map(item =>
  //     item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //   );
  //   setCart(updatedCart);
  // }

  // const decreaseQuantity = (id) => {
  //   const p = cart.find(i => i.id === id);
  //   if (p.quantity === 1) {

  //     const updatedCart = cart.filter((item) => item.id != id);
  //     setCart(updatedCart);
  //   } else {
  //     const updatedCart = cart.map((item) =>
  //       item.id === id ? { ...item, quantity: item.quantity - 1 } : item
  //     );
  //     setCart(updatedCart);
  //   }
  // }
  
  // const [searchFilter, setSearchFilter] = useState("");

  // useEffect(() => {
  //   if (searchFilter != "") {
  //     setProducts(products.filter((product) => product.category.toLowerCase().includes(searchFilter.toLowerCase())));
  //   } else {
  //     setProducts(ProductData);
  //   }
  // }, [searchFilter]);

  // useEffect(() => {
  //   window.localStorage.setItem("local", JSON.stringify(cart))
  // }, [cart])

  return (
    <div>
      <div className="bg-blue-500 flex justify-between items-center pr-10 pl-10 text-white h-16">
        <input className="text-black h-10 rounded-md w-[800px]" type="text" onChange={(e) => setSearchFilter(e.target.value)} placeholder="Search" />
        <Link to={"/"}>Login</Link>
        {/* <Link to={"/cart"}>Cart
          <sub>{cart.length}</sub>
        </Link>
        <Link to={"/wishlist"}>Favorite
          <sub>{wishlist.length}</sub>
        </Link>
        <button>{email.length === 0 && password.length === 0 ? <Link to={"/login"}>Login</Link> : <Link to={"/logout"}>Logout</Link>}</button> */}
      </div>
      <div className="flex">
        {products.map(product => (
          <div key={product.id} style={{ width: '50%' }}>
            <div className='product-item'>
              <Link to={`/user/${product.category}`}>
                <img onClick={() => UserPageOpen(product)} src={product.url} className='image' alt={product.name} />
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

