let pass = document.getElementById("passed")
  pass.innerHTML=null;
    let images =["https://cordmagazine.com/wp-content/uploads/2017/07/Top-10-Best-Selling-Clothing-Brands-In-The-World-sajt.jpg",
    "https://niche.style/wp-content/uploads/2021/11/pexels-juan-mendez-1536619.jpg","https://orlando.momcollective.com/wp-content/uploads/2019/03/Teen-Fashion.png"]

        

        let img =document.createElement('img')
        img.setAttribute("class","ipo")
        img.src=img[0]

       // document.getElementById("passed").append(img)
        let i=0;

        id= setInterval(function(){
            if(i===images.length){
                i=0;
            }
            img.src=images[i]
            pass.append(img)
            i++;


        },2000);