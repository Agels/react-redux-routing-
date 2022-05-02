import {Container} from 'react-bootstrap';
import {Table as Tables } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import {useEffect, useState} from 'react';
const Products= () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(results=> {
                setProducts(results)
                setLoading(false)
            });
    },[]);
return (
    <Container className='mt-4'>
          <h3>
    Products List &nbsp;<i className='fa-solid fa-bag-shopping'></i>
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
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="6" className="text-center">
                <Spinner animation="border" />
              </td>
            </tr>
          ) : (
           products.map((item, i) => {

              return (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td><img src={item.image} alt="products"  width={50} className='rounded'></img></td>
                  <td>$ {item.price}</td>
                  <td>{item.rating.count}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </Tables>
    </Container>
)
}

export default Products;