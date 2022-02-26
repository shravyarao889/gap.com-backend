var dresses;
function sendData(data){
    dresses=JSON.parse(data);
    // console.log("dresses:",dresses)
    display(dresses)
}


function display(dresses){
    document.getElementById("right").innerHTML=""
    dresses.map((elem)=>{
    
        const singlediv=document.createElement("div");
        singlediv.id="singlediv"
        singlediv.addEventListener("click",()=>{
            single(elem);
            // console.log(elem)
        })

        const image=document.createElement("img");
        image.src=elem.image[0];

        const brand_name=document.createElement("h3");
        brand_name.textContent=elem.brand;

        const price=document.createElement("p");
        price.textContent=elem.price[0];

        singlediv.append(image,brand_name,price);
        document.getElementById("right").append(singlediv);
    })
}


function price(){
    var value = document.querySelector("#select").value;
    if(value=="low"){
    dresses.sort(function(a,b){
        // console.log(a,b)
            return Number(a.price[0].slice(1)) - Number(b.price[0].slice(1))
        })
    }else if(value=="high"){
    dresses.sort(function(a,b){
            return Number(b.price[0].slice(1)) - Number(a.price[0].slice(1))
            })

        }
    
    display(dresses)   
}  


    // var arr = JSON.parse(localStorage.getItem("Gap_product"));
    //   display(products_data);
    // function display(arr){
    //     document.getElementById("right").textContent = "";
    //     arr.map((elem)=>{
     
    //     let div = document.createElement("div")
    //     div.addEventListener("click", ()=>{

    //         single(elem)
    //         window.location.href = "./browseProducts.html";

    // })

// let img = document.createElement("img")
// img.src = elem.image;
// img.setAttribute("class", "proImG")

// let name = document.createElement("p")
// name.textContent = elem.name;

// let price = document.createElement("h3")
// price.textContent = elem.price

// let brand = document.createElement("p")
// brand.textContent = elem.brand
// brand.setAttribute("class", "brand")

// div.append(img, name, price, brand)

// document.getElementById("right").append(div);

    //     })
    // }


    function  single({_id}){
        
    //    console.log(_id)
       window.location.href=`http://localhost:2020/home/view_product/${_id}`
    }