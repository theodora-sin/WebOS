function startscreen() {
    const container = document.getElementById("mood-container");
    container.innerHTML="";
    const title=document.createElement("h1");
    title.innerText= "Mood Food Matrix";
    const introText=document.createElement("p");
    introText.innerText = "Welcome to the Mood Food Matrix! This is a place where you can navigate exactly what you should eat or cook, based entirely on your mood. Come on in and explore the fun side of food!";
    const startButton = document.createElement("button");
    startButton.textContent= "Start";
    startButton.addEventListener("click",choosescreen);
    startButton.id="button";
    container.appendChild(title);
    container.appendChild(introText);
    container.appendChild(startButton);
}

const moodEmoji={
    Exhausted:"😫/😮‍💨/🫠",
    Cozy:"🛌/☕️/🕯️",
    Happy:"😄/😆",
    Craving:"🤤/😋",
    Sad:"😔,😢",
    Angry:"😡,😠",
    Surprise:"😲,"
};


const mood_cook ={
    Exhausted:{
        dish:"Carbonara Buldak Ramen ",
        image:"assets/buldak.jpg",
        describe:"When your brain is fried and you have zero energy, this is the ultimate hack. It takes instant ramen and turns it into a creamy, comforting masterpiece with almost zero extra effort.",
        ingredients:[
            "Main ingredients: 1 package Samyange Buldak Carbonara Hot Chikcken Ramen, 1 large egg yolk, 1 tbsp mayonnaise, 0.25 to 0.5 cup heavy cream or whole cream, 1 slice of cheddar cheese, a handful of shredded mozzarella",
            "Optional: Cooked bacon bits, sliced mushroom,chopped green onions, kimichi(side dish)"
        ],
        Steps:[
            "Step 1: Cook the ramen noodlesin 600 ml of boiling water for 3-4 minutes.",
            "Step 2: Before drain, scoop out about 4 tbsp of noodle water and set it aside, drain the rest of water.",
            "Step 3: In a seperate bowl, whisk together the egg yolk, mayonnaise, the entire cheese powder packet from the ramer and your cream or milk.",
            "Step 4: Add the liquid hot sause packet to the sause mixture.(Use half the packet if you prefer a milder kick, or the whole thing if you love the spice.",
            "Step 5: Return the drained noodles to the sausepan over very low heat, pour creamy sauce mixture over the noodles.",
            "Step 6: Toss and stir continuously for 1-2 minutes. Add a splash of the reserved starchy water if the sauce feels too thick. Drop your cheese in and let it melt into the sauce until glossy and creamy.",
            "Step 7: Plate immediately and top with your optional ingredient, Bon appetit! "
        ],
        explantion:"This recipe is the definition of low-effort, high reward. It requires only one pot and gives you that rich, spicy, creamy comfort your brain is screaming for when you're too tired to function."
    },
    Cozy:{
        dish:"Grilled Cheese sandwich with Tomato Soup",
        image:"assets/soup.jpg",
        descibe:"When the world outside gets a little too loud, or the weather turns chilly, there is nothing better than retreating to the kitchen to cook something that feels like a giant hug. This is the place for slow-down, comfort-first recipes that fill your home with incredible aromas and your soul with pure warmth.",
        ingredients:[
            "Tomato soup: 375g tomatoes (use ripe,seasonal tomatoes), 1tsp balsamic vinegar, 1 tsp olive oil, 0.5 tsp sugar, 0.25 tsp salt, 0.25 finely chopped red onion, 0.5 finely chopped garlic clove, a small handful of fresh basil leaves, 0.25 tsp tomato paste, 1 cups of vegetable broth, 1tbsp cream, salt and black pepper to taste",
            "Grilled Cheese sandwich: 2 slices of sourdough, 0.25 cups grated mozzarella, 2 cups grated mature cheddar,butter"
        ],
        Steps:[
            "Step 1: Toss the tomato with olive oil, balsamic vinegar, sugar and salt, then roast them in the oven at 200°C for around 15-20 minutes until soft and slightly charred.",
            "Step 2: Placed your chopped onion and garlic into a small saucepan over medium heat until soft. Stir in the tomato paste and let it cook for 1 minute",
            "Step 3: Add tomatoes, broth and fresh basil leaves into saucepan, bring to a gentle boil, turn the heat down and simmer for 10 minutes.",
            "Step 4: Use an immersion blender and blend until completely smooth and velvety.",
            "Step 5: Mix both cheese together and add into half of the slices of bread. Butter both side of remaining bread generously.",
            "Step 6: Cook in a non-stick pan over medium heat until the cheese is melted and the sandwiches are gloden brown on both side.",
            "Step 7: Serve the homemade tomato soup with a drizzle of cream and fresh basil leaves with the grilled cheese sandwiches."
        ],
        explanation:"This meal demands simplicity, nostalgia, and food that feels like a safety blanket.When your knife cuts through the sandwich, creating satisfying crunch that promises pure comfort. The rich cheddar and mozzarella melt into a gooey buttery. When you dip it into the soup,the velvety, slightly tangy warmth of the tomato soup creates the perfect combo.Every single bite is warm and satisfy. This make you want to slow down,and enjoy your meal."
    },
    Happy:{
        dish:"Chocolate Burnt Basque Cheesecake",
        image:"assests/cheesecake.jpg",
        descibe:"Burnt Basque Cheesecake is famous for its deliberately scorched, beautifully browned top and creamy interior. Infusing it with rich chocolate turns it into a luxurious centrepiece that feels like a true culinary celebration.",
        ingredients:[
            "Main ingredients: 160g dark chocolate, 233g double cream, 413g cream cheese, 84g caster sugar, 4.5g cocoa powder, 8g plain flour, 1.3g fine sea salt, 3 large eggs wishked (around 156g)",
            "Equipment: 6-inch springform tin"
        ],
        Steps:[
            "Step 1: Preheat oven to 220°C fan. Line a 6-inch springform pan with parchment on the base and sides. Let the cream cheese come to room temeperature.",
            "Step 2: Melt the chopped chocolate and cream together over gently simmering water. Stir until smooth and cool to 30–35°C.",
            "Step 3: Beat the cream cheese with sugar, cocoa powder, flour and salt on low speed until smooth.",
            "Step 4: Slowly add the whisked eggs while mixing on low until fullt incorporated and lump free.",
            "Step 5: Slowly mix in the cooled chocolate mixture until smooth.",
            "Step 6: Wrap the outside of the tin with wet tea towels covered in foil. Pour the batter through a sieve into the lined pan.",
            "Step 7: Bake for about 30-35 mintues. The center should still wobble.",
            "Step 8: Cool at room temperature for 30 minutes, then refrigerate for at least 18 hours before serving."
        ],
        explanation:[
            "This Chocolate Burnt Basque Cheesecake is rich, indulgent, and surprisingly easy to make. Unlike a traditional cheesecake.",
            "Baked at a high temperature, the top develops a deep, caramelized chocolate flavor while the centre stays smooth, creamy, and almost custard-like. Every slice is intensely chocolatey with a velvety texture that melts in your mouth, making it a perfect dessert for any occasion."
        ]
    },
    Craving:{
        dish:"Nutella Crepe:",
        image:"assets/crepe.jpg",
        describe:"When you're suddenlt craving something sweet, you usually don't want to wait long. Nutella crepes come together in just a few minutes and feel like a special treat, even though they're made with simple ingredients.",
        ingreidents:[
            "Main ingredients: 0.5 cup of milk, 1 large egg, 3tbsp of Nutella, 0.25 cup of all-purpose flour",
            "Topping/Filling(Optional): Nutella, strawberries, bananas, whipped cream, powdered sugar and many more"
        ],
        Steps:[
            "Step 1: Whisk together milk, egg, and Nutella until smooth. Add the flour and whisk until no lumps remain.",
            "Step 2: Heat a lightly greased non-stick pan over medium heat.",
            "Step 3: pour 0.25 cup of batter into the pan. Tilt the pan to spread the batter into thin, even layer.",
            "Step 4: Cook for 30-45 seconds,until the edges are set and the surface is mostly dry. Filp and cook for another 15-20 seconds",
            "Step 5: Repeat with the remaining batter.",
            "Step 6: Fill the crepes with your favourite topping, fold or roll it up. Enjoy!"
        ],
        explanation:[
            "The best part is spreading Nutella onto a warm crepe and watching it melt into a smooth, chocolatey filling. The crepe is soft and buttery with lightly golden edges, making every bite rich and comforting.",
            "You can keep it simple or add your favorite toppings like sliced bananas, fresh strawberries, whipped cream, or even a scoop of vanilla ice cream. It's a quick dessert that feels a little indulgent and is perfect for satisfying a sweet craving without much effort."
        ]
    },
    Sad:{
        dish:'Mac & Cheese',
        image:"assets/Mac&Cheese.jpg",
        describe:[
            "When you're feeling a little down, spending some time in the kitchen can be surprisingly comforting. Something is calming about stirring a pot, watching the cheese melt, and making a meal from scratch without having to rush.",
            "A one-pot macaroni and cheese is simple to make, fills the kitchen with a warm, comforting aroma, and gives you a bowl of creamy comfort at the end."
        ],
        Ingredients:[
            "Main ingredients: 113g macaroni, 28g butter, 16g all-purpose flour,240 ml milk, 60g shredded cheddar cheese, 60g shredded mozzarella",
            "Seasoning: 1.5 gram of salt, ground black pepper to taste"
        ],
        Steps:[
            "Step 1: Boiling a large pot of lightly salted water, cook macaroni in the boiling water, follow the instruction of the package.",
            "Step 2: At the same time, melt the butter in a sausepan over medium heat.",
            "Step 3: Whisk in flour, salt and black pepper until smooth about 5 minutes.",
            "Step 4: Slowly pour in milk while constantly stirring cook and stir until mixture smooth and bubbling, and make sure the milk doesn't burn.",
            "Step 5: Add cheddar cheese and mozzarella and stir until melted",
            "Step 6: Drain macaroni and fold into cheese sauce until coated. Serve hot and Enjoy!"
        ],
        explanation:[
            "Macaroni and cheese is a classic comfort food for a reason. The soft pasta, creamy cheese sauce, and buttery flavor make every bite feel cozy and satisfying. It’s easy to make, doesn’t require much effort, and gives you the kind of warm meal you can enjoy while relaxing and taking a quiet moment for yourself.",
            "Sometimes, a simple bowl of homemade mac and cheese is exactly what you need to make a difficult day feel a little better."
        ]
    },
    Angry:{
        dish:"Guacamole Salsa ",
        image:"assets/guacamole.jpg",
        describe:"When you’re feeling angry, frustrated, or just need a way to let off some steam, cooking can be a great way to reset. Instead of reaching for takeout, try making a fresh batch of guacamole salsa. It’s simple, hands-on, and gives you a chance to chop, mix, and create something full of bold flavors.",
        Ingredients:[
            "Main ingredients: 0.25 white onion, 2 crushed garlic cloves, 2 large avocados, 1-2 chopped jalapeno chillies(optional)",
            "Seasoning: 1tbsp white wine vinegar, small pack coriander, 1 lime juiced, 2-3 tbsp olive oil"
        ],
        Steps:[
            "Step 1: Mix the chopped onion and vinegar in a bowl. Let it sit for 15 minutes to soften the onion.",
            "Step 2: Add the garlic, jalapeños (if using), coriander, and a little seasoning. ",
            "Step 3: Add the avocado and mash gently with a fork until combined, leaving some chunks for texture.",
            "Step 4: Stir in the lime juice and adjust the salt to taste.",
            "Step 5: Add 2–3 tablespoons of olive oil and mix until the salsa reaches a loose, chunky consistency."
        ],
        explanation:[
            "When you’re feeling angry or frustrated, cooking can be a surprisingly good way to release some of that energy. Instead of letting those feelings build up, you can put them into something physical—chopping ingredients, mixing everything together, and creating something with your own hands. Making guacamole salsa is perfect for this because it’s simple, hands-on, and a little messy in the best way.",
            "The best part is eating it. Scooping up chunky guacamole salsa with a crispy tortilla chip gives you that satisfying crunch with every bite. It’s a small, enjoyable way to let go of some frustration while treating yourself to something delicious."
        ]

    },
    Surprise:{
        dish:"Chocolate Lava Cake",
        image:"assets/lavacake.jpg",
        describe:"When you’re in the mood for something unexpected, a dessert with a little surprise inside is always more fun. A lava cake looks like a simple chocolate cake from the outside, but the moment you cut into it, a warm, gooey chocolate centre flows out, make it satisfying to make and enjoy.",
        Ingredients:[
            "Main ingredients: 0.5 cup unsalted butter, 168g bittersweet chocolate chopped, 2 large eggs, 2 large egg yolks, 50g of granulated sugar, 1/8 tsp salt, 2tbsp all-purposed flour",
            "optional: Ice cream, berries,chocolate sause"
        ],
        Steps:[
            "Step 1: Preheat the oven 230°C. Grease and lightly flour 6 small ramekins, place them on a baking tray.",
            "Step 2: Melt the butter and chocolate together over low heat, stir until smooth,then set aside.",
            "Step 3: Whisk the eggs, egg yolks,sugar, and salt until the mixture become thick and pale.Gently fold in the melted chocolate mixture and flour until combined.",
            "Step 4: Divide the batter between ramekins. Bake for 6–8 minutes until the edges are firm but the centre is still soft and slightly jiggly.",
            "Step 5: Let the cakes rest for 1 minute. Place a plate over each ramekin, carefully flip it over, and remove the ramekin. Dust with powdered sugar and serve immediately with berries or ice cream if you like."
        ],
        Explanation:[
            "The best part of a lavacake is the moment you cut into it. From the outside, it looks like an ordinary chocolate cake, but inside there's a warm, gooey chocolate center waiting to spill out.The contrast between the soft cake and the rich melted chocolate makes every bite feel special.",
            "It’s the kind of dessert that feels a little magical without being complicated. The short baking time creates that perfect balance between a delicate cake exterior and a flowing chocolate middle, turning a simple treat into a fun and memorable experience."
        ]
    }
}


