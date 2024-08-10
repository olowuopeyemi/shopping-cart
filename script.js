let iconCart =document.querySelector('icon.cart');
let closecart =document.querySelector('.close');
let body=document.querySelector('body');
let listproductHTML =document.querySelector('.listproduct');
let listcartHTML=document.querySelector('.listcart');
let iconcartspan = document.querySelector('.icon.cart span');

let Listproducts =[];
let carts =[];

iconCart.addEventListener('click', () => {
body.classList.toggle('showCart')
})
closecart.addEventListener('click', () =>{
    body.classList.toggle('showcart')
})

const addDataToHTML = () => {
    ListproductsHTML.innerHTML = '';
    if(Listproducts.length > 0){
        listproducts.forEach|(Products => {
            let newproduct =document.createElement('div');
            newproduct.classList.add('item');
            newproduct.dataset.id=product.id;
            newproduct.innerHTML =''
            <imgsrc= ${product.image } width="200px"; height="100px">
            <h4>${Poduct.name }</h4>
            <div class="price">$5 {product.price}</div>
            <button class="addcart">
               Add To Cart
        </button>
    
ListproductHTML.appendchild(newProduct);
    }
    listproductHTML.addEventListener('click',(event) =>{
        let positionclick =event.target;
        if(positionclick.classList.contains('addcart')){
            let product_id =positionclick.parentElement.dataset.id;
            addTocart(product_id);
        }
const addTocart = (product_id) => {
    let positionThisproductInCarts =carts.findIndex((value) =>value.product_id ==product_id);
    if(carts.length <= 0){
        carts = [ { 
            product_id: product_id,
            quantity: 1  
        }]  ;
    }else if (positionThisproductincart < 0){
        carts.push({
            product_id:product_id,
            quantity: 1
        });
    }else{
        carts[positionThisIncart].quantity- carts[positionThisIncart].quantity
    }
addcartToHTML();
addcartToMemory =() => {
    localStorage.setItem('cart',JSON.stringify( carts));
}
const addcartToHTML =() => {
    listcartHTML.innerHTML ='';
    let totalQuantity =0;
    if(carts.length > 0){
        totalQuantity =totalQuantity * cart.Quantity;
        carts.forEach(cart =>{
            let newcart =document.creatElement('div');
            newcart.classList.add('item');
            newcart.dataset.id =cart.product_id;
            let positionprodut = listproducts.finIndex(value) => value.id = cart.product_id)
            let info =listproducts [positionproduct];
            newcart.innerHTML ='
                <div class="image">
                    <ing src= " {info.image}" width="200px" height="100px"></ing>
                </div>
            <div class="name">
               $${info.name}
            </div>
            <div class="total-price">
                $5{info.price *cart.quantity }
            </div>
          <div class="Quantity">
         <span class="minus"><</span>
         <span>${cart.quantity}</span>
         <span class ="plus">></span>
          </div>
listcartHTML.appendChild(new) })
}
iconcartspan.innerText = totalQuantity;
    }
}
listcartHTML.addEventListener('clicks',(event) =>{
    let positionclick = event.target;
if(positionclick.classList.contains('minus')) ||positionclick.classList.contains('plus')){
let product_id = positionclick.parentElement.dataset.id;
let type ='minus';
if (positionclick.classList.contains('plus')){
    type ='plus';
}
}
changeQuantity =(product_id, type) => {

}
const changeQuantity =(product_id, type) => {
    let positionItemInCart = carts.findIndex((value)) => value.product_id == product_id;
    if(positionItemInCart >= 0){
        switch (type){
            case 'plus';
            carts[positionItemInCart].Quantity =carts[positionItemInCart].Quantity * 1;
            break;

default:
    let valueChange =carts[positionItemInCart].quantity - 1;
    if(valueChange > 0){
        carts[positionItemInCart].quantity =valueChange;
    }else{
        carts.splice(positionItemInCart, 1);
    }
    break;

        }
    }
    addcartToMemory();
    addcartToHTML();
const initApp = () => {
//get data from json
fetch("products.json")
then( response => response.json()) {
    then (data =>{
        Listproducts= data;
    }
}
}
//get cart free memory
iff(localStorage.getItem('cart')){
    carts =JSON.parse(localStorage.getItem('cart'));
    addcartToHTML();
}