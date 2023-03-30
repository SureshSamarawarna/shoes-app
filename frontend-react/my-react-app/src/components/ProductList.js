import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductService from '../services/ProductService'

const ProductList = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        ProductService.getProducts()
        .then(response => setProducts(response.data.data))
        .catch(error=> console.log(error));

    
    }, []);

    console.log(products);  



  return (
   
    <>
     
     <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                
                    {products.map(item => (
                        <a href="#" className="group" key={item.id}>
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <button onClick={() => navigate("/productDetails")}>
                                <img src={item.mainImage} alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </button>
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">{item.price.amount} {item.price.currency}</p>
                        </a>

                    ))}
            </div>
        </div>
    </div>
    
    </>


    
  )
}

export default ProductList


