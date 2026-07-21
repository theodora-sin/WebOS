/*layout:
Startscreen:--welcome, introduction, start button
choosescreen--choose city, user select city 
choose restaurent:show 3-5 restuarant
each restuarant: name, photo, Cuisine, short description, price, dish, Address, button,*/

const cities=[
    {
        id:"Seoul",
        name:"Seoul",
        restaurant:[
            {
                id:"Cafe",
                shop:"Bake Mogul",
                image:"assets/cafe.jpg",
                description:"Well known for Butter Salt Bagel pair with variety of cream cheese.",
                dish:"Salt butter bagel",
                dishimage:"assets/bagel.jpg",
                price:"$$, around ₩10000 per person",
                address:"17 Seoulsup 2-gil, Seongdong-gu, Seoul, South Korea",
                map:"https://www.google.com/maps/place/Bake+Mogul/data=!4m2!3m1!1s0x357ca5ce5edd7a01:0xe83331bff4d9062f?sa=X&ved=1t:242&ictx=111"
            },
            {
                id:"market",
                shop:"Gwangjang Market",
                image:"assets/market.jpg",
                description:"One of the oldest tradition tradition markets, popular for Korean street food",
                dish:"kkwabaegi(Twisted doughnut)",
                dishimage:"assets/doughnut.jpg",
                price:"$,around ₩ 1000- 1500 per person",
                address: "South Korea, Seoul, Jongno District, Jongno 4(sa)-ga, 188 105호",
                map:"https://www.google.com/maps/place/Gwangjang+Market/@37.5699226,126.9946705,16z/data=!4m10!1m2!2m1!1sGwangjang+Market!3m6!1s0x357ca2ed7e74759b:0xd656a34831089f44!8m2!3d37.5700398!4d126.9996036!15sChBHd2FuZ2phbmcgTWFya2V0WhIiEGd3YW5namFuZyBtYXJrZXSSARJ0cmFkaXRpb25hbF9tYXJrZXTgAQA!16s%2Fm%2F012r1x6q?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D",
            },
            {
                id:"chicken",
                shop:"bb.q (비비큐)",
                image:"assets/chicken.jpg",
                description:"Well-known for fried chicken spot, fried chicken always pair with beer",
                dish:"korean fried chicken",
                dishimage:"assets/friedchicken.jpg",
                price:"$$ around ₩ 20000-23000 per person",
                address:"Please go to naver or google and type in the name, and it will show the nearest store in your area.",
                map:"https://www.google.com/maps/search/bb.q+(%EB%B9%84%EB%B9%84%ED%81%90)/@37.5603827,126.8966866,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
            }
        ]      
    },
    {
        id: "tokyo",
        name: "Tokyo",
        restaurant:[{
            id:"udon",
            shop:"Nezu Kamachiku",
            image:"assets/udon_shop.jpg",
            description:"Well known for Udon noodles, tempura & sake in an early 20th-century stone building overlooking a tranquil garden.",
            dish:"Handmade Udon and tempura",
            dishimage:"assets/udon1.jpg",
            price:"$$, around ¥1,000–2,000 per person",
            address:"2 Chome-14-18 Nezu, Bunkyo City, Tokyo 113-0031, Japan",
            map:"https://www.google.com/maps/place/Nezu+Kamachiku/@35.7180872,139.7643897,17z/data=!3m1!4b1!4m6!3m5!1s0x60188c2ea14f1471:0xfbabdd495ec4e27b!8m2!3d35.7180829!4d139.7669646!16s%2Fg%2F1tfhzl4k?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            id:"tonkatsu",
            shop:"Tonkatsu Marushichi",
            image:"assets/tonkatsu_shop.jpg",
            description:"Well known for serving Japan's thickest katsudon",
            dish:"The Domestic Loin Top",
            dishimage:"assets/tonkatsu.jpg",
            price:"$$ around ¥2200 per person",
            address:"4 Chome-13-3 Ginza, Chuo City, Tokyo 104-0061, Japan",
            map:"https://www.google.com/maps/search/tonkatsu+marushichi/@35.6922825,139.7566654,13z?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            id:"skewers",
            shop:"Jomon Roppongi",
            image:"assets/skewers_shop.jpg",
            description:"Well know for Hakata-style skewers, they also provide sashimi, you can get shochu and sake. The space is small and lively.",
            dish:"Yakitori",
            dishimage:"assets/skewers.jpg",
            price:"$$$ around ¥3,000–4,000 per person",
            address:"Japan, 〒106-0032 Tokyo, Minato City, Roppongi, 5 Chome−9−17 1F",
            map:"https://www.google.com/maps/place/Jomon+Roppongi/@35.6613791,139.7304199,17z/data=!3m1!4b1!4m6!3m5!1s0x60188b9d75f634f1:0x5313f5e2ddc80208!8m2!3d35.6613748!4d139.7329948!16s%2Fg%2F1vmr1c9m?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
        }

        ]        
    },
    {
        id:"Taipei",
        name:"Taipei",
        restaurant:[{
            id: "nightmarket",
            shop:"Ningxia Night Market",
            image:"nightmarket.jpg",
            description:"Best for food lovers, it is small and highly organiszed.",
            dish:"Deep-fried taro balls",
            dishimage:"assets/taroball.jpg",
            price:"$",
            address:"103, Taiwan, Taipei City, Datong District, Ningxia Rd, 091攤位",
            map:"https://www.google.com/maps/place/Liu+Yu+Zi+(Taro+balls)/@25.0566856,121.5127892,17z/data=!4m14!1m7!3m6!1s0x3442a96b56cf45c5:0xa2e6923fa27a10b4!2sNingxia+Night+Market!8m2!3d25.0566808!4d121.5153641!16s%2Fg%2F11b6z295dn!3m5!1s0x3442a96abb408fef:0xb0565d872bddb91b!8m2!3d25.0560045!4d121.5153256!16s%2Fg%2F1tmxnq8m?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            id:"beefnoddles",
            shop:"Liu Shan Dong Beef Noodles",
            image:"assets/beef_shop.jpg",
            description:"Well known for red-braised beef noodles with fair and quite cheap price.",
            dish:"red-braised beef noodles",
            dishimage:"assets/beef.jpg",
            price:"$$ $200–400 per person",
            address:"No. 2號, Lane 14, Section 1, Kaifeng St, Liming Village, Zhongzheng District, Taipei City, Taiwan 100",
            map:"https://www.google.com/maps/place/%E5%8A%89%E5%B1%B1%E6%9D%B1%E5%B0%8F%E5%90%83%E5%BA%97/@25.0457197,121.5111853,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a90cd144b5b9:0x104b15cb89d926fd!8m2!3d25.0457149!4d121.5137602!16s%2Fg%2F1tkqxzd6?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            id:"tea",
            shop:"The Oolong Project",
            image:"assets/tea_shop.jpg",
            description:"A highly popular, well-loved Taiwanese bubble tea chain that specializes in high-quality oolong tea",
            dish:"Dark Roasted Oolong Milk Tea",
            dishimage:"assets/tea.jpg",
            price:"$ around $30-70 per person",
            address:"There are many branches,please copy the shop name and search for your nearest branches.",
            map:"https://www.google.com/maps/search/The+Oolong+Project/@25.0457197,121.5111853,17z?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
        }
        ]
    },
    {
        id:"HongKong",
        name:"Hong Kong",
        restaurant:[{
            id:"dimsum",
            shop:"Lin Heung Tea House",
            image:"assets/dimsumshop.jpg",
            description:"Food is rolled out in tradition push carts, you must get up from your table and bring your stamped card to the cart and grab what you want.",
            dish:"dim sum and Dan San",
            dishimage:"assets/dimsum.jpg",
            price:"$$-$$$ around  $100–250 per person",
            address:"25 Kimberley Road, Tsim Sha Tsui, Hong Kong",
            map:"https://www.google.com/maps/place/Lin+Heung+Lau/@22.2866893,114.1497192,17z/data=!3m1!4b1!4m6!3m5!1s0x3404007c851b53d9:0x39e9975d2b15ea46!8m2!3d22.2866844!4d114.1522941!16s%2Fm%2F0130rmsw?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            id:"shavedice",
            shop:"Shari Shari Kakigori House",
            image:"assets/ice_shop.jpg",
            description:"A popular dessert chain known for specializing in authentic artisanal Japanese shaved ice, commonly known as kakigori",
            dish:"Kyoto Uji Kintoki ",
            dishimage:"assets/ice.jpg",
            price:"$$ around $60 per person",
            address:"There are many branches,please copy the shop name and search for your nearest branches.",
            map:"https://www.google.com/maps/search/shari+shari/@22.2867685,114.1110944,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            id:"HongKongdiner",
            shop:"Men Wah Bing Teng",
            image:"assets/bing.jpg",
            description:"A popular chain of nostalgic Hong Kong-style diners ) that originated from a standalone eatery in Kowloon in the 1970s.",
            dish:"Wah BBQ Pork with Egg and Rice",
            dishimage:"BBQpork.jpg",
            price:"$-$$ around $50-100 per person",
            address:"There are many branches,please copy the shop name and search for your nearest branches.",
            map:"https://www.google.com/maps/search/Men+Wah+Bing+Teng/@22.2867685,114.1110944,13z?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
        },
        ]
    },
    {
        id:"Macau",
        name:"Macau",
        restaurant:[{
            id:"tart",
            shop:"Lord Stow's Bakery",
            image:"assets/portuguese_shop.jpg",
            description:"Famous for creating popular Asian variation of traditional Portuguese pastel de nata.",
            dish:"Portuguese egg tarts",
            dishimage:"assets/portuguese.jpg",
            price:"$ 1-50 Mop per person",
            address:"Rua do Cunha, 9-E, Pak Hung, G/F, Taipa, Macau",
            map:"https://www.google.com/maps/search/Lord+Stow's+Bakery/@22.2842038,112.832921,8z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            id:"beef offal stew",
            shop:"Lao Day Beef Offal",
            image:"assets/oldday_shop.jpg",
            description:"It is one of Macau’s most famous street food spots, renowned for its rich, aromatic curry beef offal",
            dish:"beef offal",
            dishimage:"assets/oldday.jpg",
            price:"$$ MOP 55 to MOP 100",
            address:"G/F, 2 Rua do Cunha,Taipa Village, Macau",
            map:"https://www.google.com/maps/place/Lao+day+beef+offal/@22.1532923,113.5569446,21z/data=!4m6!3m5!1s0x340171505f34fe07:0xe6cbfc68d77b427e!8m2!3d22.1533591!4d113.5570217!16s%2Fg%2F11kc2k9ktd?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            id:"pudding",
            shop:"Leitaria I Son",
            image:"assets/pudding_shop.jpg",
            description:"A famous, historic dairy shop and casual cafe with deep roots in Macau and Hong Kong",
            dish:"Steamed Double-Skin Milk",
            dishimage:"assets/pudding.jpg",
            price:"$ 1-50 Mop per person",
            address:"381 Av. de Almeida Ribeiro, Macao",
            map:"https://www.google.com/maps/place/Yee+Shun+Milk+Company/@22.2012582,113.535378,15z/data=!4m10!1m2!2m1!1sLeitaria+I+Son!3m6!1s0x34017ae55bbded4f:0xc8f9e256660de2e6!8m2!3d22.1946462!4d113.5381563!15sCg5MZWl0YXJpYSBJIFNvbloQIg5sZWl0YXJpYSBpIHNvbpIBDGRlc3NlcnRfc2hvcOABAA!16s%2Fg%2F11b7c95zvp?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
        }
    ]
    },
    {
        id:"London",
        name:"London",
        restaurant:[{
            id:"bakery",
            shop:"Arôme Bakery",
            image:"assets/arome_shop.webp",
            description:"Cozy bakery with a trendy vibe, known for its unique fusion of classic French pastry techniques and Asian-inspired flavours.",
            dish:"Apple Miso Danish with Miso Caramel Glaze",
            dishimage:"arome.jpg",
            price:"$$ £10–20 per person",
            address:"9 Mercer St, London WC2H 9QJ",
            map:"https://www.google.com/maps/search/Ar%C3%B4me+Bakery/@51.5137918,-0.1595428,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            id:"matcha",
            shop:"Tsujiri",
            image:"assets/matcha_shop.jpg",
            description:"Specialise in ceremonial-grade matcha from Uji,Japan, serving Matcha ice cream and dessert",
            dish:"Shiratama Sundae",
            dishimage:"matcha.jpg",
            price:"$ £5–10 per person",
            address:"33 Newport Ct, London WC2H 7PQ",
            map:"https://www.google.com/maps/search/Tsujiri/@51.5137918,-0.1595428,14z?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            id:"korean",
            shop:"WooJung",
            image:"assets/korean_shop.jpg",
            description:"Serving authetic Korean food with many highlighting dishes, it has generous price and portion.",
            dish:"KKanpung-Gi",
            dishimage:"assets/korean.jpg",
            price:"$$, £10–20 per person",
            address:"73 New Oxford St, London WC1A 1DG",
            map:"https://www.google.com/maps/place/WooJung/@51.5166273,-0.1305324,17z/data=!3m2!4b1!5s0x48761b32913192f3:0xe9c80fc5fc5daa60!4m6!3m5!1s0x48761b32914e3abb:0xeb4869a559664754!8m2!3d51.516624!4d-0.1279575!16s%2Fg%2F11bw3dpqbn?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
        }    


        ]
    }
]

