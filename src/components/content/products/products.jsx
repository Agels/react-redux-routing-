import { Container } from "react-bootstrap";
import { Table as Tables } from "react-bootstrap";
import { Spinner, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productloading, productList} from '../../../Redux/Action/productAction';
import { Link } from "react-router-dom";
const Products = () => {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productloading())
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((results) => {
      dispatch(productList(results));
      });
  }, []);
  return (
    
    <Container className="mt-4">
      <h3>
        Products List &nbsp;<i className="fa-solid fa-bag-shopping"></i>
      </h3>
      <Tables responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Products</th>
            <th>Category</th>
            <th>Image</th>
            <th>Price</th>
            <th>Stock</th>
            <th>actions</th>
          </tr>
        </thead>
        {/* {console.log(products)} */}
        <tbody>
          {products.loading ? (
            <tr>
              <td colSpan="7" className="text-center">
                <Spinner animation="border" />
              </td>
            </tr>
          ) : (
            products.product.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>
                    <img
                      src={item.image}
                      alt="products"
                      width={50}
                      className="rounded"
                    ></img>
                  </td>
                  <td>$ {item.price}</td>
                  <td>{item.rating.count}</td>
                  <td>
                    <Link
                      to={`editProducts/${item.id}`}

                      // style={{ textDecoration: "none", color: "black" }}
                    >
                      <Button variant="outline-primary" id={item.id}>
                        Edit
                      </Button>{" "}
                    </Link>
                    <Link to={`detailProducts/${item.id}`}>
                      <Button variant="outline-secondary">Detail</Button>
                    </Link>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </Tables>
    </Container>
  );
};

export default Products;
