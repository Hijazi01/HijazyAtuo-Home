const arry_photo = ["./images/1.jpg" , "./images/2.jpg", "./images/3.jpg", "./images/4.jpg","./images/5.jpg","./images/6.jpg","./images/7.jpg" ];
var i = 0;
var image = document.getElementsByTagName("img");
setInterval(
    function () {
        console.log("start")
        if (i == 1) {
            image[0].src =arry_photo[i];
            return i++;
        } else if(i==2) {
            image[0].src =arry_photo[i];
            return i++;
        }else if(i==3){
            image[0].src =arry_photo[i];
            return i++;   
        }else if(i==4){
            image[0].src =arry_photo[i];
            return i++;  
        }else if(i==5){
            image[0].src =arry_photo[i];
            return i++; 
        }else if(i==6){
            image[0].src =arry_photo[i];
            return i++;  
        }else if(i==0){
            image[0].src =arry_photo[i];
            return i++;  
        }
         
        i=1
            }
    ,3000);


var i = 0;
function slide_after() {
    if (i >= arry_photo.length) {
        i = 0;
        photo(i);
        return i++;
    } else {
        photo(i);
        return i++;
    }
}

function photo(i) {
    image[0].src = arry_photo[i];
}


function slide_back() {
    if (i >= arry_photo.length) {
        i = 0;
        photo(arry_photo.length);
        return i;
    } else {
        i=i-1
        photo(i);
        return (i);
    }
}

// //////////////////////// tabs nav car /////////////////////////////////////////////////////////////////////////////////

let tabs = document.querySelectorAll("#tabs a");
let tabs_arry=Array.from(tabs);
// console.log(tabs_arry)
let card = document.querySelectorAll("#Products > .col");
let card_arry=Array.from(card);
tabs_arry.forEach((ele)=>{
    ele.addEventListener("click",function(e){
        tabs_arry.forEach((ele)=>{
            ele.classList.remove("disabled");
            ele.classList.add("active");
            ;});
        e.currentTarget.classList.add("disabled");
        card_arry.forEach((cards)=>{
            cards.style.display="none";
            // console.log(cards);
        });
        let show=document.querySelectorAll(e.currentTarget.dataset.cont);
        let show_arry=Array.from(show);
        show_arry.forEach((cards)=>{
            cards.style.display="block";

            ;});
        // console.log( document.querySelector(e.currentTarget.dataset.cont))
            
           
    });
});
    // ////////////////////////click btn///////////////////////////////////////////////////////////////////////////////////////
  
    function cart(idb,idc) {   
        var card_buy = document.querySelector(`#${idc}`);
        var btn_buy = document.querySelector(`#${idb}`);
        var element = document.getElementById("cart");
        element.classList.add("fa-beat-fade");
        card_buy.classList.toggle("buy");
        btn_buy.classList.toggle("btn-primary");
        btn_buy.classList.toggle("btn-danger");
        if (btn_buy.textContent==='ADD TO CART') {
            btn_buy.innerHTML = 'Remove from the cart';
        }else if(btn_buy.textContent=='Remove from the cart'){
            btn_buy.innerHTML = 'ADD TO CART';
        }
    }

// .........................................search nav......................

// const search=()=>{
//     const searchbox = document.getElementById("search-input").value.toUpperCase();
//     const Product= document.getElementById("Products");
//     const card= document.querySelectorAll(".card");
//     const pname = Product.getElementsByTagName("h5");


//     for (let i = 0; i < pname.length; i++)
//     { let match = card[i].getElementsByTagName("h5")[0];
//     if (match) {
//         let textvalue= match.textcontent || match.innerHTML
//         if (textvalue.toUpperCase().indexof(searchbox) > -1) {

//             card[i].style.display="";
//         }else{


//             card[i].style.display="none";
//         }
            
//         }
        
//     }
//     }







