let navigationBar = document.getElementById("navigation-bar");
let sticky = navigationBar.offsetTop;
window.onscroll = function () {
  if (window.pageYOffset >= sticky) {
    navigationBar.classList.add("sticky");
  } else {
    navigationBar.classList.remove("sticky");
  }
};

class drink{
  constructor(drinkId,image,title,description,priceBox,price,button,checkDrinkId,checkDrinkQuantityBox,checkDrinkQuantity,checkDrinkPrice){
    this.drinkId=drinkId;
    this.image=image;
    this.title=title;
    this.description=description;
    this.priceBox=priceBox;
    this.price=price;
    this.currency="LE";
    this.button=button;
    this.checkDrinkId=checkDrinkId;
    this.checkDrinkQuantityBox=checkDrinkQuantityBox;
    this.checkDrinkQuantity=checkDrinkQuantity;
    this.checkDrinkPrice=checkDrinkPrice;
  }
}

let drinks=[];
drinks.push(new drink("drink1","Coffee.jpg","Coffee","Turkish Coffee","price-box1",15,"button1","checkDrinkId1","checkDrinkQuantityBox1","checkDrinkQuantity1","checkDrinkPrice1"));
drinks.push(new drink("drink2","Coffee.jpg","French Coffee","Coffee with Milk and Soft Cream","price-box2",20,"button2","checkDrinkId2","checkDrinkQuantityBox2","checkDrinkQuantity2","checkDrinkPrice2"));
drinks.push(new drink("drink3","Coffee.jpg","French Coffee","Coffee with Milk and Soft Cream","price-box3",20,"button3","checkDrinkId3","checkDrinkQuantityBox3","checkDrinkQuantity3","checkDrinkPrice3"));
drinks.push(new drink("drink4","Coffee.jpg","French Coffee","Coffee with Milk and Soft Cream","price-box4",20,"button4","checkDrinkId4","checkDrinkQuantityBox4","checkDrinkQuantity4","checkDrinkPrice4"));
drinks.push(new drink("drink5","Coffee.jpg","French Coffee","Coffee with Milk and Soft Cream","price-box5",20,"button5","checkDrinkId5","checkDrinkQuantityBox5","checkDrinkQuantity5","checkDrinkPrice5"));
drinks.push(new drink("drink6","Coffee.jpg","French Coffee","Coffee with Milk and Soft Cream","price-box6",20,"button6","checkDrinkId6","checkDrinkQuantityBox6","checkDrinkQuantity6","checkDrinkPrice6"));
drinks.push(new drink("drink7","Coffee.jpg","French Coffee","Coffee with Milk and Soft Cream","price-box7",20,"button7","checkDrinkId7","checkDrinkQuantityBox7","checkDrinkQuantity7","checkDrinkPrice7"));
drinks.push(new drink("drink8","Coffee.jpg","French Coffee","Coffee with Milk and Soft Cream","price-box8",20,"button8","checkDrinkId8","checkDrinkQuantityBox8","checkDrinkQuantity8","checkDrinkPrice8"));


function create (elementType , elementSrc , elementClass , elementId , elementParentId , elementTextInside , elementEvent , elementFunction) 
{
  let newElement = document.createElement(elementType);
  newElement.setAttribute("src" , elementSrc);
  newElement.setAttribute("class" , elementClass);
  newElement.setAttribute("Id" , elementId);
  document.getElementById(elementParentId).appendChild(newElement);
  newElement.innerText = elementTextInside;
  newElement.addEventListener(elementEvent , elementFunction);
}

let total=[];

