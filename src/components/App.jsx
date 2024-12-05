// src/components/App.jsx

import { Product } from "./Product";
import MessageList from "./components/MessageList";
import { BookList } from "./components/BookList";

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product name="Tacos With Lime" price={10.99} />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
    </div>
  );
}

export const Mailbox = ({ username, messages }) => {
  return (
    <div>
      <p>Hello {username}</p>
      {messages.length > 0 ? (
        <div>
          <p>You have {messages.length} unread messages</p>
          <MessageList messages={messages} />
        </div>
      ) : (
        <p>No unread messages</p>
      )}
    </div>
  );
};
