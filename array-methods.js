const products = [
    {name:'laptop',brand:'apple',color:'silver',price:120000 },
    {name:'laptop',brand:'acer',color:'olive',price:12000 },
    {name:'laptop',brand:'sony',color:'green',price:13000 },
    {name:'laptop',brand:'hp',color:'brown',price:12030 },
    {name:'laptop',brand:'asus',color:'red',price:123000 },
    {name:'laptop',brand:'lenovo',color:'cherry',price:12600 },
    {name:'laptop',brand:'samsung',color:'black',price:118000 }
]
// 1. map() methods
const brandsName =products.map(product => product.brand);
// console.log(brandsName)

const prices = products.map(product => product.price);
// console.log(prices)

// 2.forEach() methods

// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color))

products.forEach(product => {
    if (product.price <= 20000){
        console.log(product.price)
    }
    else {
        console.log('increase budget and buy boroluk wala device',product.brand,product.price)
    }
})



