// merchandise

import {  SectionContainer } from "@/components/utils";
import { Heading2 } from "@/components/utils/typography";
import { products } from "@/data";
import { Product } from "./product"; 

const Products = () => {

    return (
        <SectionContainer>
            <Heading2>Our Merchandise</Heading2>
            <div className="my-3 grid gap-3 lg:grid-cols-3 grid-cols-1">
                {
                    products.map((product, index) => (
                        <Product 
                            product={product}
                            key={index}
                        />
                    ))
                }
            </div>
        
        </SectionContainer>
    )
};

export default Products; 


