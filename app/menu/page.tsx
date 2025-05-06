"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import WhatsAppButton from "@/components/whatsapp-button"

export default function MenuPage() {
  // Selected category state
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Menu categories and items
  const menuCategories = [
    {
      id: "salads",
      name: "Salads",
      description: "Fresh, crisp salads prepared with locally sourced ingredients.",
      items: [
        {
          name: "Village Salad",
          description: "Tomatoes, cucumbers, peppers, onions, olives",
          price: 300,
          image: "/images/menu/village-salad.png",
        },
        {
          name: "Arugula Salad",
          description: "Arugula, grana, tomatoes",
          price: 450,
          image: "/images/menu/arugula-salad.png",
        },
        {
          name: "Boiled/Grilled Vegetable",
          description: "Eggplant, pumpkin, tomato, onion, carrot",
          price: 400,
          image: "/images/menu/grilled-vegetables.png",
        },
        {
          name: "Caesar Salad",
          description: "Mozzarella, tomatoes, arugula, eggs, bacon",
          price: 450,
          image: "/images/menu/caesar-salad.png",
        },
        {
          name: "Panorama Salad",
          description: "Red/white lettuce, carrots, corn, S. green, arugula, cucumber, tomatoes",
          price: 450,
          image: "/images/menu/panorama-salad.png",
        },
        {
          name: "Pickled Salad",
          description: "Assorted pickled vegetables",
          price: 200,
          image: "/images/menu/pickled-salad.png",
        },
        {
          name: "Olive Salad",
          description: "Assorted olives with herbs and seasonings",
          price: 200,
          image: "/images/menu/olive-salad.png",
        },
        {
          name: "Stuffed Baked Vegetables",
          description: "Seasonal vegetables stuffed with aromatic herbs and rice",
          price: 400,
          image: "/images/menu/stuffed-vegetables.png",
        },
      ],
    },
    {
      id: "appetizers",
      name: "Appetizers",
      description: "Delicious starters to begin your culinary journey.",
      items: [
        {
          name: "Italian Antipasto",
          description: "Mix ham & cheese",
          price: 1200,
          image: "/images/menu/italian-antipasto.png",
        },
        {
          name: "Mix of Cheeses",
          description: "Selection of local and imported cheeses",
          price: 700,
          image: "/images/menu/cheese-platter.png",
        },
        {
          name: "Sauteed Spinach",
          description: "Fresh spinach sautéed with garlic and olive oil",
          price: 300,
          image: "/images/menu/sauteed-spinach.png",
        },
        {
          name: "Fresh Mushrooms",
          description: "Fried or grilled mushrooms with herbs",
          price: 400,
          image: "/images/menu/mushrooms.png",
        },
        {
          name: "Bruschetta Mix",
          description: "Assorted bruschetta with various toppings",
          price: 250,
          image: "/images/menu/bruschetta.png",
        },
      ],
    },
    {
      id: "soup",
      name: "Soup",
      description: "Hearty and flavorful soups made fresh daily.",
      items: [
        {
          name: "Chicken Soup",
          description: "Traditional chicken soup with vegetables",
          price: 300,
          image: "/images/menu/chicken-soup.png",
        },
        {
          name: "Vegetable Soup",
          description: "Fresh seasonal vegetables in a light broth",
          price: 250,
          image: "/images/menu/vegetable-soup.png",
        },
        {
          name: "Fish Soup",
          description: "Flavorful soup with fresh local fish",
          price: 300,
          image: "/images/menu/fish-soup.png",
        },
      ],
    },
    {
      id: "pasta-risotto",
      name: "Pasta & Risotto",
      description: "Authentic Italian pasta and creamy risotto dishes.",
      items: [
        {
          name: "Ravioli with Shrimp & Truffle",
          description: "Handmade ravioli filled with shrimp and truffle",
          price: 700,
          image: "/images/menu/shrimp-ravioli.png",
        },
        {
          name: "Tagliatelle with Shrimp",
          description: "Tagliatelle with shrimp, pumpkin, and tomato",
          price: 700,
          image: "/images/menu/tagliatelle-shrimp.png",
        },
        {
          name: "Seafood Spaghetti",
          description: "Spaghetti with mixed seafood in a light sauce",
          price: 600,
          image: "/images/menu/seafood-spaghetti.png",
        },
        {
          name: "Spaghetti Carbonara",
          description: "Classic carbonara with eggs, cheese, and pancetta",
          price: 600,
          image: "/images/menu/carbonara.png",
        },
        {
          name: "Penne Arrabiata",
          description: "Penne pasta in a spicy tomato sauce",
          price: 600,
          image: "/images/menu/penne-arrabiata.png",
        },
        {
          name: "Risotto with Shrimp & Pumpkin",
          description: "Creamy risotto with shrimp and pumpkin",
          price: 600,
          image: "/images/menu/shrimp-pumpkin-risotto.png",
        },
        {
          name: "Seafood Risotto",
          description: "Risotto with mixed seafood and saffron",
          price: 600,
          image: "/images/menu/seafood-risotto.png",
        },
      ],
    },
    {
      id: "fish",
      name: "Fish",
      description: "Fresh seafood prepared with Mediterranean influences.",
      items: [
        {
          name: "Sea Bream Grilled",
          description: "Fresh sea bream grilled to perfection",
          price: 1000,
          image: "/images/menu/sea-bream.png",
        },
        {
          name: "Sea Bass Grilled",
          description: "Grilled sea bass with herbs and lemon",
          price: 1000,
          image: "/images/menu/sea-bass.png",
        },
        {
          name: "Shrimp Grilled/Crudi",
          description: "Grilled or raw shrimp with dipping sauce",
          price: 1200,
          image: "/images/menu/grilled-shrimp.png",
        },
        {
          name: "Baked Sea Bass with Vegetables",
          description: "Sea bass baked with seasonal vegetables",
          price: 1400,
          image: "/images/menu/baked-sea-bass.png",
        },
        {
          name: "Grilled Salmon",
          description: "Salmon grilled or served with orange sauce",
          price: 1400,
          image: "/images/menu/grilled-salmon.png",
        },
      ],
    },
    {
      id: "meat",
      name: "Meat",
      description: "Premium cuts of meat prepared to perfection.",
      items: [
        {
          name: "Grilled Goat Meat",
          description: "500 gr of tender goat meat, grilled",
          price: 1500,
          image: "/images/menu/goat-meat.png",
        },
        {
          name: "Lamb Meat",
          description: "500 gr - grilled, wood sac, or ribs",
          price: 1400,
          image: "/images/menu/lamb-meat.png",
        },
        {
          name: "Beef Meat",
          description: "500 gr - steak or ribs",
          price: 1300,
          image: "/images/menu/beef-steak.png",
        },
        {
          name: "Pork Meat",
          description: "500 gr - steak or ribs",
          price: 1000,
          image: "/images/menu/pork-meat.png",
        },
        {
          name: "Tomahawk Steak",
          description: "1 kg premium cut steak",
          price: 4000,
          image: "/images/menu/tomahawk-steak.png",
        },
        {
          name: "Sticky Pork",
          description: "Tender pork with a sweet and savory glaze",
          price: 1200,
          image: "/images/menu/sticky-pork.png",
        },
        {
          name: "Chicken Fillet",
          description: "Grilled chicken breast fillet",
          price: 900,
          image: "/images/menu/chicken-fillet.png",
        },
      ],
    },
    {
      id: "traditional",
      name: "Traditional Cooking",
      description: "Local specialties showcasing regional flavors and traditions.",
      items: [
        {
          name: "Homemade Meatball Grilled",
          description: "Traditional grilled meatballs with herbs and spices",
          price: 600,
          image: "/images/menu/meatballs.png",
        },
        {
          name: "Liver, Heart, Spleen",
          description: "Traditional preparation of organ meats",
          price: 700,
          image: "/images/menu/organ-meats.png",
        },
        {
          name: "Traditional Casserole",
          description: "Slow-cooked meat and vegetables in a clay pot",
          price: 600,
          image: "/images/menu/traditional-casserole.png",
        },
        {
          name: "Rice Casserole",
          description: "Baked rice with herbs and spices",
          price: 600,
          image: "/images/menu/rice-casserole.png",
        },
        {
          name: "Porridge Casserole with Nuts",
          description: "Traditional porridge baked with nuts",
          price: 600,
          image: "/images/menu/porridge-casserole.png",
        },
        {
          name: "Pasta Jufka Casserole",
          description: "Traditional pasta baked with local ingredients",
          price: 600,
          image: "/images/menu/pasta-casserole.png",
        },
        {
          name: "Lamb Yogurt Casserole",
          description: "Tender lamb cooked with yogurt sauce",
          price: 600,
          image: "/images/menu/lamb-yogurt.png",
        },
        {
          name: "Fergese Elbasani",
          description: "Traditional Albanian dish with peppers and tomatoes",
          price: 350,
          image: "/images/menu/fergese.png",
        },
        {
          name: "Barbecue Roasted Chicken Bird",
          description: "Whole chicken roasted on barbecue",
          price: 1800,
          image: "/images/menu/roasted-chicken.png",
        },
      ],
    },
    {
      id: "specials",
      name: "Specials",
      description: "Chef's special creations featuring seasonal ingredients and game meats.",
      items: [
        {
          name: "Roe Deer Meat",
          description: "500 gr of premium roe deer meat",
          price: 2500,
          image: "/images/menu/roe-deer.png",
        },
        {
          name: "Wild Boar Meat",
          description: "500 gr of wild boar prepared to perfection",
          price: 1200,
          image: "/images/menu/wild-boar.png",
        },
        {
          name: "Wild Rabbit Meat",
          description: "2-3 kg of wild rabbit meat",
          price: 6500,
          image: "/images/menu/wild-rabbit.png",
        },
        {
          name: "Pheasant Meat",
          description: "Roasted pheasant with herbs",
          price: 3500,
          image: "/images/menu/pheasant.png",
        },
        {
          name: "Turkey Gobbler Meat",
          description: "1 kg of turkey meat prepared traditionally",
          price: 2000,
          image: "/images/menu/turkey.png",
        },
      ],
    },
    {
      id: "pizza",
      name: "Pizza",
      description: "Authentic wood-fired pizzas with traditional and creative toppings.",
      items: [
        {
          name: "Pizza Margarita",
          description: "Sauce, mozzarella, oregano",
          price: 350,
          image: "/images/menu/margherita.png",
        },
        {
          name: "Mushroom Pizza",
          description: "Sauce, mozzarella, fresh mushrooms",
          price: 450,
          image: "/images/menu/mushroom-pizza.png",
        },
        {
          name: "Pizza Milanese",
          description: "Sauce, mozzarella, sardines, oregano",
          price: 500,
          image: "/images/menu/milanese-pizza.png",
        },
        {
          name: "Pizza Diavola",
          description: "Sauce, mozzarella, spicy salami, tabasco",
          price: 500,
          image: "/images/menu/diavola-pizza.png",
        },
        {
          name: "Pizza Ham & Mushrooms",
          description: "Sauce, mozzarella, prosciutto, mushrooms",
          price: 550,
          image: "/images/menu/ham-mushroom-pizza.png",
        },
        {
          name: "Pizza 4-Seasons",
          description: "Sauce, mozzarella, bacon, mushrooms, olives, sausage",
          price: 550,
          image: "/images/menu/four-seasons-pizza.png",
        },
        {
          name: "Vegetarian Pizza",
          description: "Sauce, mozzarella, olives, pumpkins, mushrooms, tomatoes",
          price: 500,
          image: "/images/menu/vegetarian-pizza.png",
        },
        {
          name: "Tuna Pizza",
          description: "Sauce, mozzarella, tuna, red onion",
          price: 550,
          image: "/images/menu/tuna-pizza.png",
        },
        {
          name: "Pizza 4-Cheeses",
          description: "Sauce, mozzarella, white cheese, yellow cheese, gorgonzola",
          price: 550,
          image: "/images/menu/four-cheese-pizza.png",
        },
        {
          name: "Capricciosa Pizza",
          description: "Sauce, mozzarella, prosciutto, peppers, mushrooms, olives",
          price: 550,
          image: "/images/menu/capricciosa-pizza.png",
        },
        {
          name: "Panorama Pizza",
          description: "Sauce, mozzarella, olives, mushrooms, crudo, parmigiano, tuna",
          price: 700,
          image: "/images/menu/panorama-pizza.png",
        },
        {
          name: "Focace",
          description: "Olive oil, oregano, white cheese",
          price: 200,
          image: "/images/menu/focaccia.png",
        },
        {
          name: "Sandwich",
          description: "Mayonnaise, bacon, mozzarella, tomato",
          price: 200,
          image: "/images/menu/sandwich.png",
        },
      ],
    },
    {
      id: "dessert",
      name: "Dessert",
      description: "Sweet endings to complete your dining experience.",
      items: [
        {
          name: "Fresh Ice Cream",
          description: "Homemade ice cream in various flavors",
          price: 250,
          image: "/images/menu/ice-cream.png",
        },
        {
          name: "Fresh Ice Cream with Cornet",
          description: "Ice cream served in a waffle cone",
          price: 200,
          image: "/images/menu/ice-cream-cone.png",
        },
        {
          name: "Fruit with Honey & Nuts",
          description: "Fresh seasonal fruits drizzled with honey and topped with nuts",
          price: 300,
          image: "/images/menu/fruit-honey.png",
        },
        {
          name: "Candy Cream",
          description: "Sweet cream dessert with caramel",
          price: 200,
          image: "/images/menu/candy-cream.png",
        },
        {
          name: "Panna Cotta",
          description: "Italian cream dessert with berry sauce",
          price: 200,
          image: "/images/menu/panna-cotta.png",
        },
        {
          name: "Crepe with Chocolate Cream & Banana",
          description: "Thin pancake filled with chocolate and banana",
          price: 150,
          image: "/images/menu/chocolate-crepe.png",
        },
        {
          name: "Crepe with Cream & Strawberries",
          description: "Thin pancake filled with cream and fresh strawberries",
          price: 150,
          image: "/images/menu/strawberry-crepe.png",
        },
        {
          name: "Orange Cake",
          description: "Moist cake with orange flavor",
          price: 200,
          image: "/images/menu/orange-cake.png",
        },
        {
          name: "Tiramisu",
          description: "Classic Italian coffee-flavored dessert",
          price: 300,
          image: "/images/menu/tiramisu.png",
        },
        {
          name: "Trilece",
          description: "Traditional three-milk cake",
          price: 200,
          image: "/images/menu/trilece.png",
        },
        {
          name: "Chocolate Souffle",
          description: "Warm chocolate cake with a molten center",
          price: 300,
          image: "/images/menu/chocolate-souffle.png",
        },
        {
          name: "Homemade Sweet Milk",
          description: "Traditional sweet milk dessert",
          price: 400,
          image: "/images/menu/sweet-milk.png",
        },
      ],
    },
    {
      id: "cafeteria",
      name: "Cafeteria",
      description: "Premium coffee and tea selections.",
      items: [
        {
          name: "Turkish Coffee",
          description: "Traditional Turkish coffee",
          price: 70,
          image: "/images/menu/turkish-coffee.png",
        },
        {
          name: "Espresso Coffee",
          description: "Single shot of rich espresso",
          price: 80,
          image: "/images/menu/espresso.png",
        },
        {
          name: "Macchiato",
          description: "Espresso with a dash of milk",
          price: 80,
          image: "/images/menu/macchiato.png",
        },
        {
          name: "Cappuccino",
          description: "Espresso with steamed milk and foam",
          price: 150,
          image: "/images/menu/cappuccino.png",
        },
        {
          name: "Correto Coffee",
          description: "Espresso with a shot of liquor",
          price: 150,
          image: "/images/menu/correto.png",
        },
        {
          name: "Hot Tea",
          description: "Various tea selections",
          price: 70,
          image: "/images/menu/hot-tea.png",
        },
        {
          name: "Organic Tea",
          description: "Premium organic tea varieties",
          price: 150,
          image: "/images/menu/organic-tea.png",
        },
        {
          name: "Milk",
          description: "Fresh milk served hot or cold",
          price: 70,
          image: "/images/menu/milk.png",
        },
        {
          name: "Salep",
          description: "Traditional hot drink made from orchid flour",
          price: 150,
          image: "/images/menu/salep.png",
        },
        {
          name: "Hot Chocolate",
          description: "Rich and creamy hot chocolate",
          price: 150,
          image: "/images/menu/hot-chocolate.png",
        },
        {
          name: "Nescaffe",
          description: "Instant coffee preparation",
          price: 180,
          image: "/images/menu/nescafe.png",
        },
      ],
    },
    {
      id: "fresh-drinks",
      name: "Fresh Drinks",
      description: "Refreshing non-alcoholic beverages and fresh juices.",
      items: [
        {
          name: "Bravo",
          description: "Fruit juice drink",
          price: 150,
          image: "/images/menu/bravo-juice.png",
        },
        {
          name: "Cold Tea",
          description: "Refreshing iced tea",
          price: 150,
          image: "/images/menu/iced-tea.png",
        },
        {
          name: "Coca Cola",
          description: "Classic cola beverage",
          price: 150,
          image: "/images/menu/coca-cola.png",
        },
        {
          name: "Fanta",
          description: "Orange flavored soft drink",
          price: 150,
          image: "/images/menu/fanta.png",
        },
        {
          name: "Sprite",
          description: "Lemon-lime flavored soft drink",
          price: 150,
          image: "/images/menu/sprite.png",
        },
        {
          name: "Soda Limon",
          description: "Sparkling water with lemon",
          price: 150,
          image: "/images/menu/soda-limon.png",
        },
        {
          name: "Fresh Fruit Juices",
          description: "Variety of freshly squeezed fruit juices",
          price: 200,
          image: "/images/menu/fresh-juice.png",
        },
        {
          name: "Nescaffe",
          description: "Cold instant coffee preparation",
          price: 150,
          image: "/images/menu/cold-nescafe.png",
        },
        {
          name: "Suko",
          description: "Fruit juice drink",
          price: 70,
          image: "/images/menu/suko.png",
        },
        {
          name: "Bitter",
          description: "Non-alcoholic bitter aperitif",
          price: 100,
          image: "/images/menu/bitter.png",
        },
        {
          name: "Schweeppes",
          description: "Tonic water or bitter lemon",
          price: 150,
          image: "/images/menu/schweppes.png",
        },
        {
          name: "Crodino",
          description: "Non-alcoholic bitter aperitif",
          price: 120,
          image: "/images/menu/crodino.png",
        },
        {
          name: "B52",
          description: "Energy drink",
          price: 150,
          image: "/images/menu/b52.png",
        },
        {
          name: "RedBull",
          description: "Energy drink",
          price: 300,
          image: "/images/menu/redbull.png",
        },
        {
          name: "Water 0.5 L",
          description: "Still mineral water",
          price: 60,
          image: "/images/menu/water-bottle.png",
        },
        {
          name: "Water Bottle 0.75 L",
          description: "Premium still or sparkling water",
          price: 200,
          image: "/images/menu/premium-water.png",
        },
        {
          name: "Fredo Latte",
          description: "Cold coffee with milk",
          price: 200,
          image: "/images/menu/fredo-latte.png",
        },
        {
          name: "Cappuccino Fredo",
          description: "Cold cappuccino",
          price: 200,
          image: "/images/menu/cappuccino-fredo.png",
        },
        {
          name: "Chocolate Fredo",
          description: "Cold chocolate drink",
          price: 200,
          image: "/images/menu/chocolate-fredo.png",
        },
      ],
    },
    {
      id: "beer",
      name: "Beer",
      description: "Selection of local and international beers.",
      items: [
        {
          name: "Little Draft Beer",
          description: "Small glass of draft beer",
          price: 100,
          image: "/images/menu/small-draft-beer.png",
        },
        {
          name: "Large Draft Beer",
          description: "Large glass of draft beer",
          price: 200,
          image: "/images/menu/large-draft-beer.png",
        },
        {
          name: "Strong Beer 0.33 L",
          description: "Bottled strong beer",
          price: 200,
          image: "/images/menu/strong-beer.png",
        },
        {
          name: "Amstel",
          description: "Dutch pale lager",
          price: 200,
          image: "/images/menu/amstel.png",
        },
        {
          name: "Heineken",
          description: "Dutch pale lager",
          price: 250,
          image: "/images/menu/heineken.png",
        },
        {
          name: "Paulaner",
          description: "German wheat beer",
          price: 350,
          image: "/images/menu/paulaner.png",
        },
        {
          name: "Chek Pilsen 0.33 L",
          description: "Czech pilsner beer",
          price: 150,
          image: "/images/menu/czech-pilsner.png",
        },
        {
          name: "Corona",
          description: "Mexican pale lager",
          price: 350,
          image: "/images/menu/corona.png",
        },
        {
          name: "Draft Beer Tower",
          description: "Large serving of draft beer for sharing",
          price: 700,
          image: "/images/menu/beer-tower.png",
        },
      ],
    },
    {
      id: "alcohol",
      name: "Alcohol",
      description: "Premium spirits and signature cocktails.",
      items: [
        {
          name: "Johnnie Walker Blue",
          description: "Premium blended Scotch whisky",
          price: 2500,
          image: "/images/menu/johnnie-walker-blue.png",
        },
        {
          name: "Amaro Disarono",
          description: "Italian herbal liqueur",
          price: 250,
          image: "/images/menu/disaronno.png",
        },
        {
          name: "Amaro Lucano",
          description: "Italian herbal liqueur",
          price: 250,
          image: "/images/menu/amaro-lucano.png",
        },
        {
          name: "Amaro Montenegro",
          description: "Italian herbal liqueur",
          price: 250,
          image: "/images/menu/montenegro.png",
        },
        {
          name: "Amaro Ramazotti",
          description: "Italian herbal liqueur",
          price: 250,
          image: "/images/menu/ramazotti.png",
        },
        {
          name: "Vechia Romagna",
          description: "Italian brandy",
          price: 250,
          image: "/images/menu/vecchia-romagna.png",
        },
        {
          name: "Fernet Branca",
          description: "Italian herbal liqueur",
          price: 250,
          image: "/images/menu/fernet-branca.png",
        },
        {
          name: "Bacardi",
          description: "White rum",
          price: 250,
          image: "/images/menu/bacardi.png",
        },
        {
          name: "Baileys",
          description: "Irish cream liqueur",
          price: 250,
          image: "/images/menu/baileys.png",
        },
        {
          name: "Ballantines",
          description: "Blended Scotch whisky",
          price: 250,
          image: "/images/menu/ballantines.png",
        },
        {
          name: "Campari",
          description: "Italian bitter aperitif",
          price: 200,
          image: "/images/menu/campari.png",
        },
        {
          name: "Cardinal",
          description: "Premium spirit",
          price: 350,
          image: "/images/menu/cardinal.png",
        },
        {
          name: "Chivas Regal",
          description: "Blended Scotch whisky",
          price: 350,
          image: "/images/menu/chivas-regal.png",
        },
        {
          name: "Cutty Sark",
          description: "Blended Scotch whisky",
          price: 250,
          image: "/images/menu/cutty-sark.png",
        },
        {
          name: "Dimple",
          description: "Blended Scotch whisky",
          price: 350,
          image: "/images/menu/dimple.png",
        },
        {
          name: "Glengrand",
          description: "Single malt Scotch whisky",
          price: 300,
          image: "/images/menu/glengrand.png",
        },
        {
          name: "Haig Gold Label",
          description: "Blended Scotch whisky",
          price: 350,
          image: "/images/menu/haig-gold.png",
        },
        {
          name: "J & B",
          description: "Blended Scotch whisky",
          price: 250,
          image: "/images/menu/j-and-b.png",
        },
        {
          name: "Jack Daniels",
          description: "Tennessee whiskey",
          price: 300,
          image: "/images/menu/jack-daniels.png",
        },
        {
          name: "Johnny Walker",
          description: "Blended Scotch whisky",
          price: 250,
          image: "/images/menu/johnnie-walker.png",
        },
        {
          name: "Johnny Black",
          description: "Blended Scotch whisky",
          price: 350,
          image: "/images/menu/johnnie-black.png",
        },
        {
          name: "Jagermaster",
          description: "German herbal liqueur",
          price: 200,
          image: "/images/menu/jagermeister.png",
        },
        {
          name: "Limoncelo",
          description: "Italian lemon liqueur",
          price: 250,
          image: "/images/menu/limoncello.png",
        },
        {
          name: "Malibu",
          description: "Coconut rum",
          price: 250,
          image: "/images/menu/malibu.png",
        },
        {
          name: "Martini",
          description: "Italian vermouth",
          price: 200,
          image: "/images/menu/martini.png",
        },
        {
          name: "Metaxa 3*",
          description: "Greek brandy",
          price: 250,
          image: "/images/menu/metaxa-3.png",
        },
        {
          name: "Metaxa 5*",
          description: "Premium Greek brandy",
          price: 300,
          image: "/images/menu/metaxa-5.png",
        },
        {
          name: "Rum",
          description: "Various rum options",
          price: 250,
          image: "/images/menu/rum.png",
        },
        {
          name: "Sambuca Molinari",
          description: "Italian anise-flavored liqueur",
          price: 250,
          image: "/images/menu/sambuca.png",
        },
        {
          name: "Sheridians",
          description: "Coffee layered liqueur",
          price: 300,
          image: "/images/menu/sheridans.png",
        },
        {
          name: "Sierra Tequila",
          description: "Mexican tequila",
          price: 250,
          image: "/images/menu/sierra-tequila.png",
        },
        {
          name: "Vodka Absolute",
          description: "Swedish vodka",
          price: 250,
          image: "/images/menu/absolut.png",
        },
        {
          name: "Vodka Artic",
          description: "Premium vodka",
          price: 250,
          image: "/images/menu/arctic-vodka.png",
        },
        {
          name: "Vodka Filandia",
          description: "Finnish vodka",
          price: 250,
          image: "/images/menu/finlandia.png",
        },
        {
          name: "Vodka Gorbacov",
          description: "Russian vodka",
          price: 250,
          image: "/images/menu/gorbachev-vodka.png",
        },
        {
          name: "Vodka Keglevich",
          description: "Italian vodka",
          price: 250,
          image: "/images/menu/keglevich.png",
        },
        {
          name: "Vodka Pushkini",
          description: "Russian vodka",
          price: 250,
          image: "/images/menu/pushkin-vodka.png",
        },
        {
          name: "Vodka Smirinof",
          description: "Russian vodka",
          price: 250,
          image: "/images/menu/smirnoff.png",
        },
        {
          name: "Gin",
          description: "Various gin options",
          price: 250,
          image: "/images/menu/gin.png",
        },
        {
          name: "Skenderbeu Cognac",
          description: "Albanian brandy",
          price: 100,
          image: "/images/menu/skenderbeu.png",
        },
        {
          name: "Grape Brandy",
          description: "Traditional grape brandy",
          price: 100,
          image: "/images/menu/grape-brandy.png",
        },
        {
          name: "Raspberry Brandy",
          description: "Fruit flavored brandy",
          price: 200,
          image: "/images/menu/raspberry-brandy.png",
        },
      ],
    },
    {
      id: "wine",
      name: "Wine",
      description: "Curated selection of local and international wines.",
      items: [
        {
          name: "Wine Glasses",
          description: "Selection of wines by the glass",
          price: 200,
          image: "/images/menu/wine-glass.png",
        },
        {
          name: "House Wine 0.5 L",
          description: "Red or white house wine",
          price: 500,
          image: "/images/menu/house-wine.png",
        },
        {
          name: "Handcrafted Wine 0.75 L",
          description: "Premium local wine",
          price: 1200,
          image: "/images/menu/premium-wine.png",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-gray-900">
        <Image src="/images/menu-hero.jpg" alt="Our Menu" fill className="object-cover opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dining Experience</h1>
            <div className="w-20 h-1 bg-[#E91E63] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-[#FFF9FB] py-4 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-white p-4 rounded-lg shadow-md border border-[#F8BBD0]">
            <p className="text-[#880E4F] font-medium">
              <span className="font-bold">Please Note:</span> The photos are illustrative. We do not accept off-menu
              orders. Please let us know if you have any food allergies!
            </p>
          </div>
        </div>
      </section>

      {/* Dining Overview Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Culinary Excellence</h2>
          <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            At Paradise Resort, we pride ourselves on offering exceptional dining experiences. Our talented chefs use
            only the freshest local ingredients to create memorable culinary delights that will satisfy even the most
            discerning palates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-[#F8BBD0] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#E91E63]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3zM3 9h18M9 21V9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Main Restaurant</h3>
            <p className="text-gray-600">
              Our main restaurant offers a diverse menu featuring international cuisine and local specialties.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-[#F8BBD0] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#E91E63]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Beach Bar & Grill</h3>
            <p className="text-gray-600">Enjoy casual dining with ocean views at our beachfront bar and grill.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center border border-[#F8BBD0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-[#F8BBD0] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#E91E63]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fine Dining</h3>
            <p className="text-gray-600">Experience gourmet cuisine at our signature fine dining restaurant.</p>
          </div>
        </div>
      </section>

      {/* Menu Categories Quick Navigation */}
      <section className="py-8 px-4 bg-[#FFF9FB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Menu Categories</h2>
            <div className="w-16 h-1 bg-[#E91E63] mx-auto mt-2"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full shadow-sm transition duration-300 ${
                selectedCategory === "all"
                  ? "bg-[#E91E63] text-white"
                  : "bg-white text-[#880E4F] border border-[#F8BBD0] hover:bg-[#F8BBD0]"
              }`}
            >
              All
            </button>
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full shadow-sm transition duration-300 ${
                  selectedCategory === category.id
                    ? "bg-[#E91E63] text-white"
                    : "bg-white text-[#880E4F] border border-[#F8BBD0] hover:bg-[#F8BBD0]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      {menuCategories.map(
        (category) =>
          (selectedCategory === "all" || selectedCategory === category.id) && (
            <section key={category.id} id={category.id} className="py-8 px-4 max-w-7xl mx-auto">
              <div className="text-center mb-2">
                <h2 className="text-3xl font-bold mb-2">{category.name}</h2>
                <div className="w-20 h-1 bg-[#E91E63] mx-auto mb-2"></div>
                <p className="text-lg max-w-3xl mx-auto text-gray-600 mb-4">{category.description}</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#F8BBD0]">
                <div className="relative h-64">
                  <Image
                    src={`/images/menu-${category.id}.jpg`}
                    alt={category.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback to a generic image if specific one doesn't exist
                      e.currentTarget.src = "/images/menu-generic.png"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold">{category.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-8">
                    {category.items.map((item, index) => (
                      <div
                        key={index}
                        className="border-b border-[#F8BBD0] pb-8 last:border-0 last:pb-0 hover:bg-[#FFF9FB] transition-colors p-4 rounded-lg -mx-4 group"
                      >
                        <div className="flex flex-col md:flex-row gap-4">
                          {/* Circular image for menu item */}
                          <div className="flex-shrink-0">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[#F8BBD0] shadow-md group-hover:border-[#E91E63] transition-colors">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                  // Fallback to a placeholder if image doesn't exist
                                  e.currentTarget.src = `/placeholder.svg?height=96&width=96&query=${encodeURIComponent(`${category.name} ${item.name} food dish`)}`
                                }}
                              />
                            </div>
                          </div>

                          {/* Menu item details */}
                          <div className="flex-grow">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                              <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#880E4F] transition-colors">
                                {item.name}
                              </h3>
                              <div className="px-4 py-1 bg-[#F8BBD0] text-[#880E4F] font-bold rounded-full inline-block self-start sm:self-auto group-hover:bg-[#E91E63] group-hover:text-white transition-colors">
                                {typeof item.price === "number" ? `${item.price} ALL` : item.price}
                              </div>
                            </div>
                            <p className="text-gray-600 mb-2 group-hover:text-gray-700 transition-colors">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ),
      )}

      {/* Private Dining Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl border border-[#F8BBD0]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image src="/images/private-dining.jpg" alt="Private Dining" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            </div>
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Private Dining Experience</h2>
                <p className="text-gray-600 mb-6">
                  For special occasions, we offer exclusive private dining experiences. From romantic dinners on the
                  beach to family celebrations in our private dining room, our team will create a memorable culinary
                  journey tailored to your preferences.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[#F8BBD0] text-[#880E4F] font-semibold px-8 py-3 rounded-lg hover:bg-[#E91E63] hover:text-white transition duration-300 transform hover:scale-105 shadow-md"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  )
}
