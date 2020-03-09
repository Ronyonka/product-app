var app= new Vue({
    'el':'#app',
    'data':{
        'product':'Socks',
        'image':'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        'inStock':true,
        'onSale':false,
        'details':['80% cotton', '20% polyester', 'Gender-neutral'],
        'variants':[
            {
                'variantID':2234,
                'variantColor':'green'
            },
            {
                'variantID':2235,
                'variantColor':'blue'
            }
        ]
    }
})