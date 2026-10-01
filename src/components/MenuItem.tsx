type MenuItemProps = {
  name: string;
  price: number;
  emoji: string;
  onAdd: () => void;
};

function MenuItem({ name, price, emoji, onAdd }: MenuItemProps) {
  return (
    <div className="menu-item">
      <span className="emoji">{emoji}</span>
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button onClick={onAdd}>Add</button>
    </div>
  );
}

export default MenuItem;