// //-------------sizes animation-------------->
// const viewSizes = (input) => {
//     document.getElementById('regular').style = "font-weight: 400; text-decoration: unset;";
//     document.getElementById('tall').style = "font-weight: 400; text-decoration: unset;";
//     document.getElementById('petite').style = "font-weight: 400; text-decoration: unset;";
//     document.getElementById(input).style = "font-weight: 600; text-decoration: underline;";

// }


// //------------sizes in circles animation-------------->

// const changeBack = (input) => {
//   document.getElementById('xxs').style = "background-color: white; color: rgb(68, 65, 65); font-weight: 400";
//   document.getElementById('xs').style = "background-color: white; color: rgb(68, 65, 65); font-weight: 400";
//   document.getElementById('s').style = "background-color: white; color: rgb(68, 65, 65); font-weight: 400";
//   document.getElementById('m').style = "background-color: white; color: rgb(68, 65, 65); font-weight: 400";
//   document.getElementById('l').style = "background-color: white; color: rgb(68, 65, 65); font-weight: 400";
//   document.getElementById('xl').style = "background-color: white; color: rgb(68, 65, 65); font-weight: 400";
//   document.getElementById('xxl').style = "background-color: white; color: rgb(68, 65, 65); font-weight: 400";
//   document.getElementById(input).style = "background-color: #00255a; color: white; font-weight: 600";
  
// }


// var product = JSON.parse(localStorage.getItem("single_product")) || []
// console.log("product:", product);

// var {name, price, color, image, image1, image2, image3} = product;


// //<--------------function for product details display---------------->

// const display = ({name, price, color, image, image1, image2, image3} = product) => {
  
//   console.log('name: ',name);
//   //title
//   document.getElementById('title').textContent = name;

//   console.log("price: ",price);
//   //discounted price
//   document.getElementById('discount_price').textContent = price;
  
//   console.log("color: ",color);
//    //color
//    document.getElementById('prod_color').textContent = color;

//   //images
//   console.log("images: ");
//   console.log(image, image1, image2, image3);
//   let imgDiv = document.getElementById('prod_imgs');

//   let div1=document.createElement("div");
//   var img = document.createElement("img")
//       img.setAttribute("src", image)
//       img.setAttribute("class", 'display_img')
//   div1.append(img)

//     let div2=document.createElement("div");
//     var img1 = document.createElement("img")
//       img1.setAttribute("src", image1)
//       img1.setAttribute("class", 'display_img')
//       div2.append(img1)

//       let div3=document.createElement("div");
//       var img2 = document.createElement("img")
//       img2.setAttribute("src", image2)
//       img2.setAttribute("class", 'display_img')
//       div3.append(img2)

//       let div4=document.createElement("div");
//       var img3 = document.createElement("img")
//       img3.setAttribute("src", image3)
//       img3.setAttribute("class", 'display_img')
//       div4.append(img3)

//    imgDiv.append(div1,div2,div3,div4)

// }

// display();


// //<--------------function for product details display---------------->

// var cartArray = [];


// const addToBag = (elem) => {
//     // console.log("view_items", view_items)
//     document.getElementById('removePopup').style.display = 'flex';

//     document.getElementById('coImg').src =view_items.image[0];

//     document.getElementById('coTitle').textContent = view_items.brand;

//     document.getElementById('coPriceDiscounted').textContent = view_items.price[0];
    

//     cartArray.push(view_items);
//     console.log('cartArray', cartArray); 

//     document.getElementById('cartQty').textContent = cartArray.length;

//     //<--------------calculating the total cart value---------------->
//     var total = 0;
//     for(let t=0; t<cartArray.length ; t++){
            
//         let p = cartArray[t].price;
//         p = view_items.price[0].split("")
//         p.shift();
//         p = +p.join("")
//         // console.log(p); 

//         total += p 
//     }
//     document.getElementById('totalAmt').textContent = `Subtotal: ${'$'+(cartArray.length*total)}`;
// }


// // //<--------------function to remove popup---------------->
// document.getElementById("crosS").onclick=()=>{
//     document.getElementById('removePopup').style.display = 'none';
// }

// document.getElementById("keepShopBtn").onclick=()=>{
//     window.location.href="/home/dresses"
// }


// // //<--------------go to chechout page---------------->
// document.getElementById("coBtn").onclick=()=> {
//     single(view_items)
// }

// function single({_id}){
//     // console.log(_id)
//     window.location.href=`/home/checkout/${_id}`;
// }



// var view_items;
// function sendData(data){
//      view_items=JSON.parse(data)
//     // console.log(view_items)
//     display(view_items)
// }

// function display(elem){
//     // console.log(elem)
//     document.getElementById("p_price").textContent=elem.brand;
//     document.getElementById("title").textContent=elem.price[0];
//     document.getElementById("append1").src=elem.image[0];
//     document.getElementById("prod_color").textContent=` Selected Colour : ${elem.color[0]}`
    
