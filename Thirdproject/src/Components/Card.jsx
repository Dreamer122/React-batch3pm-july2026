
export const Card = ({product}) => {
    const {id,images,price,title,category}=product
  return (
    <>
    <div className="product-card">

  {/* <!-- Badge for discounts or stock status --> */}
  <span className="product-badge">New</span>
  
  {/* <!-- Image container to prevent layout shifts --> */}
  <div className="product-image-box">
    <img src={images[0]} alt={title} className="product-image"/>
  </div>
  
  {/* <!-- Content section holding product specifications --> */}
  <div className="product-details">
    <span className="product-category">{category.name}</span>
    <h3 className="product-title">{title}</h3>
    
    {/* <!-- Star Rating Indicator --> */}
    <div className="product-rating">
      <span className="stars">★★★★★</span>
      <span className="rating-count">(42)</span>
    </div>
    
    {/* <!-- Pricing and Action Area --> */}
    <div className="product-footer">
      <div className="price-container">
        <span className="current-price">${price}</span>
        <span className="original-price">$159.99</span>
      </div>
      <button className="add-to-cart-btn" aria-label="Add Nike Air Max Speed to cart">
        Add to Cart
      </button>
    </div>
  </div>
</div>

    </>
  )
}
