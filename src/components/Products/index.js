import './index.css';
import Product from '../product';

import { Information } from '../../Information/data';


function Products(props) {

  return (
    <div id="our-products" ref={props.myRef}>
        <div className="site-heading" style={{ marginBottom: '60px'}}>Our Products</div>
        <div className="all-products">
            {
                Information['products'].map((product,index)=>(
                    <Product image={product.image} name={product.name} caption={product.caption} key={"product_"+index}/>
                ))
            }
        </div>
    </div>
  );
}

export default Products;
