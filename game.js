function startscreen() {
    const container = document.getElementById("game-container");
    container.innerHTML="";
    const title=document.createElement("h1");
    title.innerText= "World Map Cuisine";
    const introText=document.createElement("p");
    introText.innerText = "Welcome to World Map Cuisine, where you choose a country and it will give you a 15-minute recipe for you to follow! Ready to travel the world from your kitchen? Pick your destination and let's get cooking!";
    const startButton = document.createElement("button");
    startButton.textContent= "Start";
    startButton.addEventListener("click",countryScreen);
    startButton.id="button";
    container.appendChild(title);
    container.appendChild(introText);
    container.appendChild(startButton);
}

const countries = {
  Japan: {
    flag: "🇯🇵",
    dish: "Gyudon (Beef Rice Bowl)",
    image: "assets/Gyudon.jpg",
    ingredients:[
        "Main:150g thinly sliced beef, ½ yellow onion (thinly sliced), 2 eggs (lightly beaten), 1 cup cooked rice", 
        "broth:60ml water,2 tbsp soy sauce, 2 tbsp mirin, 1 tsp sugar."],
    steps: [
      "1. Combine broth ingredients with sliced onions, simmer 3–4 min until translucent.",
      "2. Add beef, cook 2–3 min until done.",
      "3. Pour in beaten egg, cover, cook 30–40 sec until just set.",
      "4. Serve over rice, garnish with spring onions."
    ]
  },
  Vietnam:{
    flag:"🇻🇳",
    dish:"Bánh Tráng Nướng (Vietnamese Rice Paper Pizza)",
    image:"assets/Vietnam.jpg",
    ingredients:[
        "Main:1 sheet of dry round rice paper, 1 egg, 1 tablespoon finely chopped green onions",
        "Topping (Pick and Choose): Canned tuna, cooked bacon bits, shredded chicken or cheese",
        "Sauses: Kewpie mayo and Sriracha(or sweet chili sause)"
    ],
    steps:[
        "Step 1 :Place a dry, non-stick skillet over medium-low heat. Do not add any oil or water.",
        "Step 2: Place your dry sheet of rice paper directly into the center of the warm pan.",
        "Step 3 :Crack the egg directly onto the middle of the rice paper. Throw on your green onions. Using the back of a spoon, gently scramble the egg and spread it out evenly across the entire surface of the rice paper.",
        "Step 4 :If you are using cheese, tear it into small pieces and scatter it over the egg. Add your tuna, bacon, or chicken now. Let it cook until the egg is completely set and the rice paper underneath becomes beautifully crisp and golden.",
        "Step 5 :Drizzle Kewpie mayo and Sriracha over the top. Fold the rice paper in half like a taco, or roll it up."
    ]
  },
  Thailand:{
    flag:"🇹🇭",
    dish:"Pad Kra Pao(Stir-fried holy basil)",
    image:"assets/thai.jpg",
    ingredients:[
        "Main: 150 g ground meat (chicken or beef or pork), 3 garlic cloved(minced), 1 to 2 thai bird's eye chilies",
        "Herb: 1 cup fresh holy basil or Thai sweet basil leaves",
        "Sause: 1 tbsp oyster sause, 1tsp soy sause, 1tsp dark soy sause, 1 tsp fish sause and 1/2 tsp sugar",
        "Serve: 1 fried egg and hot cooked jasmine rice"
    ],
    steps:[
        "Step 1 :Heat 2 tablespoons of oil in a wok or skillet over high heat. Crack the egg in. Let the edges get super crispy and brown while the yolk stays runny. Scoop it out and set it aside.",
        "Step 2 : Toss in garlic and chilies. Stir-fry for about 30 seconds until they smell amazing",
        "Step 3 : Add the ground meat to the pan. Break it up with your spatula and stir-fry until it is mostly cooked through and starting to brown.",
        "Step 4 : Pour in all sause ingridents, stir fry until it is mostly cooked through and starting to brown",
        "Step 5 : Turn off the heat. Throw in the fresh basil leaves. Stir them into the hot meat until they wilt from the residual heat.",
        "Step 6 : place the warm rice onto a plate, pile the savory basil meat next to it,and top it all off with crispy fried egg."
    ]
  },
  Korea:{
    flag:"🇰🇷",
    dish:"Kimchi Bokkeumbap (Korean Kimchi Fried Rice)",
    image:"assets/korean.png",
    ingredients:[
        "Main: 1 cup of day-old rice, 0.5 cup of well-fermented kimchi(chopped into bite-sized pieces),optional proten(bacon,spam etc), 1 chopped green onion (separate whites and greens)",
        "Sause: 1tbsp kimchi juice, 0.5 tbsp Gochujang and 1tsp soy sause",
        "Touches: 1 tsp toasted sesame oil, 1egg and toasted sesame seeds for garnish",
    ],
    steps:[
        "Step 1 : Heat a splash of oil in a non-stick skillet over medium-high heat. Fry your egg so it has crispy edges and a runny yolk. Slide it out of the pan and set it aside.",
        "Step 2 : In the same skillet, add your chopped bacon, Spam, or tuna along with the white parts of the green onion. Stir-fry for 2 minutes until the protein starts to brown and release its oils.",
        "Step 3 : Toss in the chopped kimchi. Stir-fry for about 2 minutes until it softens and turns slightly translucent.",
        "Step 4 : Turn the heat down to low. Add your cold rice, the Gochujang, soy sauce, and kimchi juice. Use your spatula to break up any clumps of rice and thoroughly incorporate the sauce until the rice is evenly stained red.",
        "Step 5 : Drizzle the toasted sesame oil over the rice and toss in the green parts of the chopped scallions. Give it one final mix.",
    ]
  },
  Singapore:{
    flag: "🇸🇬",
    dish: "Singaporea Economic Bee Hoon",
    image:"assets/singapore.png",
    ingredients:[
        "Main: 100 g thin rice vermicelli, 0.5 cup shredded cabbage and 0.5 cup bean sprouts, 2 garlic cloves(minced)",
        "Sause: 1 tbsp light soy sauce, 1 tsp dark soy sauce (for that classic brown color), 1 tsp oyster sauce, ½ tsp sesame oil, and ¼ cup warm water",
        "Touches(Optional): A tbsp of sambal chili paste and a fried egg"
    ],
    steps:[
        "Step 1: Place your dry rice vermicelli in a bowl of warm water. Let it soak for 5 minutes until pliable but still slightly firm. Drain well.",
        "Step 2: In a small bowl, whisk together the light soy sauce, dark soy sauce, oyster sauce, sesame oil, and warm water.",
        "Step 3: Heat 1 tablespoon of oil in a wok or large skillet over medium-high heat. Add the minced garlic and stir-fry for 30 seconds until fragrant.",
        "Step 4: Toss in the shredded cabbage and bean sprouts. Stir-fry quickly for 1 minute until they start to soften but still keep their crunch.",
        "Step 5: Add the drained noodles and pour the sauce mixture right over them. Using tongs or chopsticks, toss everything continuously on high heat. The noodles will absorb the dark, savory sauce and cook through in about 2 to 3 minutes.",
        "Step 6: Pile the noodles onto a plate, add a spoonful of spicy sambal chili on the side and a fried egg on top (Optional)"
    ]
  },
  Indonesia:{
    flag: "🇮🇩",
    dish: "Nasi Goreng (Indonesian Fried Rice)",
    image:"assets/indonesia.jpg",
    ingredients:[
      "Main: 1 cup of cold, precooked jasmine rice, 1 egg, 1 piece of finely diced chicken breast, 2 large eggs",
      "Sause: 2 finely minced garlic, 1 finely sliced small shallot, 1 finely chopped red bird's eye chili,0.5 tsp shrimp paste",
      "Indoesian sweet soy sause alternative: equal amount of regular soy sause and brown sugar "
    ],
    steps:[
      "Step 1: Add regular soy sause into a pan, add brown sugar into the pan until it fully melted, pour the mixture aside",
      "Step 2: Heat 1 tablespoon of oil in a wok or large frying pan over high heat. Fry the eggs until the edges are crispy but the yolks stay runny. Remove and set aside.",
      "Step 3: Add the remaining oil to the pan. Stir-fry the garlic, shallot, and chili for about 1 minute until fragrant",
      "Step 4: Toss in the diced chicken. Stir-fry for 3 to 4 minutes until it turns white and is completely cooked through.",
      "Step 5: Lower the heat slightly to medium-high. Add the cold rice, breaking up any large clumps with your spatula.",
      "Step 6: Pour the kecap manis, regular soy sauce, and shrimp paste (if using) evenly over the rice. Stir-fry rapidly for 2 minutes, ensuring all grains are coated and starting to toast and caramelize against the hot pan.",
      "Step 7: : Divide the rice between two plates. Top each with a crispy fried egg and garnish with fresh cucumber and tomato slices on the side."
    ]
  },
  Spain:{
    flag:"🇪🇸",
    dish:"Gambas al Ajillo (Spanish Garlic Shrimp)",
    image:"assets/spain.jpg",
    ingredients:[
      "Main: 150g shrimp of peeled and de-veined shrimp, pat them completely dry with a paper towel, 4 to 5 cloves of garlic.",
      "Condiments: 0.25 cup of virgin olive oil, 1 dried ref chili, 1 tbsp fresh lemon juice and a handful of finely chopped fresh parsley"
    ],
    steps:[
      "Step 1: Add the olive oil, sliced garlic, and dried chilli flakes to a cold pan. Turn the heat to medium-low. Heating them together from cold allows the garlic to slowly infuse the oil without burning.",
      "Step 2: Once the garlic starts to gently sizzle and turn a very pale golden colour, turn the heat up to medium-high. Add the shrimp in a single layer. Cook for about 1 to 2 minutes per side until they turn pink and curl into a C shape",
      "Step 3: Take the pan off the heat immediately so the shrimp don't overcook. Squeeze the fresh lemon juice over the top and stir in the chopped parsley. The residual heat will keep the oil sizzling.",
      "Step 4: Serve it immediately right out of the pan, grab a piece of crusty bread and dip the bread into the garlic infused olive oil"
    ]
  },
  Argentina:{
    flag:"🇦🇷",
    dish:"Chimichurri Steak (Quick-Seared Steak with Fresh Herb Sauce)",
    image:"assets/argentina.jpg",
    ingredients:[
      "Main: 1 think-cut steak",
      "Sause: 0.5 cup fresh flat-leaf parsley, 2 minced garlic cloves, 1tbsp red wine vinegar, 3tbsp extra virgin olive oil, 0.5 tsp dried oregano, A pinch of red pepper flakes, salt and black pepper"
    ],
    steps:[
      "Step 1: In a small bowl, mix the finely chopped parsley, minced garlic, red wine vinegar, olive oil, oregano, red pepper flakes, salt, and pepper. Set aside",
      "Step 2: Pat your steak dry with a paper towel and season both sides generously with salt and black pepper.",
      "Step 3: Heat a skillet over high heat with 1 tablespoon of oil. Once the pan is smoking hot, sear the steak for 1.5 to 2 minutes per side for medium-rare. ",
      "Step 4: Remove the steak from the pan and let it rest on acutting board for 2 minutes, slice it thinly against the grain, spoon the fresh chimichurri generously over the top."
    ]
  },
  Italy:{
    flag:"🇮🇹",
    dish:"Spaghetti Cacio e Pepe (Cheese and Pepper Pasta)",
    image:"assets/italy.jpg",
    ingredients:[
      "Main: 100g spaghetti or bucatini, 40g finely grated Pecorino Romano, 1tsp whole black peppercorns.",
      "Seasoning: salt for pasta water"
    ],
    steps:[
      "Step 1: Bring a pot of water to boil, salt it, drop the spaghetti and cook it until it is al dente.",
      "Step 2: While the pasta cooks, crush your peppercorns coarsely. Put them into a dry skillet over medium heat and toast them for about 1 minute until you can smell their intense aroma. Ladle a splash of the boiling pasta water directly into the skillet with the pepper.",
      "Step 3: Put your finely grated cheese into a small bowl. Add a splash of warm pasta water and whisk it with a fork untilit forms a smooth, thick paste.",
      "Step 4: Transfer the cooked spaghetti directly from the pot into the skillet with pepper water, turn off the heat. Add the cheese paste and another splash of pasta water. Toss and stir.",
      "Step 5: Transfer the creamy pasta immediately to a warm plate, Optional to garnish with an extra sprinkle of grated Pecorino Romano and a final crack of fresh black pepper. "
    ]
  },
  Portugal:{
    flag:"🇵🇹",
    dish:"Pica-Pau (Portuguese Woodpecker Beef)",
    image:"assets/portugal.jpg",
    ingredients:[
      "Main: 200g of beef steak, cut into bite-sized cubes, 4 sliced thinly large cloves",
      "Sause: 0.5 cup of pale lager beer, 1.5 tbsp butter, 1 tbsp olive oil, 1 bay leaf, 1 tsp yellow mustard, a splash of white wine vinegar",
      "Toppings: Pickled cauliflower, carrots, and olives",
      "Seasoning: Salt, black pepper and piri-piri sause"
    ],
    steps:[
      "Step 1: Pat the beef cubes dry with a papertowel. Season them generously with salt, black pepper and a few drops of hot sause.",
      "Step 2: Heat the olive oil and half of the butter in a heavy skillet over high heat. Once the pan is smoking hot, add the beef cubes in a single layer. Sear them quickly for about 1 minute per side until they get a nice brown crust but remain pink in the middle. Remove the beef from the skillet and set it aside on a plate.",
      "Step 3: Turn the heat down to medium. In the same pan, add the remaining butter, sliced garlic, and the bay leaf. Cook for 1 minute until the garlic is fragrant and soft (do not let it burn). Pour in the beer, yellow mustard, and vinegar. Stir well, scraping up any browned bits from the bottom of the pan, and let the sauce bubble and reduce by half.",
      "Step 4: Return the beef and its accumulated juices to the skillet. Toss everything together for 30 seconds to heat the beef through and coat it in the glossy, velvety sauce. Turn off the heat.",
      "Step 5: Transfer the beef and sauce to a shallow plate. Scatter the pickled vegetables and olives over the top."
    ]
    },
  Taiwan:{
    flag:"🇹🇼",
    dish:"San Bei Ji(Taiwanese Three-Cup Chicken",
    image:"assets/taiwan.jpg",
    ingredients:[
      "Main: 500g chicken thighs, 1 bulb of garlic, 1 inch piece of sliced ginger,1 big handful of fresh Thai basil",
      "Sause: 2 tablespoons toasted sesame oil, 2 tablespoons light soy sause, 2 tablespoons Chinese cooking wine",
    ],
    steps:[
      "Step 1: Heat the seasme oil in a wok over medium heat.",
      "Step 2: Fry the ginger and garlic until golden.",
      "Step 3: Turn the heat up to high and add the chicken, tossing for 2-3 minutes until the outside turns white.",
      "Step 4: Pour in the soy sause, dark soy and cooking wine.",
      "Step 5: Simmer rapidly for 5 minutes until the sauce reduced into a thick mahogany glaze",
      "Step 6: Toss in the Thai basil, stir until wilted and serve over while rice"
    ]
  },
  Brazil:{
    flag:"🇧🇷",
    dish: "Feijoada (Black Bean & Pork Stew",
    image:"assets/brazil.jpg",
    ingredients:[
      "Main: 6 slices of diced bacon, 200g smoked sausage into sliced, 0.5 cup of diced onion and garlic, 2 cans of rinced black beans",
      "Sause: 1 tbsp olive oil, 1 cup chicken broth, 2-3 bay leaves. 1 tsp dried oregano, plus salt and pepper to taste",
      "Optional: pre-cooked jasmine rice for serving"
    ],
    steps:[
      "Step 1: Heat the olive oil in a large pot over medium heat. Add the diced bacon and cook until crispy",
      "Step 2: Add the sliced sausage, diced onions, and garlic. Sauté for another 3 minutes until the vegetables are soft.",
      "Step 3: Stir in the black beans, broth, bay leaves, oregano, and a pinch of salt and pepper. Bring the mixture to a boil, then reduce the heat to low.",
      "Step 4: Let it simmer uncovered for 15 minutes (or until the stew reaches your desired thickness).",
      "Step 5: Remove the bay leaves and serve the rich, hearty stew piping hot over a bed of fluffy white rice."
    ]
  },
  Philippines:{
    flag:"🇵🇭",
    dish: "Adobong Pusit (Squid Adobo)",
    image:"assets/Philippines.jpg",
    ingredients:[
      "Main: 500g fresh squid, cleaned and sliced into rings, 4 minced cloves garlic, 1 small chopped onion, 1 diced medium tomato,",
      "Sause: 3tbsp soy sauce, 2tbsp white vinegar or cane vinegar, 1tbsp cooking oil, 1 piece dried bay leaf, salt and ground black pepper to taste",
    ],
    steps:[
      "Step 1: Heat oil in a pan over medium heat, saute the garlic, onion and tomato until the onions are soft and fragrant.",
      "Step 2: Toss in the cleaned squid rings. Cookk for about 2 minutes",
      "Step 3: Pour in the soy sause and drop in the bay leaf, let it simmer for 2 minutes",
      "Step 4: Pour in the vinegar. Do not stir immediately, let it cook uncovered for about 3 minutes to allow the raw vinegar taste to cook off",
      "Step 5: Stir everything together, season with black pepper and salt if needed, simmer for 1 more minute and serve hot with steamed white rice."
    ]
  },
  India:{
    flag:"🇮🇳",
    dish:"Khichdi",
    image:"assets/india.jpg",
    ingredients:[
      "Main: 0.5 cup white basmati rice, 0.5 cup split red lentils",
      "Sause: 2.5 cups water, 1tbsp of neutral oil, 0.5 tsp cumin seeds, 0.25 tsp turmeric powder, salt to taste"
    ],
    steps:[
      "Step 1: Place the rice and red lentils together in a bowl, wash thoroughly under cold water, and drain.",
      "Step 2: Heat the oil in a pressure cooker over medium heat. Add the cumin seeds and let them sizzle for 30 seconds until fragrant.",
      "Step 3: Add the drained rice, lentils, turmeric, and salt. Stir-fry gently for 1-2 minutes.",
      "Step 4: Pour in the water and give it a good stir. Secure the pressure cooker lid.",
      "Step 5: Cook on medium-high heat for 1 whistle, then reduce the heat to low and let it cook for 5 to 7 minutes.",
      "Step 6: Turn off the heat and allow the pressure to release naturally before opening, stir well and serve hot."
    ]
  }


};

