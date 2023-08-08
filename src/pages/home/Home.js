import { useCallback, useEffect, useState } from "react";
import "./Home.css";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productAction";
import Pagination from "./pagination";
import { addToCart } from "../../redux/actions/cartActions";
import Cart from "../cart/Cart";


const Home = () => {

  const onCottonText6Click = useCallback(() => {
  
    console.log("Cotton text clicked!");
  }, []);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const itemsPerPage = 6; // Number of items to show per page
  const products = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems,"cartItem")
  const colors = useSelector((state) => state.colors);
  const materials = useSelector((state) => state.materials);
console.log(filteredProducts,"filterproduct")
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalProducts);

  // Get the products to show for the current page
  const productsToShow = products.slice(startIndex, endIndex);
  const onFilterChange = (color_id, material_id) => {
    const filteredItems = products.filter(item => {
      const colorMatch = color_id === 'All' || item.colorId === color_id;
      console.log(colorMatch,"math")
      const materialMatch = material_id === 'All' || item.materialId === material_id;
      return colorMatch && materialMatch;
    });
  
    setFilteredProducts(filteredItems);
  };
const handleCart = (item)=>{
  dispatch(addToCart(item));
}
  console.log(filteredProducts,"productshow")
  return (
    <div className="home">
      <div className="footer">
        <div className="footer-child" />
        <div className="home-all-products-container">
          <p className="all-product">Home</p>
          <p className="all-product">All Products</p>
          <p className="all-product">Featured Products</p>
          <p className="all-product">Contact</p>
          <p className="all-product">About Us</p>
        </div>
        <div className="rightfitcom">
          <span className="right">RIGHT</span>
          <span className="fitcom">
            <span className="fit">FIT</span>
            <span className="right">.COM</span>
          </span>
        </div>
        <img className="image-1-icon" alt="" src="/image-1@2x.png" />
        <div className="we-are-a">
          We are a registered E-Commerce seller and we support a variety of
          Local and International payment modes
        </div>
        <div className="website-protected-by-parent">
          <div className="website-protected-by">Website protected by</div>
          <img className="image-2-icon" alt="" src="/image-2@2x.png" />
        </div>
      </div>
      <div className="products">
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      
        <div className="products1">
          {productsToShow.map((item) => {
            return (
              <div className="product-listing" key={item.id}>
        <div className="image">
          <div className="image1">
            <div className="rectangle-parent">
              <div className="frame-child" />
              <img className="new-project-30-1" alt="" src={item.image} />
              <div className="add-to-cart-text" onClick={()=>handleCart(item)}>Add to Cart</div>
            </div>
          </div>
        </div>
                <div className="content">
                  <div className="white-casual-t-shirts-parent">
                    <div className="white-casual-t-shirts">{item.name}</div>
                    <div className="black-parent">
                      <b className="black">
                        {colors.find((c) => c.id === item.colorId)
                          ? colors.find((c) => c.id === item.colorId).name
                          : "BLACK"}
                      </b>

                      <div className="black">
                        {materials.find((c) => c.id === item.materialId)
                          ? materials.find((c) => c.id === item.materialId).name
                          : "COTTON"}
                      </div>
                    </div>
                  </div>
                  <div className="inr-219900-wrapper">
                    <div className="inr-219900">INR {item.price}</div>
                  </div>
                </div>
              </div>
            );
          })}

        
        </div>
       
        <SideBar onFilterChange={onFilterChange} />
      </div>
      <div className="masthead">
        <img
          className="muscular-model-man-in-khaki-t-icon"
          alt=""
          src="/muscularmodelmaninkhakitshirtonbackground20220606213214utc-1@2x.png"
        />
        <div className="masthead-child" />
        <b className="browse-all-styles">BROWSE ALL STYLES</b>
        <div className="masthead-item" />
        <div className="latest-styles">Latest Styles</div>
        <div className="at-yesterdays-prices">At Yesterday’s Prices</div>
      </div>
      
      <Cart/>
      <div className="header">
        <div className="rightfitcom1">
          <span className="right">RIGHT</span>
          <span className="fitcom">
            <span className="fit">FIT</span>
            <span className="right">.COM</span>
          </span>
        </div>
        <b className="b1">{cartItems.length}</b>
        <b className="all-products1">All Products</b>
        <div className="featured-products1">Featured Products</div>
        <img
          className="mdicart-outline-icon"
          alt=""
          src="/mdicartoutline.svg"
        />
      </div>
    </div>
  );
};

export default Home;