for ( i=0 ; i < drinks.length ; i++)
{
  let drinkId = drinks[i].drinkId;
  let image = drinks[i].image;
  let title = drinks[i].title;
  let description = drinks[i].description;
  let priceBox = drinks[i].priceBox;
  let price = drinks[i].price;
  let currency = drinks[i].currency;
  let button = drinks[i].button;
  let checkDrinkId = drinks[i].checkDrinkId;
  let checkDrinkQuantityBox = drinks[i].checkDrinkQuantityBox;
  let checkDrinkQuantity = drinks[i].checkDrinkQuantity;
  let checkDrinkPrice = drinks[i].checkDrinkPrice;
  let j=1;

  function checkFinalPrice(x)
  {
    total.push(x);
    final=total.reduce(finalLast,0);
    function finalLast(a,b)
    {
      return a+b;
    }
  }


// ------------------------------------------
  function createCheckDrink ()
  {
    (create ("div" , "" , "check-drink" , checkDrinkId , "check" , ""));
    (create ("div" , "" , "check-drink-title" , "" , checkDrinkId , title));
    (create ("div" , "" , "check-drink-quantity-box" , checkDrinkQuantityBox , checkDrinkId , ""));
    (create ("div" , "" , "check-drink-price" , checkDrinkPrice , checkDrinkId , price));
    (create ("button" , "" , "" , "negative" , checkDrinkQuantityBox , "-" , "click" , 
    function ()
    { 
      if (j>1)
      {
        --j;
        (checkFinalPrice(-price));
        document.getElementById("check-total-price").innerText  = final;
        document.getElementById(checkDrinkPrice).innerText  = (j) * price;
        document.getElementById(checkDrinkQuantity).innerText = (j);
      }
      else if (document.getElementsByClassName("check-drink").length == 1)
      {
        document.getElementById("check").parentNode.removeChild(document.getElementById("check"));
      }
      else
      {
        document.getElementById(checkDrinkId).parentNode.removeChild(document.getElementById(checkDrinkId));
      }
    }));
    (create ("div" , "" , "check-drink-quantity" , checkDrinkQuantity , checkDrinkQuantityBox , 1));
    (create ("button" , "" , "" , "postive" , checkDrinkQuantityBox , "+" , "click" , 
    function ()
    {
      j++;
      (checkFinalPrice(price));
      document.getElementById("check-total-price").innerText = final;
      document.getElementById(checkDrinkPrice).innerText  = (j) * price;
      document.getElementById(checkDrinkQuantity).innerText = (j);
    }));
  }

  function createTotalPrice()
  {
    if (document.getElementById("check-total-price")== null)
    {
      (create("div" , "" , "title" , "check-total-price-title" , "check" , "Total Price"));
      (create("div" , "" , "check-total-price" , "check-total-price" , "check" , final));
    }
    else
    {
      document.getElementById("check-total-price-title").parentNode.removeChild(document.getElementById("check-total-price-title"));
      document.getElementById("check-total-price").parentNode.removeChild(document.getElementById("check-total-price"));
      (create("div" , "" , "title" , "check-total-price-title" , "check" , "Total Price"));
      (create("div" , "" , "check-total-price" , "check-total-price" , "check" , final));
    }
  }

// ------------------------------------------
  function getClick () 
  {
    if (document.getElementById("check") == null )
    {
      (checkFinalPrice(price));
      (create("div" , ""  , "check" , "check" , "layout" , "" , ));
      (create("h3" , "" , "" , "" , "check" , "Check"));
      var before = document.getElementById('check');
      var after = document.querySelector('#body');
      after.parentNode.insertBefore(before, after);
      (createCheckDrink());
      (createTotalPrice());
    }
    else if (document.getElementById(checkDrinkId) == null)
    {
      (checkFinalPrice(price));
      (createCheckDrink());
      (createTotalPrice());
    }
  };

// ------------------------------------------
  (create ("div" , "" , "drink" , drinkId , "body" , ""));
  (create ("img" , image , "" , "" , drinkId , ""));
  (create ("div" , "" , "title" , "" , drinkId , title));
  (create ("div" , "" , "description" , "" , drinkId , description));
  (create ("div" , "" , "price-box" , priceBox , drinkId , ""));
  (create ("div" , "" , "price" , "" , priceBox , price));
  (create ("div" , "" , "currency" , "" , priceBox , currency));
  (create ("button" , "" , "button" , button , drinkId , "Get" , "click" , getClick ));
}
