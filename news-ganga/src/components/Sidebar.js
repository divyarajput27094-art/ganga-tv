import React from "react";
import { trending } from "../data/news";
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>📈 Trending Now</h3>
      <ol>
        {trending.map((t,i) => (
          <li key={t.id}>
            <span className="num">{String(i+1).padStart(2,"0")}</span>
            <div>
              <h4>{t.title}</h4>
              <small>{t.place} · {t.time}</small>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  );
}
