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
                address:"17 Seoulsup 2-gil, Seongdong-gu, Seoul, South Korea"
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

            },
            {
                id:"chicken",
                shop:"bb.q (비비큐)",
                image:"assets/chicken.jpg",
                description:"Well-known for fried chicken spot, fried chicken always pair with beer",
                dish:"korean fried chicken",
                dishimage:"assets/friedchicken.jpg",
                price:"$$ around ₩ 20000-23000 per person",
                address:"Please go to naver and type in the name, and it will show the nearest store in your area."
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
            dish:"Hademade Udon and tempura",
            dishimage:"assets/udon1.jpg",
            price:"$$, around ¥1,000–2,000 per person",
            address:"2 Chome-14-18 Nezu, Bunkyo City, Tokyo 113-0031, Japan"
        },
        {
            id:"tonkatsu",
            shop:"Tonkatsu Marushichi",
            image:"assets/tonkatsu_shop.jpg",
            description:"Well known for serving Japan's thickest katsudon",
            dish:"The Domestic Loin Top",
            dishimage:"assets/tonkatsu.jpg",
            price:"$$ around ¥2200 per person",
            address:"1-14-14 Tomioka, Koto City, Tokyo"
        },
        {
            id:"skewers",
            shop:"Jomon Roppongi",
            image:"assets/skewers_shop.jpg",
            description:"Well know for Hakata-style skewers, they also provide sashimi, you can get shochu and sake. The space is small and lively.",
            dish:"Yakitori",
            dishimage:"assets/skewers.jpg",
            price:"$$$ around ¥3,000–4,000 per person",
            address:"Japan, 〒106-0032 Tokyo, Minato City, Roppongi, 5 Chome−9−17 1F"
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
            address:"103, Taiwan, Taipei City, Datong District, Ningxia Rd, 091 stall"
        },
        {
            id:"beefnoddles",
            shop:"Liu Shan Dong Beef Noodles",
            image:"assets/beef_shop.jpg",
            description:"Well known for red-braised beef noodles with fair and quite cheap price.",
            dish:"red-braised beef noodles",
            dishimage:"assets/beef.jpg",
            price:"$$ $200–400 per person",
            address:"No. 2, Lane 14, Section 1, Kaifeng St, Liming Village, Zhongzheng District, Taipei City, Taiwan 100"
        },
        {
            id:"tea",
            shop:"The Oolong Project",
            image:"assets/tea_shop.jpg",
            description:"A highly popular, well-loved Taiwanese bubble tea chain that specializes in high-quality oolong tea",
            dish:"Dark Roasted Oolong Milk Tea",
            dishimage:"assets/tea.jpg",
            price:"$ around $30-70 per person",
            address:"There are many branches,please copy the shop name and search for your nearest branches."
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
            address:"25 Kimberley Road, Tsim Sha Tsui, Hong Kong"
        },
        {
            id:"shavedice",
            shop:"Shari Shari",
            image:"assets/ice_shop.jpg",
            description:"A popular dessert chain known for specializing in authentic artisanal Japanese shaved ice, commonly known as kakigori",
            dish:"Kyoto Uji Kintoki ",
            dishimage:"ice.jpg",
            price:"$$ around $60 per person",
            address:"There are many branches,please copy the shop name and search for your nearest branches."
        },
        {
            id:"HongKongdiner",
            shop:"Men Wah Bing Teng",
            image:"assets/bing.jpg",
            description:"A popular chain of nostalgic Hong Kong-style diners ) that originated from a standalone eatery in Kowloon in the 1970s.",
            dish:"Wah BBQ Pork with Egg and Rice",
            dishimage:"BBQpork.jpg",
            price:"$-$$ around $50-100 per person",
            address:"There are many branches,please copy the shop name and search for your nearest branches."
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
        },
        {
            id:"beef offal stew",
            shop:"Lao Day Beef Offal",
            image:"assets/oldday_shop.jpg",
            description:"It is one of Macau’s most famous street food spots, renowned for its rich, aromatic curry beef offal",
            dish:"beef offal",
            dishimage:"assets/oldday.jpg",
            price:"$$ MOP 55 to MOP 100",
            address:"G/F, 8 Rua do Cunha,Taipa Village, Macau."
        },
        {
            id:"pudding",
            shop:"Leitaria I Son",
            image:"assets/pudding_shop.jpg",
            description:"A famous, historic dairy shop and casual cafe with deep roots in Macau and Hong Kong",
            dish:"Steamed Double-Skin Milk",
            dishimage:"assets/pudding.jpg",
            price:"$ 1-50 Mop per person",
            address:"There are many branches,please copy the shop name and search for your nearest branches."
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
            address:"9 Mercer St, London WC2H 9QJ"
        },
        {
            id:"matcha",
            shop:"Tsujiri",
            image:"assets/matcha_shop.jpg",
            description:"Specialise in ceremonial-grade matcha from Uji,Japan, serving Matcha ice cream and dessert",
            dish:"Shiratama Sundae",
            dishimage:"matcha.jpg",
            price:"$ £5–10 per person",
            address:"33 Newport Ct, London WC2H 7PQ"
        },
        {
            id:"korean",
            shop:"WooJung",
            image:"asssets/korean_shop.jpg",
            description:"Serving authetic Korean food with many highlighting dishes, it has generous price and portion.",
            dish:"KKanpung-Gi",
            price:"$$, £10–20 per person",
            address:"73 New Oxford St, London WC1A 1DG"
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
    title.innerText="Recommend Restaurant";

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

    const backButton=document.createElement("button");
    backButton.textContent="Back to city";
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

