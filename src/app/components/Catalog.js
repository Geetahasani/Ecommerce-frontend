// src/data/catalog.js

export const categories = [
  { title: "Rice",        slug: "rice",         image: "/images/rice.png",        count: 8 },
  { title: "Lentils",     slug: "lentils",      image: "/images/lentils.png",     count: 8 },
  { title: "Spices",      slug: "spices",       image: "/images/spices.png",      count: 10 },
  { title: "Oils",        slug: "oils",         image: "/images/oils.png",        count: 6 },
  { title: "Snacks",      slug: "snacks",       image: "/images/snacks.png",      count: 10 },
  { title: "Flours",      slug: "flours",       image: "/images/flours.png",      count: 7 },
  { title: "Beverages",   slug: "beverages",    image: "/images/beverages.png",   count: 8 },
  { title: "Dairy",       slug: "dairy",        image: "/images/dairy.png",       count: 8 },
  { title: "Fruits",      slug: "fruits",       image: "/images/fruits.png",      count: 8 },
  { title: "Vegetables",  slug: "vegetables",   image: "/images/vegetables.png",  count: 8 },
  { title: "Cleaning",    slug: "cleaning",     image: "/images/cleaning.png",    count: 6 },
  { title: "Personal Care", slug: "personal-care", image: "/images/personal-care.png", count: 6 },
  { title: "Bakery",      slug: "bakery",       image: "/images/bakery.png",      count: 6 },
];

