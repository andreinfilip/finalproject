import { Link } from "react-router-dom";
import products from "../Products/products.json";

function Categories() {
  return (
    <div>
      <h1>Categories</h1>
      <div className="row">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4"
          >
            <Link className="card" to={`/products/${product.id}`}>
              <div className="card-img-top-category">
                <img src={product.images[0]} alt="product" />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.type}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