const container=document.getElementById("city-container");

/*start screen*/
function startScreen(){
    container.innerHTML="";
    container.classList.add("fade-in");

    const title= document.createElement("h1");
    title.innerText="Recommend Restuarant";

    const introText=document.createElement("p");
    introText.innerText="This is a place where I share my favorite restaurants and food spots. I don't believe in gatekeeping good food—I want everyone to enjoy amazing meals while traveling. Looking back at these dishes always makes me crave them, and I hope my recommendations help you discover places you'll love too.";

    const startButton=document.createElement("button");
    startButton.textContent="Start";
    startButton.className="btn";
    startButton.addEventListener("click",cityScreen);

    container.append(title,introText,startButton);
}

/*Choosing City Screen*/
function cityScreen(){
    container.innerHTML="";
    container.classList.add("fade-in");

    const title=document.createElement("h2");
    title.innerText="Choose a city";
    container.appendChild(title);

    const grid= document.createElement("div");
    grid.className="country-button-grid";

    cities.forEach(city=> {
        const button=document.createElement("button");
        button.textContent= city.name;
        button.className= "btn"
        button.addEventListener("click",() => {
            restaurantScreen(city.id);
        });
        grid.appendChild(button);
    });
    container.appendChild(grid);
}

/*Choosing Restaurant*/
function  restaurantScreen(cityId){
    const city = cities.find(c => c.id === cityId);
    if (!city) return;

    container.innerHTML="";
    container.classList.add("fade-in");    

    const title=document.createElement("h2");
    title.innerText="Restaurants in " + city.name;
    container.appendChild(title)

    const grid=document.createElement("div");
    grid.className="blog-menu-grid";

    city.restaurant.forEach(restaurant => {
        const card = document.createElement("button");
        card.className = "blog-card";
        card.setAttribute("aria-label", "View: " + restaurant.shop);

        const img=document.createElement("img");
        img.src=restaurant.dishimage;
        img.alt=restaurant.dish;
        img.className = "foodimage blog-card-img";

        const label = document.createElement("span");
        label.innerText =  restaurant.shop;

        card.append(img, label);
        card.addEventListener("click", () =>detailedScreen(city.id, restaurant.id));
        grid.appendChild(card);
    }); 

    container.appendChild(grid);

    const backButton=document.createElement("button");
    backButton.textContent="Back to City";
    backButton.className= "btn";
    backButton.addEventListener("click",cityScreen);
    container.appendChild(backButton); 
}

