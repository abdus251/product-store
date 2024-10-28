import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useProductStore } from "../store/product";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (success) {

      console.log(message);
    }
  };

  const handleUpdateProduct = async (pid) => {
    await updateProduct(pid, updatedProduct);
   
    document.getElementById("my_modal_5").close();
  };

  return (
    <>
      <div className="bg-base-100 w-96 border my-5 mx-5 rounded-lg">
        <figure className="px-10 pt-10">
          <img src={product.image} alt={product.name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-orange-500">{product.name}</h2>
          <p>Price: ${product.price}</p>
          <div className="card-actions gap-5">
            
            <div>
              <button
                className="btn bg-sky-300 border-none hover:bg-sky-400"
                onClick={() => {
                  setUpdatedProduct(product); 
                  document.getElementById("my_modal_5").showModal();
                }}
              >
                <FaEdit size={30} color="black" />
              </button>
              <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Update Product</h3>
                  <input
                    type="text"
                    placeholder="Product Name"
                    name="name"
                    className="input input-bordered w-full max-w-xs my-4"
                    value={updatedProduct.name}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                  />

                  <input
                    type="text"
                    placeholder="Price"
                    className="input input-bordered w-full max-w-xs mb-4"
                    name="price"
                    value={updatedProduct.price}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                  />

                  <input
                    type="text"
                    placeholder="Image URL"
                    name="image"
                    className="input input-bordered w-full max-w-xs"
                    value={updatedProduct.image}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                  />
                  <div className="flex justify-center gap-12">
                    <div className="modal-action">
                      <button
                        onClick={() => handleUpdateProduct(product._id)}
                        className="btn bg-green-300"
                      >
                        Update
                      </button>
                    </div>
                    <div className="modal-action">
                      <button className="btn bg-orange-400" onClick={() => document.getElementById("my_modal_5").close()}>
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </dialog>
            </div>

            {/* Delete Button */}
            <div className="box-content h-12 w-16 bg-red-300 flex justify-center items-center rounded-lg cursor-pointer hover:bg-red-600 transition ">
              <button onClick={() => handleDeleteProduct(product._id)}>
                <FaTrash size={24} color="black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;