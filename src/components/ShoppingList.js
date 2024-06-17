import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleChange (e) {
    setSelectedCategory(function(selectedCategory) {
      selectedCategory = e.target.value
      return selectedCategory
    })
  }

  let filteredArray = items.filter(function(item) {
      return item.category === selectedCategory
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory === "All" ? 
          items.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          )) : 
          filteredArray.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))
        }
      </ul>
    </div>
  );
}

export default ShoppingList;

