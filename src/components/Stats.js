export function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start adding some items to your list</em>
      </p>
    );

  const packedItems = items.filter((item) => item.packed).length;
  const itemsLength = items.length;
  const packedPercentage =
    itemsLength !== 0 ? Math.round((packedItems / itemsLength) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything! Ready to go "
          : `You have ${itemsLength} items in your list, and you already packed ${packedItems} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
