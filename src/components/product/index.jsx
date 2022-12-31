import './index.css';



function Product(props) {
    const {name,caption,image} = props
  return (
    <div className='product'>
        <div className='product-image'>
          <img src={image} alt="product"/>
        </div>
        <div className='product-name'>{name}</div>
        {/* <div className='product-discription'>{caption}</div> */}
    </div>
  );
}

export default Product;
