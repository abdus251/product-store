import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });

    const [toast, setToast] = useState({ show: false, message: "", type: "" }); 

    const { createProduct } = useProductStore();

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const { success, message } = await createProduct(newProduct);
        console.log("Success:", success);
        console.log("Message:", message);

        if (success) {
            setNewProduct({
                name: "",
                price: "",
                image: "",
            });
            setToast({ show: true, message: "Product created successfully!", type: "success" });
        } else {
            setToast({ show: true, message: message || "Failed to create product.", type: "error" });
        }
    };

    // Function to hide the toast
    const hideToast = () => {
        setToast({ ...toast, show: false });
    };

    return (
        <div>
            {/* Toast Notification */}
            {toast.show && (
                <div className={`toast toast-top toast-end ${toast.type === "success" ? "alert alert-success" : "alert alert-error"}`}>
                    <div className="alert">
                        <span>{toast.message}</span>
                        <button className="btn btn-sm btn-circle btn-ghost" onClick={hideToast}>✕</button>
                    </div>
                </div>
            )}

            <div className="flex justify-center items-center min-h-screen">
                <div className="w-8/12 p-6 rounded-lg shadow-md">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Create New Product</h1>
                    </div>
                    <div className="mt-6">
                        <form onSubmit={handleAddProduct}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input
                                    placeholder="Product Name"
                                    name='name'
                                    value={newProduct.name}
                                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                    type="text"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control mt-4">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    placeholder="Price"
                                    name='price'
                                    type="number"
                                    value={newProduct.price}
                                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control mt-4">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input
                                    placeholder="Image URL"
                                    name='image'
                                    value={newProduct.image}
                                    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">
                                    Create Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePage;