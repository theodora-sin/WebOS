/* Layout:
Intro screen 
Menu Screen
Blog screen */

const blogs=[
    {
        id:"siumai",
        title:"Siu Mai",
        image:"assets/siumai.png",
        alt:"siumai_image",
        paragraphs:[
            "Siu mai is a classic Hong Kong street food which is steaming hot and warm my heart all the time.",
            "These little dumplings wrap with a thin yellow sheet with fish paste inner. Steaming about 15 minutes which make it bouncy and tender. ",
            "The best part is put some sweet soy sauce and chilli oil on Siu mai, make it sweet and savoury, creating a umami flavour, this is one of my comfort food that it hard to replicate."
        ],
        hashtags:["Hong Kong","Savoury","street food"],
    },
    {
        id:"Chapagetti",
        title:"Chapagetti with deep fried fish cake",
        image:"assets/noodles.png",
        alt:"noodles_image",
        paragraphs:[
            "Instant Chapagetti paired with golder, deep-fried Hong Kong style fish cake is my late-night snack option.",
            "The ramen coating with a thick, tangy black bean sause alongside with a bounce and juice fishball make me feel comfort.",
            "Also, don't forget to pair up with a fizzy drink to relax at night."
        ],
        hashtags:["late night snack","Chapagetti","HK style fish cake"]
    },
    {
        id:"MatchaBrownies",
        title:"Matcha Brownies",
        image:"assets/matcha_brownies.jpeg",
        alt:"matcha_brownies_image",
        paragraphs:[
            "Nothing round out of my comfort food with a fresh batch of matcha white chocolate chip brownies.Pairing a warm, fudgy brownie with a steaming hot matcha latte creates the ultimate cozy afternoon escape.",
            "The outside of the brownies id crunchy and inside is soft and chewy.I love to dip a bronwines into a hot matcha, where brownines absorb the flavour of matcha which make the matcha more stronger.",
            "It is easy to bake and is my to go dessert when I am free."
        ],
        hashtags:["matcha","brownines","cozy"]
    },
    {
        id:"buttertteok",
        title:"Butter Tteok",
        image:"assets/buttertteok.jpg",
        alt:"butter_tteok_image",
        paragraphs:[
            "Butter tteok  has crispy, caramelized edges that shatters slightly when you bite into it, inner has a chewy, bouncy,mochi-like center.",
            "This dessert is easy to bake at home, just mix and bake,yet it's naturally gluten-free and it perfectly pair with a hot drink or a scoop of ice-cream on top.",
            "This dessert is my to go dessert when I crave something easy to bake."
        ],
        hashtags:["Korean dessert","viral","baking"]
    },
    {
        id:"hotpot",
        title:"Hotpot",
        image:"assets/hotpot.jpg",
        alt:"hotpot_image",
        paragraphs:[
            "Hotpot is a way to get people together. People put their food in a big pot of hot broth and eat it when it is cooked. This is perfect for when you have a friends over you can talk and laugh and have a nice meal together.",
            "You can put anything in the pot. Like wontons or tofu or vegetables or meat or shrimp. While you wait for the food to cook people usually make their own special sauce to dip their food in. I like curry sauce and XO sauce it is made with dried shrimp and scallops. It tastes really good.",
            "If you have not had hotpot before, you should try it. All you need is a stove and a big pot and some broth and the food you like. Hotpot is not a meal it is something fun to do with your family and friends."
        ],
        hashtags:["Hotpot","HK Culture","Gathering","Foodie","ComfortFood"]
    },
    {
        id:"sesameball",
        title:"Sesame Ball",
        image:"assets/sesameball.jpg",
        alt:"sesameball_image",
        paragraphs:[
            "In my opinion, Sesame balls are the best thing to eat during Lunar New Year. They make people happy, Bring good luck.",
            "The outside of sesame balls is crunchy and chewy, like mochi. It is covered with white or black sesame seeds. Inside sesame balls it has a hollow center made from red bean paste or mung bean paste.",
            "When sesame balls are freshly fried they are the best when they are warm. If you ever get to try sesame balls during Lunar New Year you should definitely try them."
        ],
        hashtags:["LNY","Tradition Snacks","AsianDesserts"]
    },
    {
        id:"pineapplebun",
        title:"Pineapple Bun",
        image:"assets/pinapplebun.jpg",
        alt:"pineapplebun_image",
        paragraphs:[
            "Pineapple Bun is a beloved traditional pastry from Hong Kong. Despite its name, it actually doesn’t contain any pineapple,the name comes from its golden, crackly top layer that looks like the texture of a pineapple which make from cookie dough.",
            "The top is a sweet cookie-like crust that is crispy and slightly crumbly, while the bottom is a soft, fluffy milk bread with a pillowy texture. The contrast between the crunchy topping and the tender bread makes it a classic Hong Kong favorite.",
            "The perfect way to enjoy a pineapple bun is with a cup of iced milk tea in the morning or tea time, a simple combination that brings back memories of Hong Kong bakeries."
        ],
        hashtags:["HK Bakery","TraditionFood","HongKongCulture"]
    },
    {
        id:"eggtarts",
        title:"Egg Tarts",
        image:"assets/eggtarts.jpg",
        alt:"eggtarts_image",
        paragraphs:[
            "Egg tarts are really something in Hong Kong. They have two kinds of bases for egg tarts. You can get a base that's like a buttery cookie or one that is like flaky puff pastry.",
            "I have not been able to make egg tarts like the ones I had, in Hong Kong. The pastry is what is hard to get right. It has a lot of layers that are folded to make it light and flaky.",
            "The outside of the egg tarts is crispy and the inside is soft and creamy. This is what makes egg tarts so delicious.",
            "The egg tarts with the cookie base are different. The base is sweet and soft. It still goes really well with the egg custard inside.",
            "I personally think the puff pastry egg tarts are the best. Egg tarts are even more delicious when you have them with a cup of milk tea."
        ],
        hashtags:["HKBake","HK Style","TraditionalBakery"]
    }
    
];

