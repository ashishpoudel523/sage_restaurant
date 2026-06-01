export const menuCategories = [
  {
    id: 'classic-coffee',
    name: 'Classic Coffee',
    icon: '☕',
    description: 'Timeless brews, expertly pulled',
    subcategories: [
      {
        name: 'Espresso Bar',
        items: [
          { name: 'Espresso', desc: 'Single shot, rich & bold', price: 120, tag: 'hot' },
          { name: 'Double Espresso', desc: 'Doppio intensity', price: 160, tag: 'hot' },
          { name: 'Ristretto', desc: 'Concentrated, silky finish', price: 140, tag: 'hot' },
          { name: 'Lungo', desc: 'Long pull, mellow body', price: 140, tag: 'hot' },
        ],
      },
      {
        name: 'Milk Classics',
        items: [
          { name: 'Cappuccino', desc: 'Equal parts espresso, steamed milk & foam', price: 180, tag: 'bestseller' },
          { name: 'Latte', desc: 'Silky steamed milk over espresso', price: 190, tag: 'hot' },
          { name: 'Flat White', desc: 'Microfoam, double ristretto', price: 200, tag: 'hot' },
          { name: 'Macchiato', desc: 'Espresso marked with a dollop of foam', price: 170, tag: 'hot' },
          { name: 'Cortado', desc: 'Equal espresso & warm milk', price: 175, tag: 'hot' },
        ],
      },
      {
        name: 'American & Iced',
        items: [
          { name: 'Americano', desc: 'Espresso diluted with hot water', price: 150, tag: 'hot' },
          { name: 'Iced Americano', desc: 'Chilled, refreshing', price: 160, tag: 'cold' },
          { name: 'Cold Brew', desc: '18-hour steep, smooth & low-acid', price: 220, tag: 'cold' },
          { name: 'Iced Latte', desc: 'Espresso over cold milk & ice', price: 200, tag: 'cold' },
        ],
      },
      {
        name: 'Flavored',
        items: [
          { name: 'Mocha', desc: 'Espresso, chocolate & steamed milk', price: 220, tag: 'hot' },
          { name: 'Caramel Latte', desc: 'Buttery caramel drizzle', price: 230, tag: 'bestseller' },
          { name: 'Hazelnut Cappuccino', desc: 'Nutty, aromatic', price: 210, tag: 'hot' },
          { name: 'Vanilla Affogato', desc: 'Espresso poured over vanilla gelato', price: 280, tag: 'cold' },
        ],
      },
    ],
  },
  {
    id: 'smoothies',
    name: 'Smoothies',
    icon: '🥤',
    description: 'Blended fresh, packed with flavor',
    subcategories: [
      {
        name: 'Fruit Classics',
        items: [
          { name: 'Mango Tango', desc: 'Alphonso mango, yogurt & honey', price: 280, tag: 'bestseller' },
          { name: 'Berry Blast', desc: 'Mixed berries, banana & chia', price: 300, tag: 'cold' },
          { name: 'Strawberry Dream', desc: 'Fresh strawberries & cream', price: 290, tag: 'cold' },
          { name: 'Pineapple Coconut', desc: 'Tropical, dairy-free', price: 270, tag: 'veg' },
        ],
      },
      {
        name: 'Green & Wellness',
        items: [
          { name: 'Green Detox', desc: 'Spinach, kale, apple & ginger', price: 320, tag: 'veg' },
          { name: 'Avocado Power', desc: 'Creamy avocado, lime & mint', price: 340, tag: 'veg' },
          { name: 'Matcha Energy', desc: 'Japanese matcha, banana & almond milk', price: 350, tag: 'veg' },
        ],
      },
      {
        name: 'Indulgent',
        items: [
          { name: 'Chocolate Banana', desc: 'Cocoa, banana & peanut butter', price: 310, tag: 'bestseller' },
          { name: 'Oreo Crush', desc: 'Cookies, milk & vanilla', price: 330, tag: 'cold' },
          { name: 'Peanut Butter Protein', desc: 'Banana, PB & whey', price: 360, tag: 'cold' },
        ],
      },
    ],
  },
  {
    id: 'lassi',
    name: 'Lassi',
    icon: '🥛',
    description: 'Traditional yogurt drinks from the hearth',
    subcategories: [
      {
        name: 'Classic Lassi',
        items: [
          { name: 'Sweet Lassi', desc: 'Chilled yogurt, sugar & cardamom', price: 150, tag: 'veg' },
          { name: 'Salted Lassi', desc: 'Cumin, rock salt & mint', price: 140, tag: 'veg' },
          { name: 'Masala Lassi', desc: 'Spiced with roasted cumin & chili', price: 160, tag: 'spicy' },
        ],
      },
      {
        name: 'Fruit Lassi',
        items: [
          { name: 'Mango Lassi', desc: 'Seasonal mango purée', price: 180, tag: 'bestseller' },
          { name: 'Rose Lassi', desc: 'Fragrant rose syrup & pistachio', price: 190, tag: 'veg' },
          { name: 'Strawberry Lassi', desc: 'Fresh berry blend', price: 185, tag: 'veg' },
          { name: 'Mint Lassi', desc: 'Cool garden mint', price: 175, tag: 'veg' },
          { name: 'Kesar Pista Lassi', desc: 'Saffron & crushed pistachios', price: 220, tag: 'veg' },
        ],
      },
    ],
  },
  {
    id: 'wine',
    name: 'Wine',
    icon: '🍷',
    description: 'Curated pours by the glass or bottle',
    subcategories: [
      {
        name: 'Red Wine',
        items: [
          { name: 'Merlot', desc: 'Soft plum & cherry notes — glass', price: 450, tag: 'glass' },
          { name: 'Cabernet Sauvignon', desc: 'Full-bodied, blackcurrant — glass', price: 520, tag: 'glass' },
          { name: 'Shiraz', desc: 'Peppery, dark fruit — glass', price: 480, tag: 'glass' },
          { name: 'Pinot Noir', desc: 'Elegant, earthy — glass', price: 550, tag: 'glass' },
        ],
      },
      {
        name: 'White Wine',
        items: [
          { name: 'Chardonnay', desc: 'Buttery, oak-aged — glass', price: 480, tag: 'glass' },
          { name: 'Sauvignon Blanc', desc: 'Crisp, citrus & herb — glass', price: 450, tag: 'glass' },
          { name: 'Riesling', desc: 'Floral, off-dry — glass', price: 420, tag: 'glass' },
        ],
      },
      {
        name: 'Rosé & Sparkling',
        items: [
          { name: 'Provence Rosé', desc: 'Dry, pale pink — glass', price: 490, tag: 'glass' },
          { name: 'Prosecco', desc: 'Italian sparkling — glass', price: 520, tag: 'glass' },
          { name: 'Champagne Brut', desc: 'Premium bubbles — glass', price: 750, tag: 'glass' },
        ],
      },
    ],
  },
  {
    id: 'biryani',
    name: 'Biryani',
    icon: '🍚',
    description: 'Aromatic rice, slow-cooked in dum',
    subcategories: [
      {
        name: 'Chicken Biryani',
        items: [
          { name: 'Hyderabadi Chicken', desc: 'Dum-cooked with saffron & fried onions', price: 420, tag: 'bestseller' },
          { name: 'Lucknowi Chicken', desc: 'Subtle spices, kewra water', price: 400, tag: 'mild' },
          { name: 'Sage Special Chicken', desc: 'Double masala, extra raita', price: 480, tag: 'spicy' },
        ],
      },
      {
        name: 'Mutton & Lamb',
        items: [
          { name: 'Mutton Dum Biryani', desc: 'Tender mutton, 4-hour marinade', price: 550, tag: 'bestseller' },
          { name: 'Keema Biryani', desc: 'Minced lamb layered with rice', price: 480, tag: 'spicy' },
          { name: 'Lamb Shank Biryani', desc: 'Fall-off-the-bone shank', price: 620, tag: 'chef' },
        ],
      },
      {
        name: 'Vegetarian & Seafood',
        items: [
          { name: 'Veg Dum Biryani', desc: 'Seasonal vegetables & paneer', price: 320, tag: 'veg' },
          { name: 'Mushroom Truffle Biryani', desc: 'Wild mushrooms, truffle oil', price: 450, tag: 'veg' },
          { name: 'Prawn Malabar Biryani', desc: 'Coastal spices, curry leaves', price: 520, tag: 'seafood' },
          { name: 'Egg Biryani', desc: 'Boiled eggs, pepper masala', price: 280, tag: 'veg' },
        ],
      },
    ],
  },
  {
    id: 'starters',
    name: 'Starters',
    icon: '🥟',
    description: 'Small plates to begin your journey',
    subcategories: [
      {
        name: 'Indian',
        items: [
          { name: 'Paneer Tikka', desc: 'Char-grilled cottage cheese', price: 320, tag: 'veg' },
          { name: 'Chicken Seekh Kebab', desc: 'Minced chicken, tandoor smoked', price: 380, tag: 'spicy' },
          { name: 'Samosa Chaat', desc: 'Crushed samosa, chutneys & yogurt', price: 220, tag: 'veg' },
          { name: 'Tandoori Platter', desc: 'Assorted kebabs for two', price: 680, tag: 'bestseller' },
        ],
      },
      {
        name: 'Continental',
        items: [
          { name: 'Soup of the Day', desc: 'Ask your server', price: 180, tag: 'hot' },
          { name: 'Caesar Salad', desc: 'Romaine, parmesan & croutons', price: 320, tag: 'veg' },
          { name: 'Garlic Prawns', desc: 'Butter, white wine & parsley', price: 520, tag: 'seafood' },
          { name: 'Bruschetta Trio', desc: 'Tomato, olive & mushroom', price: 350, tag: 'veg' },
        ],
      },
    ],
  },
  {
    id: 'curries',
    name: 'Curries & Mains',
    icon: '🍛',
    description: 'Rich gravies and hearty plates',
    subcategories: [
      {
        name: 'Chicken',
        items: [
          { name: 'Butter Chicken', desc: 'Tomato-cream, fenugreek', price: 420, tag: 'mild' },
          { name: 'Chicken Tikka Masala', desc: 'Smoky tikka in spiced gravy', price: 400, tag: 'bestseller' },
          { name: 'Kadhai Chicken', desc: 'Bell pepper, tomato & coriander', price: 380, tag: 'spicy' },
        ],
      },
      {
        name: 'Vegetarian',
        items: [
          { name: 'Palak Paneer', desc: 'Spinach & cottage cheese', price: 340, tag: 'veg' },
          { name: 'Dal Makhani', desc: 'Slow-cooked black lentils', price: 280, tag: 'veg' },
          { name: 'Malai Kofta', desc: 'Creamy nut gravy, fried dumplings', price: 360, tag: 'veg' },
        ],
      },
      {
        name: 'Seafood & Lamb',
        items: [
          { name: 'Goan Fish Curry', desc: 'Coconut, kokum & chili', price: 480, tag: 'seafood' },
          { name: 'Lamb Rogan Josh', desc: 'Kashmiri red chili, aromatic', price: 520, tag: 'spicy' },
          { name: 'Prawn Malai Curry', desc: 'Coconut cream, mild', price: 550, tag: 'seafood' },
        ],
      },
    ],
  },
  {
    id: 'breads-rice',
    name: 'Breads & Rice',
    icon: '🫓',
    description: 'Fresh from the tandoor',
    subcategories: [
      {
        name: 'Indian Breads',
        items: [
          { name: 'Butter Naan', desc: 'Soft leavened bread', price: 80, tag: 'veg' },
          { name: 'Garlic Naan', desc: 'Chopped garlic & coriander', price: 100, tag: 'veg' },
          { name: 'Cheese Naan', desc: 'Stuffed with melted cheese', price: 140, tag: 'veg' },
          { name: 'Tandoori Roti', desc: 'Whole wheat, charred', price: 60, tag: 'veg' },
          { name: 'Lachha Paratha', desc: 'Flaky, layered', price: 90, tag: 'veg' },
        ],
      },
      {
        name: 'Rice',
        items: [
          { name: 'Steamed Basmati', desc: 'Fragrant long grain', price: 150, tag: 'veg' },
          { name: 'Jeera Rice', desc: 'Cumin tempered', price: 170, tag: 'veg' },
          { name: 'Saffron Pulao', desc: 'Golden, with nuts', price: 220, tag: 'veg' },
        ],
      },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: '🍰',
    description: 'A sweet finish',
    subcategories: [
      {
        name: 'Indian Sweets',
        items: [
          { name: 'Gulab Jamun', desc: 'Warm milk dumplings in syrup', price: 150, tag: 'veg' },
          { name: 'Rasmalai', desc: 'Soft discs in saffron milk', price: 180, tag: 'veg' },
          { name: 'Kulfi Falooda', desc: 'Rose milk, vermicelli & nuts', price: 220, tag: 'bestseller' },
        ],
      },
      {
        name: 'Western',
        items: [
          { name: 'Chocolate Lava Cake', desc: 'Molten center, vanilla ice cream', price: 280, tag: 'veg' },
          { name: 'Tiramisu', desc: 'Espresso-soaked ladyfingers', price: 320, tag: 'veg' },
          { name: 'Crème Brûlée', desc: 'Torched caramel crust', price: 300, tag: 'veg' },
        ],
      },
    ],
  },
  {
    id: 'mocktails',
    name: 'Mocktails & Coolers',
    icon: '🍹',
    description: 'Zero-proof, full flavor',
    subcategories: [
      {
        name: 'Signature Mocktails',
        items: [
          { name: 'Sage Mojito', desc: 'Mint, lime & soda', price: 220, tag: 'cold' },
          { name: 'Virgin Piña Colada', desc: 'Pineapple, coconut cream', price: 250, tag: 'cold' },
          { name: 'Blue Lagoon', desc: 'Citrus, blue curaçao syrup', price: 240, tag: 'cold' },
          { name: 'Spiced Tamarind Cooler', desc: 'Tangy, chili rim', price: 200, tag: 'spicy' },
        ],
      },
      {
        name: 'Fresh Juices',
        items: [
          { name: 'Watermelon Mint', desc: 'Pressed fresh', price: 180, tag: 'veg' },
          { name: 'Orange Carrot Ginger', desc: 'Immunity boost', price: 200, tag: 'veg' },
          { name: 'Sweet Lime Soda', desc: 'Classic shikanji style', price: 120, tag: 'veg' },
        ],
      },
    ],
  },
];

export const tagLabels = {
  bestseller: 'Bestseller',
  veg: 'Veg',
  spicy: 'Spicy',
  mild: 'Mild',
  hot: 'Hot',
  cold: 'Cold',
  glass: 'Per Glass',
  seafood: 'Seafood',
  chef: "Chef's Pick",
};
