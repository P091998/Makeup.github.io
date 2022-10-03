const formname=document.querySelector('#searchBrands');
const res=document.querySelector('#tableResult');
const displayImage=document.querySelector('#displayImage');
console.log("formName"+formname);
formname.addEventListener('click',getDetails);

var i=0;

function getDetails()
{
    // e.preventDefault();
    // displayImage.style.display="flex";
    // res.style.display="flex";
    const display=document.querySelector('#display');
    display.style.display="flex";

    const order=document.querySelector('#order');
    order.style.display="block";

    change.style.display="block"

    const colour_bg=document.querySelector('#colour_bg');
    colour_bg.style.display="none";
    formname.style.display="none";

    const quantity=document.querySelector('#quantity');
    quantity.style.display="flex";

    i=0;

    const brandName=formname.value; console.log("brandName"+brandName);
    fetchBrandDetails(brandName,i);
}

var rcopy=undefined;

const fetchBrandDetails=async(brandName,i)=>{
    const r=await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandName}`);
    rcopy=r;
    console.log(r);

    const brand=r.data[i].brand;
    const category=r.data[i].category;
    const name=r.data[i].name;
    const price=r.data[i].price;
    const image=r.data[i].image_link;
    
    displayImage.innerHTML=`<img src=${image} class="img-fluid" alt="Image"/>`;

    res.innerHTML=
    `<tr style="font-weight:600;">
        <td style="font-weight:bolder; text-decoration: underline;">Property</td>
        <td style="font-weight:bolder; text-decoration: underline;">Value</td>
    </tr>
    <tr>
        <td>Brand:</td>
        <td>${brand}</td>
    </tr>
    <tr>
        <td>Category:</td>
        <td>${category}</td>
    </tr>
    <tr>
        <td>Name:</td>
        <td>${name}</td>
    </tr>
    <tr>
        <td>Price:</td>
        <td>$${price}</td>
    </tr>
    </tr>`
}

const next=document.querySelector('#next');
next.addEventListener('click',nextPage);

function nextPage()
{
    if(i<rcopy.data.length-1)
    {
        i++;
        const brandName=formname.value;
        fetchBrandDetails(brandName,i);
    }
}
   
const previous=document.querySelector('#previous');
previous.addEventListener('click',previousPage);
   
function previousPage()
{
    if(i>0)
    {
        
        i--;
        const brandName=formname.value;
        fetchBrandDetails(brandName,i);
    }
}

const order=document.querySelector('#order');
order.addEventListener('click',displayQuantity);

function displayQuantity()
{
    const quantity=document.querySelector('#quantity');
    quantity.style.display="flex";
}

const count=document.querySelector('#count');

const increase=document.querySelector('#increase');
increase.addEventListener('click',increaseQuantity);

function increaseQuantity()
{
    var i=count.innerHTML; console.log("iIQ="+i);
    i++;
    count.innerHTML=i;
}

const decrease=document.querySelector('#decrease');
decrease.addEventListener('click',decreaseQuantity);

function decreaseQuantity()
{
    var i=count.innerHTML;
    if(i>1)
    {
        i--;
        count.innerHTML=i;
    }
}

// const save=document.querySelector('#save');
// save.addEventListener('click',saveAndContinue);

// function saveAndContinue()
// {checkout.style.display="none";
//     const myTimeout = setTimeout(addressSaved, 1000);console.log(myTimeout)
//     function addressSaved()
//     {
//         `<div style="background-color: peachpuff;">
//             <p>Address saved successfully.</p>
//         </div>`
//     }
//     // displayImage.style.display="none";
//     // tableResult.style.display="none";
//     // order.style.display="none";
//     // address.style.display="none";

//     // const searchBrands=document.querySelector('#searchBrands');
//     // const orderNowText=document.querySelector('#orderNowText');

//     // formname.style.display="none";
//     // orderNowText.style.display="none";

//     // const orderPlaced=document.querySelector('#orderPlaced');
//     // orderPlaced.style.display="flex";

//     // const continueBrowsing=document.querySelector('#continueBrowsing');
//     // continueBrowsing.style.display="flex";
// }

const buyNow=document.querySelector('#buyNow');
buyNow.addEventListener('click',buyDetails);

function buyDetails()
{
    quantity.style.display="none";
    change.style.display="none";
    display.style.display="none";
    buyNow.style.display="none";

    const colourpop_top=document.querySelector('#colourpop_top');
    colourpop_top.style.display="none";

    address.style.display="block";

    const orderItems=document.querySelector('#orderItems');
    orderItems.style.display="flex";

    const footer=document.querySelector('#footer');
    footer.style.display="block";

    orderDetails=document.querySelector('#orderDetails');

    var j=count.innerText;

    const brand=rcopy.data[i].brand; orderDetails.innerHTML=brand;
    const category=rcopy.data[i].category;
    const name=rcopy.data[i].name;
    const price=rcopy.data[i].price;

    // var j=i+1;

    var totalPrice=undefined;
    totalPrice=eval("price*j");

    orderDetails.innerHTML=
    `<tr>
        <td>Order details:</td>
        <td></td>
    </tr>
    <tr>
        <td>Brand</td>
        <td>${brand}</td>
    </tr>
    <tr>
        <td>Category</td>
        <td>${category}</td>
    </tr>
    <tr>
        <td>Name</td>
        <td>${name}</td>
    </tr>
    <tr>
        <td>Price</td>
        <td>$${totalPrice}</td>
    </tr>
    </tr>`

    address.style.display="block";
}

// const continueBrowsing=document.querySelector('#continueBrowsing');
// continueBrowsing.addEventListener('click',reload);

// function reload()
// {
//     location.reload()
// }