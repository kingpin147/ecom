export const product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Product Title'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Product Description'
        },
        {name: "price",
         title: "Product Price",
         type: 'number'
        },
       
        {
            name: 'image',
            type: 'image',
            title: 'Product Image',
           
        },
    ]
};