const mood_eat={
    Exhausted:{
        dish:"Shrimp Tempura Udon",
        image:"assets/udon.jpg",
        describe:[
            "Skip the stove and the heavy prep. You should absolutely try a warm, comforting bowl of Shrimp Tempura Udon right now.",
            "The deep, savoury umami broth immediately soothes your nervous system, while the thick, pillowy udon noodles are pure comfort that require no effort to enjoy. The bright pink swirls of the narutomaki make the dish look incredibly vibrant. Furthermore, the crispy, golden shrimp tempura soak up just enough broth to become juicy while staying crunchy on top. Pair that with the rich, velvety texture of a jammy, half-boiled egg yolk melting into the soup, and you have a meal that feels like a luxurious reward for surviving a long day.",
            "Find a local spot to order it from, or simply assemble it using quick store-bought shortcuts (like frozen udon packs and ready-made tempura). It requires zero culinary effort from you tonight, but delivers maximum satisfaction"
        ]
    },
    Cozy: {
        Dish: "Kimchi-jjigae",
        image:"assests/kimichi.jpg",
        describe:[
            "There is nothing quite like a traditional clay pot arriving at your table, still furiously bubbling and releasing a cloud of steam that instantly warms your face. The secret to this comfort masterpiece is the fermented kimchi, which creates a complex, deeply savory broth that is perfectly tangy and bold, and has just the right amount of spicy kick to wake up your senses.",
            "This stew doesn't just fill your stomach—it completely revives you. The heat clears your head, the bold flavors satisfy your deepest cravings, and the sheer warmth makes you feel grounded and taken care of.",
            "Order it from your favorite Korean spot or grab a ready-to-go container. "
        ]
    },
    Happy:{
        Dish:"Mango Sticky Rice",
        image:"assets/stickyrice.jpg",
        describe:[
            "When you'are already in a great mood, the best choice is to treat yourself.",
            "A fresh serving of mango sticky rice that's both comforting and refreshing.Sweet, ripe mango pairs perfectly with warm sticky rice and creamy coconut sauce, creating a balance of fresh fruit, rich coconut, and chewy texture.",
            "The combination is indulgent without feeling too heavy. The juicy mango adds a bright, natural sweetness, while the coconut-infused sticky rice is soft, fragrant, and comforting.",
            "Grab a mango sticky rice from your favorite Thai restaurant is simple, satisfying, and feels a little special."
        ]
    },
    Craving:{
        Dish:"Oden",
        image:"assets/oden.jpg",
        descibe:[
            "When you're craving something warm, savory, and comforting, a bowl of oden is hard to beat.",
            "Oden is all about warm,comfort. Everything is slowly simmered in a light but flavorful dashi broth, so each ingredient absorbs the rich, savory taste. Every bite is full of different textures, making the dish feel satisfying from start to finish.",
            "Treat yourself to a bowl from a Japanese restaurant or a convenience store if you're in East Asia. It's simple, satisfying, and perfect when you want something that really hits the spot."
        ]
    },
    Sad:{
        Dish:"Ice-cream sandwich",
        image:"assets/icecreamsandwich.jpg",
        descibe:[
            "When you're feeling low, you just want something easy, comforting and familiar. That's where an ice-cream sandwich comes in—it’s the kind of treat you can grab straight from the freezer and enjoy right away.",
            "The best part is the soft cookies on the outside which is soft and gooey, while the cold creamy vanilla ice cream in the middle creates the perfect contrast. It’s sweet, simple, and satisfying without making a mess or needing any extra effort.",
            "It brings back memories of carefree summer days. It’s a little treat that feels comforting in the simplest way."
        ]
    },
    Angry:{
        Dish:"Spicy Buffalo Wings",
        image:"assets/buffalo.jpg",
        describe:[
            "When you’re really angry, sometimes you need a meal that matches that energy. Instead of sitting around feeling frustrated, go out and treat yourself to something bold and satisfying—like a basket of crispy wings or hot fried chicken from your favorite spot.",
            "There’s something incredibly satisfying about food with big flavors and textures. The loud crunch of a crispy coating gives you a little sense of release, while the heat from the spicy sauce wakes up your senses and pulls your attention into the moment.",
            "The best part is the balance of flavors. The spicy, savory chicken paired with a cool ranch or blue cheese dip creates the perfect contrast. It’s messy, flavorful, and comforting—the kind of meal that lets you enjoy the moment and come away feeling a little more relaxed and satisfied."
        ]
    },
    Surprise:{
        Dish: "Omakase",
        image:"assests/omakase.jpg",
        describe:[
            "When you're craving a little surprise but you don't want to do the planning yourself, let someone else take the lead.",
            "The fun of ordering something you didn’t choose yourself is the feeling of discovery. Instead of picking the same familiar dishes, you get to experience new flavors and combinations that you might not have tried before.",
            "Sushi is perfect for this because every piece can bring something different. One bite might be creamy, the next spicy, smoky, or full of fresh flavors and textures. From unique fillings to surprising toppings, each piece feels like a small discovery.",
            "Head to a sushi restaurant and try an omakase experience, where the chef chooses what to serve. It turns a regular meal into something more exciting and unexpected."
        ]
    }

}

