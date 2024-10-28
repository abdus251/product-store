import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "./ProductCard";

const HomePage = () => {
    const { fetchProducts, products } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    console.log("products", products);

    return (
        <>
            <div>
                <h1 className="text-center my-20 text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Current Products</h1>
            </div>
            <div className="flex justify-center gap-10 text-2xl">
               <div className="grid md:grid-cols-2">
               {products.length === 0 ? (
                    <p className="text-orange-400 font-bold">No product found</p>
                ) : (
                    products.map(product => (
                      <ProductCard key={product._id} product={product}/>
                    ))
                )}
               </div>
                <Link to='/create'>
                <button className="text-orange-500 font-bold"> Create a product</button>
                </Link>
            </div>
        </>
    );
};

export default HomePage;