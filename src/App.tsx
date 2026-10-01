import { useState } from "react";
import MenuItem from "./components/MenuItem";
import { menu } from "./data";
import type { MenuItemData, OrderItem } from "./types";

function App() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  function addToOrder(item: MenuItemData) {
    const newItem: OrderItem = { ...item, orderId: Date.now() };
    setOrder([...order, newItem]);
  }

  function removeFromOrder(orderId: number) {
    setOrder(order.filter((item) => item.orderId !== orderId));
  }

  const total = order.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">
      <h1>☕ Cozy Cafe</h1>
      <p>Welcome! What would you like today?</p>

      <div className="menu">
        {menu.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            emoji={item.emoji}
            onAdd={() => addToOrder(item)}
          />
        ))}
      </div>

      <div className="order">
        <h2>Your Order ({order.length} items)</h2>
        <ul>
          {order.map((item) => (
            <li key={item.orderId}>
              {item.emoji} {item.name}
              <button onClick={() => removeFromOrder(item.orderId)}>❌</button>
            </li>
          ))}
        </ul>
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default App;