import { Table as Tables } from "react-bootstrap";
import { useEffect, useState } from "react";

const Table = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/Users?_start=0&_limit=5")
      .then((res) => res.json())
      .then((result) => setName(result));
  }, []);
  return (
    <Tables responsive="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>email</th>
          <th>phone</th>
        </tr>
      </thead>
      <tbody>
        {/* {console.log(name.length)} */}
        {name.map((item, i) => (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </Tables>
  );
};

export default Table;
