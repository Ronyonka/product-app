var app= new Vue({
    el:'#app',
    data:{
        'product':'Socks',
        'image':'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        'inStock':true,
        'onSale':false,
        'details':['80% cotton', '20% polyester', 'Gender-neutral'],
        'variants':[
            {
                'variantID':2234,
                'variantColor':'green',
                'variantImage':'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
            },
            {
                'variantID':2235,
                'variantColor':'blue',
                'variantImage':'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
            }
        ],
        'cart':0,
    },
    methods:{
        addToCart(){
            this.cart ++
        },
        updateProduct(variantImage){
            this.image = variantImage
        }
    }
})