import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, setItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "alphabet")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  // Delete Item On Click
  function deleteItem(itemId) {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  }

  // Toggle Item On Click Change Delete
  function handleToggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Clear All Items
  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          // Item
          <Item
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            onToggleItems={handleToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by the input order</option>
          <option value="alphabet">Sort by alphabet</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => handleClearItems()}>Clear List</button>
      </div>
    </div>
  );
}