let selectedMood = null;


function choosescreen(){
    const container=document.getElementById("mood-container");
    container.innerHTML="";

    const title=document.createElement("h2");
    title.textContent="Quick vibe check: How are we feeling today?";
    container.appendChild(title);

    const buttonGrid= document.createElement("div");
    buttonGrid.className="button-grid";

    Object.keys(moodEmoji).forEach(mood=> {
        const btn= document.createElement("button");
        btn.textContent= `${mood} ${moodEmoji[mood]}`;
        btn.className="game-button";
        btn.onclick=() => eatorcookscreen(mood);
        buttonGrid.appendChild(btn);
    })
    container.appendChild(buttonGrid);
}


function eatorcookscreen(mood){
    selectedMood=mood;
    const container=document.getElementById("mood-container");
    container.innerHTML= "";


    const question= document.createElement("h3");
    question.textContent="Feeling ${mood} ${moodEmoji[mood]}--Do you want to cook or dining outside?";
    container.appendChild(question);

    const buttonContainer= document.createElement("div");
    buttonContainer.className="button-container";

    const eatBtn = document.createElement("button");
    eatBtn.textContent="Eat Out";
    eatBtn.onclick=eatScreen;

    const cookBtn = document.createElement("button");
    cookBtn.textContent="Cook";
    cookBtn.onclick=cookScreen;
    
    buttonContainer.append(eatBtn,cookBtn);
    container.appendChild(buttonContainer);
}

