'use client'

const ProductAddForm = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const productData = { name }
        const res = await fetch('http://localhost:3000/api/items', {
            method: "POST",
            body: JSON.stringify(productData),
            headers: {
                'content-type': "application/json"
            }
        })
        const result = await res.json();
        console.log(result);
        alert('Product added successfully');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Product Name' className="border rounded-md border-gray-500 px-6 py-2" />
                <input type="submit" value="Submit" className="border border-gray-500 py-2 rounded-md px-2 bg-blue-600 hover:bg-blue-700" />
            </form>
        </div>
    );
};

export default ProductAddForm;