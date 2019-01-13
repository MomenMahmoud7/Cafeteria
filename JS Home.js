let navbar = document.getElementById("topnav");
let check = document.getElementById("check");
let sticky = navbar.offsetTop;
let stickyCheck = check.offsetTop;
window.onscroll = function () {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    check.classList.add("sticky-check")
  } else {
    navbar.classList.remove("sticky");
    check.classList.remove("sticky-check");
  }
};


class drink{
  constructor(id,image,title,description,box,price,currency,button){
    this.id=id;
    this.image=image;
    this.title=title;
    this.description=description;
    this.box=box;
    this.price=price;
    this.currency=currency;
    this.button=button;
  }
}

let drinks=[];
drinks.push(new drink("drink1","Coffee.jpg","French Coffee","Coffee with Milk and Soft Cream","price-box1","20","LE","button1"));
drinks.push(new drink("drink2","Coffee.jpg","French Coffee","Coffee with Milk and Soft Cream","price-box2","20","LE","button1"));
drinks.push(new drink("drink3","Coffee.jpg","French Coffee","Coffee with Milk and Soft Cream","price-box3","20","LE","button1"));
drinks.push(new drink("drink4","Coffee.jpg","French Coffee","Coffee with Milk and Soft Cream","price-box4","20","LE","button1"));
drinks.push(new drink("drink5","Coffee.jpg","French Coffee","Coffee with Milk and Soft Cream","price-box5","20","LE","button1"));
drinks.push(new drink("drink6","Coffee.jpg","French Coffee","Coffee with Milk and Soft Cream","price-box6","20","LE","button1"));
drinks.push(new drink("drink7","Coffee.jpg","French Coffee","Coffee with Milk and Soft Cream","price-box7","20","LE","button1"));
drinks.push(new drink("drink8","Coffee.jpg","French Coffee","Coffee with Milk and Soft Cream","price-box8","20","LE","button1"));


function create (elementType , attribute , elementAttribute , elementId , elementParentId , textInside , elementEvent , elementFunction) 
{
  let newElement = document.createElement(elementType);
  newElement.setAttribute(attribute , elementAttribute);
  newElement.setAttribute("Id" , elementId);
  document.getElementById(elementParentId).appendChild(newElement);
  newElement.innerText = textInside;
  newElement.addEventListener(elementEvent , elementFunction);

}

for ( i=0 ; i < drinks.length ; i++)
{
  (create ("div" , "class" , "product" , drinks[i].id , "body" , ""));
  (create ("img" , "src" , drinks[i].image , "" , drinks[i].id , ""));
  (create ("div" , "class" , "title" , "" , drinks[i].id , drinks[i].title));
  (create ("div" , "class" , "description" , "" , drinks[i].id , drinks[i].description));
  (create ("div" , "class" , "price-box" , drinks[i].box , drinks[i].id , ""));
  (create ("div" , "class" , "price" , "" , drinks[i].box , drinks[i].price));
  (create ("div" , "class" , "currency" , "" , drinks[i].box , drinks[i].currency));
  (create ("button" , "class" , "button" , drinks[i].button , drinks[i].id , "Get" , "click" , function(){ console.log("hi") }));
}
