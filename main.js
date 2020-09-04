let carts = document.querySelectorAll('.btn');

let products=[
{
	name:'Masala Dosa',
	tag:'masaladosa',
	price:60,
	inCart:0
},
{
	name:'Chicken Noodles',
	tag:'chickennoodles',
	price:160,
	inCart:0
},
{
	name:'Chicken Biriyani',
	tag:'chickenbiriyani',
	price:150,
	inCart:0
}
];

for (let i=0; i<carts.length; i++){
	carts[i].addEventListener('click',()=>{
		cartNumbers(products[i]);
		totalCost(products[i]);
	})
}

function onLoadCartNumbers(){
	let productNumbers=localStorage.getItem('cartNumbers');
	if(productNumbers){
		document.querySelector('.cart span').textContent=productNumbers;
	}
}

function cartNumbers(product){
	
	let productNumbers=localStorage.getItem('cartNumbers');
	productNumbers=parseInt(productNumbers);
	if(productNumbers){
		localStorage.setItem('cartNumbers',productNumbers+1);
		document.querySelector('.cart span').textContent=productNumbers+1;
	}
	else{
	localStorage.setItem('cartNumbers',1);
	document.querySelector('.cart span').textContent=1;
	}
	setItems(product);
}
function setItems(product){
	let cartItems=localStorage.getItem('productsInCart');
	cartItems=JSON.parse(cartItems);
	console.log("My cartItems are", cartItems);
	if(cartItems!=null){
		if(cartItems[product.tag]==undefined){
			cartItems={
				...cartItems,
				[product.tag]:product
			}
		}

		cartItems[product.tag].inCart+=1;
	}else{
		product.inCart=1;
		cartItems={

		[product.tag]: product
		}
	}
	
	
	localStorage.setItem('productsInCart',JSON.stringify(cartItems));
}
function totalCost(product){
	//console.log("productprice",product.price);
	let cartCost=localStorage.getItem('totalCost');
	
	console.log("my cost",cartCost);
	console.log(typeof cartCost);

	if(cartCost!=null){
		cartCost=parseInt(cartCost);
		localStorage.setItem("totalCost",cartCost+product.price);
	}
	else{
	localStorage.setItem("totalCost",product.price);
	}
}

onLoadCartNumbers();