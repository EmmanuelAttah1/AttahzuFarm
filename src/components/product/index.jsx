import './index.css';



function Product(props) {
    const {name,image} = props
  return (
    <div className='product'>
        <div className='product-image'>
          <img src={image} alt="product"/>
        </div>
        <div className='product-name'>{name}</div>
    </div>
  );
}

export default Product;
