import React, { useEffect, useState } from "react";
function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => { fetch("/api/products").then(res => res.json()).then(setProducts); }, []);
  return (
    <main>
      <h1>Productos</h1>
      {products.map((p, i) => <div key={i}>{p.nombre} - ${p.precio}</div>)}
    </main>
  );
}
export default Home;
