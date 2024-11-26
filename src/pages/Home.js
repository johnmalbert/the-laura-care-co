import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";

function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="about-laura">
        <h1>The Laura Care Co</h1>
        <p>
          Established in 1996, The Laura Care Co is based out of Seattle,
          Washington. Laura handcrafts products with the goal of making your
          life better. From stylish hats to cozy blankets, and even delicious
          banana bread, Laura has something for everyone. How can Laura care for
          you?
        </p>
        <a href="/products" className="products-link">
          Explore Products
        </a>
      </section>
    </motion.div>
  );
}

export default Home;