/* Restuarant detail*/
function detailedScreen(cityId, restaurantId) {
    const city = cities.find(c => c.id === cityId);
    if (!city) return;

    const restaurant = city.restaurant.find(r => r.id === restaurantId);
    if (!restaurant) return;
    container.innerHTML="";
    container.classList.add("fade-in");

    const layout = document.createElement("div");
    layout.className = "restaurant-detail";
 
    const left = document.createElement("div");
    left.className = "restaurant-detail-left";    

    const img= document.createElement("img");
    img.src=restaurant.image;
    img.alt = restaurant.shop;
    img.className = "recipe-image";
    left.appendChild(img);

    const right = document.createElement("div");
    right.className = "restaurant-detail-right";

    const title =document.createElement("h2");
    title.textContent=restaurant.shop;
    right.appendChild(title);

    const description = document.createElement("p");
    description.textContent = restaurant.description;
    right.appendChild(description);

    const dishBlock = document.createElement("div");
    dishBlock.className = "dish-highlight";

    const dishImg= document.createElement("img");
    dishImg.src = restaurant.dishimage;
    dishImg.alt = restaurant.dish;
    dishImg.className = "dish-thumb";

    const dishText = document.createElement("div");
    const dishName = document.createElement("h3");
    dishName.textContent = restaurant.dish;

    const price = document.createElement("p");
    price.textContent = restaurant.price;
    dishText.append(dishName, price);
 
    dishBlock.append(dishImg, dishText);
    right.appendChild(dishBlock);
 
    const address = document.createElement("p");
    address.className = "address";
    address.textContent = restaurant.address;
    right.appendChild(address);
 
    layout.append(left, right);
    container.appendChild(layout);

    const map= document.createElement("a");
    map.href=restaurant.map;
    map.textContent="📍 Open in Google Maps";
    map.target = "_blank";
    map.rel="noopener noreferrer";

    const mapimg=document.createElement("img");
    img.src="assets/map.png";
    img.alt="Open in Google Map";
    img.width= 40;
    
    map.appendChild(img);
    right.appendChild(map);

    const backButton=document.createElement("button");
    backButton.textContent="Back to restaurant";
    backButton.className= "btn";
    backButton.addEventListener("click",() => restaurantScreen(cityId));
    container.appendChild(backButton);

    const cityBackButton =document.createElement("button");
    cityBackButton.textContent="Back to cities";
    cityBackButton.className= "btn";
    cityBackButton.addEventListener("click",cityScreen);
    container.appendChild(cityBackButton)

}

/*Screen loading*/
document.addEventListener("DOMContentLoaded", startScreen);