// Minimal sample items per category (replace with real data / images)
export const itemsByCategory = {
  rice: [
    { name: "Basmati Rice (1kg)",  price: 3.49, desc: "Long grain",            image: "/p-rice.jpg" },
    { name: "Sona Masoori (1kg)",  price: 2.99, desc: "Everyday rice",         image: "/p-rice2.jpg" },
    { name: "Brown Rice (1kg)",    price: 3.79, desc: "Fiber rich",            image: "/p-rice3.jpg" },
    { name: "Jasmine Rice (1kg)",  price: 3.59, desc: "Fragrant Thai",         image: "/p-rice4.jpg" },
    { name: "Parboiled Rice (1kg)",price: 2.89, desc: "Firm grains",           image: "/p-rice5.jpg" },
    { name: "Idli Rice (1kg)",     price: 3.19, desc: "Soft idli/dosa",        image: "/p-rice6.jpg" },
    { name: "Red Matta (1kg)",     price: 3.29, desc: "Kerala matta",          image: "/p-rice7.jpg" },
    { name: "Short Grain (1kg)",   price: 2.69, desc: "Sticky sushi style",    image: "/p-rice8.jpg" },
  ],

  lentils: [
    { name: "Toor Dal (1kg)",   price: 3.29, desc: "Tur/Arhar dal",   image: "/p-lentil1.jpg" },
    { name: "Masoor Dal (1kg)", price: 2.89, desc: "Red lentils",     image: "/p-lentil2.jpg" },
    { name: "Moong Dal (1kg)",  price: 3.19, desc: "Split yellow",    image: "/p-lentil3.jpg" },
    { name: "Chana Dal (1kg)",  price: 2.79, desc: "Split chickpeas", image: "/p-lentil4.jpg" },
    { name: "Urad Dal (1kg)",   price: 3.39, desc: "Black gram split",image: "/p-lentil5.jpg" },
    { name: "Masoor Whole (1kg)",price: 2.99, desc: "Whole red",      image: "/p-lentil6.jpg" },
    { name: "Moong Whole (1kg)", price: 3.09, desc: "Whole green",    image: "/p-lentil7.jpg" },
    { name: "Horse Gram (1kg)",  price: 2.69, desc: "Kulthi",         image: "/p-lentil8.jpg" },
  ],

  spices: [
    { name: "Turmeric Powder (200g)", price: 1.49, desc: "Golden spice",    image: "/p-turmeric.jpg" },
    { name: "Cumin Seeds (200g)",     price: 1.99, desc: "Jeera",           image: "/p-cumin.jpg" },
    { name: "Coriander Powder (200g)",price: 1.59, desc: "Dhaniya",         image: "/p-coriander.jpg" },
    { name: "Red Chili Powder (200g)",price: 1.79, desc: "Hot & vibrant",   image: "/p-chili.jpg" },
    { name: "Garam Masala (100g)",    price: 1.79, desc: "Aromatic blend",  image: "/p-garam.jpg" },
    { name: "Black Pepper (100g)",    price: 1.99, desc: "Whole peppercorns",image: "/p-pepper.jpg" },
    { name: "Mustard Seeds (200g)",   price: 1.29, desc: "Rai/Sarson",      image: "/p-mustard.jpg" },
    { name: "Fenugreek Seeds (200g)", price: 1.19, desc: "Methi dana",      image: "/p-fenugreek.jpg" },
    { name: "Cinnamon Sticks (100g)", price: 1.89, desc: "Warm & sweet",    image: "/p-cinnamon.jpg" },
    { name: "Cloves (50g)",           price: 1.49, desc: "Intense aroma",   image: "/p-cloves.jpg" },
  ],

  oils: [
    { name: "Sunflower Oil (1L)", price: 3.99, desc: "Refined",         image: "/p-oil1.jpg" },
    { name: "Mustard Oil (1L)",   price: 4.49, desc: "Kachi ghani",     image: "/p-oil2.jpg" },
    { name: "Olive Oil (500ml)",  price: 6.49, desc: "Extra virgin",    image: "/p-olive.jpg" },
    { name: "Coconut Oil (500ml)",price: 4.19, desc: "Cold pressed",    image: "/p-oil3.jpg" },
    { name: "Groundnut Oil (1L)", price: 4.59, desc: "Peanut oil",      image: "/p-oil4.jpg" },
    { name: "Sesame Oil (500ml)", price: 4.39, desc: "Til oil",         image: "/p-oil5.jpg" },
  ],

  snacks: [
    { name: "Potato Chips (150g)", price: 1.29, desc: "Crispy",             image: "/p-chips.jpg" },
    { name: "Bhujia (200g)",       price: 1.39, desc: "Spicy crunch",       image: "/p-bhujia.jpg" },
    { name: "Nacho Chips (150g)",  price: 1.49, desc: "Corn goodness",      image: "/p-nacho.jpg" },
    { name: "Masala Peanuts (200g)",price:1.59, desc: "Roasted & spiced",   image: "/p-masala-peanuts.jpg" },
    { name: "Popcorn (100g)",      price: 0.99, desc: "Movie-night pick",   image: "/p-popcorn.jpg" },
    { name: "Khakhra (200g)",      price: 1.69, desc: "Thin crunchy",       image: "/p-khakhra.jpg" },
    { name: "Banana Chips (150g)", price: 1.49, desc: "South-Indian style", image: "/p-banana-chips.jpg" },
    { name: "Mixture (200g)",      price: 1.59, desc: "Savory blend",       image: "/p-mixture.jpg" },
    { name: "Protein Bar (50g)",   price: 1.29, desc: "On-the-go",          image: "/p-proteinbar.jpg" },
    { name: "Cookies (200g)",      price: 1.39, desc: "Butter goodness",    image: "/p-cookies.jpg" },
  ],

  flours: [
    { name: "Whole Wheat Atta (2kg)", price: 4.99, desc: "Chakki fresh",  image: "/p-atta.jpg" },
    { name: "Maida (1kg)",            price: 1.29, desc: "Refined flour", image: "/p-maida.jpg" },
    { name: "Besan (1kg)",            price: 2.49, desc: "Gram flour",    image: "/p-besan.jpg" },
    { name: "Ragi Flour (1kg)",       price: 2.79, desc: "Finger millet", image: "/p-ragi.jpg" },
    { name: "Jowar Flour (1kg)",      price: 2.69, desc: "Sorghum",       image: "/p-jowar.jpg" },
    { name: "Bajra Flour (1kg)",      price: 2.59, desc: "Pearl millet",  image: "/p-bajra.jpg" },
    { name: "Multigrain Atta (2kg)",  price: 5.49, desc: "Healthy mix",   image: "/p-multigrain.jpg" },
  ],

  beverages: [
    { name: "Orange Juice (1L)",   price: 2.19, desc: "No added sugar", image: "/p-oj.jpg" },
    { name: "Apple Juice (1L)",    price: 2.09, desc: "100% juice",     image: "/p-aj.jpg" },
    { name: "Soda (500ml)",        price: 0.99, desc: "Sparkling",      image: "/p-soda.jpg" },
    { name: "Iced Tea (1L)",       price: 1.89, desc: "Peach flavor",   image: "/p-icedtea.jpg" },
    { name: "Coconut Water (1L)",  price: 2.39, desc: "Natural",        image: "/p-coconutwater.jpg" },
    { name: "Energy Drink (250ml)",price: 1.49, desc: "Boost",          image: "/p-energy.jpg" },
    { name: "Green Tea (25 bags)", price: 1.79, desc: "Antioxidants",   image: "/p-greentea.jpg" },
    { name: "Coffee (200g)",       price: 3.49, desc: "Instant",        image: "/p-coffee.jpg" },
  ],

  dairy: [
    { name: "Milk (1L)",        price: 1.49, desc: "Farm fresh",   image: "/p-milk.jpg" },
    { name: "Yogurt (400g)",    price: 1.19, desc: "Plain",        image: "/p-yogurt.jpg" },
    { name: "Greek Yogurt",     price: 1.59, desc: "High protein", image: "/p-greek.jpg" },
    { name: "Paneer (200g)",    price: 2.49, desc: "Soft cubes",   image: "/p-paneer.jpg" },
    { name: "Butter (200g)",    price: 2.19, desc: "Creamy",       image: "/p-butter.jpg" },
    { name: "Cheddar (200g)",   price: 2.69, desc: "Sharp",        image: "/p-cheese.jpg" },
    { name: "Ghee (500g)",      price: 6.99, desc: "Clarified",    image: "/p-ghee.jpg" },
    { name: "Buttermilk (1L)",  price: 1.29, desc: "Chilled",      image: "/p-buttermilk.jpg" },
  ],

  fruits: [
    { name: "Bananas (1kg)",     price: 1.49, desc: "Sweet",         image: "/p-banana.jpg" },
    { name: "Apples (6pc)",      price: 2.89, desc: "Crisp & sweet", image: "/p-apple.jpg" },
    { name: "Oranges (1kg)",     price: 2.19, desc: "Juicy",         image: "/p-orange.jpg" },
    { name: "Grapes (500g)",     price: 1.99, desc: "Seedless",      image: "/p-grapes.jpg" },
    { name: "Mango (1kg)",       price: 3.49, desc: "Seasonal",      image: "/p-mango.jpg" },
    { name: "Strawberries (250g)",price:2.29, desc: "Fresh",         image: "/p-strawberry.jpg" },
    { name: "Kiwi (4pc)",        price: 2.39, desc: "Tangy",         image: "/p-kiwi.jpg" },
    { name: "Pomegranate (2pc)", price: 2.79, desc: "Ruby arils",    image: "/p-pom.jpg" },
  ],

  vegetables: [
    { name: "Tomatoes (500g)", price: 1.29, desc: "Juicy",       image: "/p-tomato.jpg" },
    { name: "Onions (1kg)",    price: 1.99, desc: "Staple",      image: "/p-onion.jpg" },
    { name: "Potatoes (1kg)",  price: 1.49, desc: "All-purpose", image: "/p-potato.jpg" },
    { name: "Spinach (250g)",  price: 1.19, desc: "Washed",      image: "/p-spinach.jpg" },
    { name: "Carrots (500g)",  price: 1.09, desc: "Crunchy",     image: "/p-carrot.jpg" },
    { name: "Cucumber (500g)", price: 1.29, desc: "Cool & fresh",image: "/p-cucumber.jpg" },
    { name: "Cauliflower",     price: 1.69, desc: "Florets",     image: "/p-cauliflower.jpg" },
    { name: "Bell Peppers (3)",price: 2.19, desc: "Tri-color",   image: "/p-bellpepper.jpg" },
  ],

  cleaning: [
    { name: "Dish Soap (500ml)",   price: 1.49, desc: "Grease-cut",     image: "/p-dishsoap.jpg" },
    { name: "Laundry Detergent",   price: 3.99, desc: "Fresh scent",    image: "/p-detergent.jpg" },
    { name: "Floor Cleaner (1L)",  price: 2.29, desc: "Lemon",          image: "/p-floorcleaner.jpg" },
    { name: "Glass Cleaner (500ml)",price:1.59, desc: "Streak-free",    image: "/p-glass.jpg" },
    { name: "Garbage Bags (30)",   price: 1.39, desc: "Heavy duty",     image: "/p-garbage.jpg" },
    { name: "Sponge Pack (5pc)",   price: 0.99, desc: "Multi-purpose",  image: "/p-sponge.jpg" },
  ],

  "personal-care": [
    { name: "Shampoo (340ml)",   price: 2.49, desc: "Nourishing",      image: "/p-shampoo.jpg" },
    { name: "Conditioner (340ml)",price:2.49, desc: "Smooth & soft",   image: "/p-conditioner.jpg" },
    { name: "Body Wash (500ml)", price: 2.29, desc: "Refreshing",      image: "/p-bodywash.jpg" },
    { name: "Toothpaste (100g)", price: 1.19, desc: "Fluoride",        image: "/p-toothpaste.jpg" },
    { name: "Toothbrush (2pc)",  price: 1.09, desc: "Soft bristles",   image: "/p-toothbrush.jpg" },
    { name: "Handwash (250ml)",  price: 1.29, desc: "Gentle",          image: "/p-handwash.jpg" },
  ],

  bakery: [
    { name: "Whole Wheat Bread", price: 2.19, desc: "Baked daily",   image: "/p-bread.jpg" },
    { name: "White Bread",       price: 1.99, desc: "Soft loaf",     image: "/p-whitebread.jpg" },
    { name: "Croissants (4pc)",  price: 3.49, desc: "Buttery",       image: "/p-croissant.jpg" },
    { name: "Dinner Rolls (6pc)",price: 2.39, desc: "Fluffy",        image: "/p-rolls.jpg" },
    { name: "Muffins (4pc)",     price: 2.99, desc: "Chocolate chip",image: "/p-muffin.jpg" },
    { name: "Bagels (4pc)",      price: 2.59, desc: "Chewy",         image: "/p-bagel.jpg" },
  ],
};