function countryScreen() {
  const container = document.getElementById("game-container");
  container.innerHTML = "";
  const title = document.createElement("h2");
  title.textContent = "Choose a Country";
  container.appendChild(title);

  const buttonGrid= document.createElement("div");
  buttonGrid.className="country-button-grid";
  Object.keys(countries).forEach(name => {
    const btn = document.createElement("button");
    btn.textContent = `${name} ${countries[name].flag}`;
    btn.className = "game-button";
    btn.onclick = () => recipeScreen(name);
    buttonGrid.appendChild(btn);
});
  container.appendChild(buttonGrid);

}


function recipeScreen(countryName) {
  const data = countries[countryName];
  const container = document.getElementById("game-container");
  container.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = countryName;

  const dish = document.createElement("h3");
  dish.textContent = data.dish;

  const ingredientsTitle = document.createElement("h4");
  ingredientsTitle.textContent = "Ingredients";

  const ingredients = document.createElement("ul");

  data.ingredients.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ingredients.appendChild(li);
  });

  const instructionsTitle = document.createElement("h4");
  instructionsTitle.textContent = "Instructions";

  const stepsContainer = document.createElement("div");
  data.steps.forEach(step => {
    const p = document.createElement("p");
    p.textContent = step;
    stepsContainer.appendChild(p);
  });

  const image=document.createElement("img");
  image.src = data.image;
  image.alt= data.dish;
  image.className = "recipe-image";

  const Words=document.createElement("h2");
  Words.innerText= "Enjoy your delicious meal!";

  const backBtn = document.createElement("button");
  backBtn.textContent = "Back";
  backBtn.onclick = countryScreen;
  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Return Home";
  homeBtn.onclick = startscreen;

  const recipeLayout = document.createElement("div");
  recipeLayout.className= "recipe-layout";

  const left = document.createElement("div");
  left.className="recipe-left";

  const center= document.createElement("div");
  center.className="recipe-center";

  left.appendChild(ingredientsTitle);
  left.appendChild(ingredients);

  center.appendChild(image);
  recipeLayout.appendChild(left);
  recipeLayout.appendChild(center);

  const buttonContainer= document.createElement("div");
  buttonContainer.className="button-container";
  buttonContainer.append(backBtn,homeBtn);
    
   container.append(title, dish,recipeLayout, ingredientsTitle,stepsContainer, Words,buttonContainer);
}

/*Screen loading*/
document.addEventListener("DOMContentLoaded", startscreen);