const container=document.getElementById("food-container");

/*start screen*/
function startScreen(){
    container.innerHTML="";
    container.classList.add("fade-in");

    const title= document.createElement("h1");
    title.innerText="Comfort Food Blog";

    const introText=document.createElement("p");
    introText.innerText="Welcome to Comfort food blog !";
    introText.innerText="This is a space where I share my food blogs. I believe that food is more than just fuel. it's a way to connect, to heal and to celebrate the joy of life. Here, you will find a collection of food from something I made to something I crave. Hoping to spread happeniness through food to everyone"

    const startButton=document.createElement("button");
    startButton.textContent="Start";
    startButton.className="btn";
    startButton.addEventListener("click",menuScreen);

    container.append(title,introText,startButton);
}

/*menu screen*/
function menuScreen(){
    container.innerHTML="";
    container.classList.add("fade-in");    

    const title=document.createElement("h2");
    title.innerText="Choose a blog you want to visit";
    container.appendChild(title)

    const grid=document.createElement("div");
    grid.className="blog-menu-grid";

    blogs.forEach(post => {
        const card = document.createElement("button");
        card.className = "blog-card";
        card.setAttribute("aria-label", "Read: " + post.title);

        const img=document.createElement("img");
        img.src=post.image;
        img.alt=post.alt;
        img.className = "foodimage blog-card-img";

        const label = document.createElement("span");
        label.innerText = post.title;
 
        card.append(img, label);
        card.addEventListener("click", () => detailScreen(post.id));
        grid.appendChild(card);
    }); 
    container.appendChild(grid);

    const backButton=document.createElement("button");
        backButton.textContent="Back to intro";
        backButton.className= "btn";
        backButton.addEventListener("click",startScreen);
        container.appendChild(backButton); 
}

/*Blogs*/
function detailScreen(postId){
    const post = blogs.find(p => p.id === postId);
    if (!post) return;
    
    container.innerHTML="";
    container.classList.add("fade-in"); 
    
    const heading=document.createElement("h3");
    heading.innerText=post.title;
    container.appendChild(heading);

    const img= document.createElement("img");
    img.src=post.image;
    img.alt=post.alt;
    img.className="foodimage";
    container.appendChild(img);

    post.paragraphs.forEach(text => {
        const p = document.createElement("p");
        p.innerText = text;
        container.appendChild(p);
    });
    
    const hashtags=document.createElement("p");
    hashtags.innerText=post.hashtags
        .map(tag => "#" + tag.replace(/\s+/g, ""))
        .join(" ");
    hashtags.className="hashtags";
    container.appendChild(hashtags);

    const backButton=document.createElement("button");
    backButton.textContent="Menu";
    backButton:className= "btn";
    backButton.addEventListener("click", menuScreen);
    container.appendChild(backButton);


}

/*Screen loading*/
document.addEventListener("DOMContentLoaded", startScreen);

