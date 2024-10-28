import React from "react";
import { FaEdit } from "react-icons/fa";

const Modal = () => {
    
  return (
    <div>
      <button
        className="btn bg-sky-300 border-none hover:bg-sky-400"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      ><FaEdit size={30} color="black" className="h-18" />
        
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Product</h3>
          <input type="text" placeholder="Product Name"name="name" className="input input-bordered w-full max-w-xs my-4" value={updateProduct.name} />

          <input type="text" placeholder="Price" className="input input-bordered w-full max-w-xs mb-4" name="price"value={updateProduct.price} />

          <input type="text" placeholder="Image URL" name="image" className="input input-bordered w-full max-w-xs"value={updateProduct.image} />
          <div className="flex justify-center gap-12">
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-green-300">Update</button>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-orange-400">Cancel</button>
            </form>
          </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
