import React from "react";
export default function NewsCard({ item }) {
  return (
    <article className="card">
      <div className="thumb"><img src={item.image} alt={item.title} />
        <span className="cat">{item.category}</span>
      </div>
      <div className="body">
        <h3>{item.title}</h3>
        <p>{item.excerpt}</p>
        <div className="meta">👤 {item.author} · ⏱ {item.time}</div>
      </div>
    </article>
  );
}
