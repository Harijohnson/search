import React, { useState } from 'react';
import initialData from '../data';

function HomeScreen() {
  const [data, setData] = useState(initialData);
  const [name, setName] = useState('Enter Name');
  const [category, setCategory] = useState('Sample Category');

  const searchHandler = () => {
    const filteredData = initialData.filter(item => item.name === name.toLocaleLowerCase() || item.category === category.toLocaleLowerCase());
    setData(filteredData);
  };

  return (
    <main>
      <form>
        <label>Enter Name</label>
        <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Enter Category</label>
        <input type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <br />
        <button type="button" onClick={searchHandler}>Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default HomeScreen;
  