function backButtons(container){
    const buttonContainer=document.createElement("div'");
    buttonContainer.className="button=container";

    const backBtn=document.createElement("button");
    backBtn.textContent="Back";
    backBtn.onclick=choosescreen

    const homeBtn=document.createElement("div");
    homeBtn.textContent="Return Home";
    homeBtn.onclick=startscreen;

    buttonContainer.append(backBtn,homeBtn);
    container.appendChild(buttonContainer);

}



function eatScreen(mood){
    const data = mood_eat[mood];
    const container= document.getElementById("mood-container");
    container.innerHTML ="";

    const title= document.createElement("h2");
    title.textContent=data.dish;
    container.appendChild(title);

    const image=document.createElement("img");
    image.src=data.image;
    image.alt= data.dish;
    image.className = "mood-image";

    data.describe.forEach(paragraph => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    container.appendChild(p);
  });
  backButtons(container);

}


function cookScreen(mood){
    const data = mood_eat[mood];
    const container= document.getElementById("mood-container");
    container.innerHTML ="";

    const title= document.createElement("h2");
    title.textContent=data.dish;
    container.appendChild(title);

    const recipeLayout=document.createElement("div");
    recipeLayout.className = "recipe-layout";
    const left= document.createElement("div");
    left.className = "recipe-left";

    data.describe.forEach(paragraph => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    container.appendChild(p);
  });
  
    const ingredientsTitle = document.createElement("h4");
    ingredientsTitle.textContent = "Ingredients";
    left.appendChild(ingredientsTitle);

    const ingredients = document.createElement("ul");
    data.ingredients.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ingredients.appendChild(li);
    });
    left.appendChild(ingredients);

    const instructionsTitle = document.createElement("h4");
    instructionsTitle.textContent = "Instructions";
    left.appendChild(instructionsTitle);

    data.steps.forEach(step => {
        const p = document.createElement("p");
        p.textContent = step;
        stepsContainer.appendChild(p);
    });
   
    const right = document.createElement("div");
    right.className="mood-right";
    const image=document.createElement("img");
    image.src=data.image;
    image.alt= data.dish;
    image.className = "mood-image";
    right.appendChild(image);

    recipeLayout.append(left,right);
    container,appendChild(recipeLayout);

    const explanation=document.createElement("p");
    explanation.textContent= data.explanation;
    container.appendChild(explanation);

    backButton(container);

}

/*Screen loading*/
document.addEventListener("DoMContentLoaded",startscreen);
