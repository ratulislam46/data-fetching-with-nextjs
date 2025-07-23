import React from 'react';

const Products = async () => {

    const res = await fetch('http://localhost:3000/api/items');
    const data = await res.json();
    const datas = await data.data;

    return (
        <div>
            <ul>
                {
                    datas?.map((singleProduct) => {
                        return (
                            <li key={singleProduct.id}>{singleProduct.id}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Products;