import React from "react";
const CATS = ["All","Breaking","Sports","Politics","Entertainment"];
export default function CategoryFilter({ value, onChange }) {
  return (
    <div className="filters">
      {CATS.map(c => (
        <button key={c} className={value===c?"active":""} onClick={()=>onChange(c)}>{c}</button>
      ))}
    </div>
  );
}