//     document.getElementById("append2").src=elem.image[3];
//     document.getElementById("append3").src=elem.image[4];
//     document.getElementById("append4").src=elem.image[5];

//     document.getElementById("color-1").textContent=`Color-1 :    ${elem.color[0]}`;
//     document.getElementById("color-2").textContent=`Color-2 :    ${elem.color[1]}`;
//     document.getElementById("color-3").textContent=`Color-3 :    ${elem.color[2]}`;

    
//         document.getElementById("color-1").addEventListener("click",()=>{
//             // console.log(elem.color)
//              document.getElementById("title").textContent=elem.price[0];
//              document.getElementById("append1").src=elem.image[0];
//              document.getElementById("prod_color").textContent=` Selected Colour : ${elem.color[0]}`
//         })

//         document.getElementById("color-2").addEventListener("click",()=>{
//             document.getElementById("title").textContent=elem.price[1];
//             document.getElementById("append1").src=elem.image[1];
//             document.getElementById("prod_color").textContent=` Selected Colour : ${elem.color[1]}`;
//        })

//        document.getElementById("color-3").addEventListener("click",()=>{
//            document.getElementById("title").textContent=elem.price[2];
//            document.getElementById("append1").src=elem.image[2];
//            document.getElementById("prod_color").textContent=` Selected Colour : ${elem.color[2]}`;
//        })

// }

//<--------------function for product details display---------------->
var cartArray = [];
const addToBag = (elem) => {
    console.log("view_items", view_items)
    document.getElementById('removePopup').style.display = 'flex';
    document.getElementById('coImg').src =view_items.image[0];
    document.getElementById('coTitle').textContent = view_items.brand;
    document.getElementById('coPriceDiscounted').textContent = view_items.price[0];
    cartArray.push(view_items);
    console.log('cartArray', cartArray);
    document.getElementById('cartQty').textContent = cartArray.length;
    //<--------------calculating the total cart value---------------->
    var total = 0;
    for(let t=0; t<cartArray.length ; t++){
        let p = cartArray[t].price;
        p = view_items.price[0].split("")
        p.shift();
        p = +p.join("")
        // console.log(p);
        total += p
    }
    document.getElementById('totalAmt').textContent = `Subtotal: ${'$'+(cartArray.length*total)}`;
}
// //<--------------function to remove popup---------------->
document.getElementById("crosS").onclick=()=>{
    document.getElementById('removePopup').style.display = 'none';
}
document.getElementById("keepShopBtn").onclick=()=>{
    window.location.href="/home/dresses"
}
// //<--------------go to chechout page---------------->
document.getElementById("coBtn").onclick=()=> {
    single(view_items)
    // console.log(view_items._id, view_items.brand)
}
function single({_id,brand}){
    console.log(_id,brand)
    window.location.href=`/checkout/?id=${_id}&brand=${brand}`;
}
// function single({_id}){
//     // console.log(_id)
//     window.location.href=`http://localhost:2020/home/checkout/${_id}`;
// }
// function single({_id}){
//     // console.log(_id)
//     window.location.href=`http://localhost:2020/home/gapfit/checkout/${_id}`;
// }
var view_items;
function sendData(data){
     view_items=JSON.parse(data)
    console.log(view_items)
    display(view_items)
}
function display(elem){
    // console.log(elem)
    document.getElementById("p_price").textContent=elem.brand;
    document.getElementById("title").textContent=elem.price[0];
    document.getElementById("append1").src=elem.image[0];
    document.getElementById("prod_color").textContent=` Selected Colour : ${elem.color[0]}`
    document.getElementById("append2").src=elem.image[3];
    document.getElementById("append3").src=elem.image[4];
    document.getElementById("append4").src=elem.image[5];
    document.getElementById("color-1").textContent=`Color-1 :    ${elem.color[0]}`;
    document.getElementById("color-2").textContent=`Color-2 :    ${elem.color[1]}`;
    document.getElementById("color-3").textContent=`Color-3 :    ${elem.color[2]}`;
        document.getElementById("color-1").addEventListener("click",()=>{
            // console.log(elem.color)
             document.getElementById("title").textContent=elem.price[0];
             document.getElementById("append1").src=elem.image[0];
             document.getElementById("prod_color").textContent=` Selected Colour : ${elem.color[0]}`
        })
        document.getElementById("color-2").addEventListener("click",()=>{
            document.getElementById("title").textContent=elem.price[1];
            document.getElementById("append1").src=elem.image[1];
            document.getElementById("prod_color").textContent=` Selected Colour : ${elem.color[1]}`;
       })
       document.getElementById("color-3").addEventListener("click",()=>{
           document.getElementById("title").textContent=elem.price[2];
           document.getElementById("append1").src=elem.image[2];
           document.getElementById("prod_color").textContent=` Selected Colour : ${elem.color[2]}`;
       })
}