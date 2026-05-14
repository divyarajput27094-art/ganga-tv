// export default function Hero() {
//   return (
//     <div className="hero">
//       <div className="hero-left">
//         <h1>ब्रेकिंग न्यूज़</h1>
//         <p>
//           यहां पर सबसे बड़ी और ताज़ा खबर दिखाई जाएगी जैसे न्यूज़ वेबसाइट पर होती है।
//         </p>
//       </div>

//       <div className="hero-right">
//         <img src="https://via.placeholder.com/400x250" alt="news" />
//       </div>
//     </div>
//   );
// }
// import React from "react";
// export default function Hero({ item }) {
//   return (
//     <section className="hero" style={{backgroundImage:`linear-gradient(to top, rgba(0,0,0,.85), rgba(0,0,0,.2)), url(${item.image})`}}>
//       <span className="badge">TOP STORY</span>
//       <h2>{item.title}</h2>
//       <p>{item.excerpt}</p>
//       <div className="meta">⏱ {item.time} &nbsp;·&nbsp; By {item.author}</div>
//     </section>
//   );
// }
import React from "react";
export default function Hero({ item }) {
  return (
    <section className="hero" style={{backgroundImage:`linear-gradient(to top, rgba(0,0,0,.85), rgba(0,0,0,.2)), url(${item.image})`}}>
      <span className="badge">TOP STORY</span>
      <h2>{item.title}</h2>
      <p>{item.excerpt}</p>
      <div className="meta">⏱ {item.time} &nbsp;·&nbsp; By {item.author}</div>
    </section>
  );
}
