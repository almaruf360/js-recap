const products = [
    {name:'laptop',brand:'apple',color:'silver',price:120000 },
    {name:'laptop',brand:'acer',color:'olive',price:12000 },
    {name:'laptop',brand:'sony',color:'green',price:13000 },
    {name:'laptop',brand:'hp',color:'brown',price:12030 },
    {name:'laptop',brand:'asus',color:'red',price:123000 },
    {name:'laptop',brand:'lenovo',color:'cherry',price:12600 },
    {name:'laptop',brand:'samsung',color:'black',price:118000 }
]

const special = products.find(product => product.brand.includes('hp'));
console.log(special)