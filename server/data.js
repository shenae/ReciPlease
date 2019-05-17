
let dotenv = require('dotenv').config();
const receipies = [
  
  {
    "name":"Super delicious pasta",
    "picture_url":"https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/37355f45-55ce-4b64-976c-6606c8fd2b34/991b39ed-3eb4-4ae2-96c1-19b8f0593126/1280x720/match/image.jpg",
    "rating":2,
    "ingredients":["Pasta and 10 tomatoes"],
    "directions":"Do whatever you want",
    "categories":"main dish",
  },
  {
    "name":"Super delicious",
    "picture_url":"https://www.seriouseats.com/recipes/images/2016/08/20160827-cherry-tomato-pasta-13-750x563.jpg",
    "rating":4,
    "ingredients":["10 tomatoes"],
    "directions":"Do whatever you want",
    "categories":"main dish",
  },
  {
    "name":"Super delicious",
    "picture_url":"https://kirbiecravings.com/wp-content/uploads/2018/09/2-ingredient-keto-pasta-5.jpg",
    "rating":6,
    "ingredients":["10 tomatoes"],
    "directions":"Do whatever you want",
    "categories":"main dish",
  },
  {
    "name":"Super delicious",
    "picture_url":"https://cdn.crownmediadev.com/cf/91/3fbd602f497baa318b600934de89/home-family-homemade-pasta-with-carbonara-sauce.jpg",
    "rating":7,
    "ingredients":["10 tomatoes"],
    "directions":"Do whatever you want",
    "categories":"main dish",
  },
  {
    "name":"Super delicious",
    "picture_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxahKzEh1TeKSG0BJhDe2kfX_MX2yiP88WLrCAywVfF_gfygY2",
    "rating":8,
    "ingredients":["10 tomatoes"],
    "directions":"Do whatever you want",
    "categories":"main dish",
  },
  {
    "name":"Super delicious",
    "picture_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxahKzEh1TeKSG0BJhDe2kfX_MX2yiP88WLrCAywVfF_gfygY2",
    "rating":9,
    "ingredients":["10 tomatoes"],
    "directions":"Do whatever you want",
    "categories":"main dish",
  },
  {
    "name":"Super delicious",
    "picture_url":"https://thesaltymarshmallow.com/wp-content/uploads/2018/08/italian-sausage-pasta1.jpg",
    "rating":10,
    "ingredients":["10 tomatoes"],
    "directions":"Do whatever you want",
    "categories":"main dish"
  },
  {
    "name":"Fried Chicken",
    "picture_url":"https://thesaltymarshmallow.com/wp-content/uploads/2018/08/italian-sausage-pasta1.jpg",
    "rating":10,
    "ingredients":["2 teaspoons salt", "1 teaspoon  pepper", "1 teaspoon  oregano", "1 teaspoon  paprika", "1 teaspoon  white pepper", "1 teaspoon  garlic powder", "2 cups  buttermilk", "2 cups  all-purpose flour", "1 teaspoon  salt", "1 teaspoon  pepper", "1 teaspoon  paprika", "1 teaspoon  garlic powder", "½ teaspoon  cayenne pepper"],
    "directions":"Combine the chicken with all the marinade ingredients in a large bowl. Stir to make sure each piece of chicken is coated evenly, then cover with cling film and chill for about an hour. Combine all of the breading ingredients in a large bowl, then roll the marinated chicken pieces in the flour, shaking off excess. Repeat with the rest of the chicken. Heat oil in a skillet over high heat to about 350°F. Fry 3-4 pieces at a time for about 15-20 minutes until the breading is dark golden brown, flipping several times to ensure the breading cooks evenly and does not burn. The heat of the oil should drop to about 320°F. Drain the chicken on paper towels or on a wire rack, resting for about 10-15 minutes.",
    "categories":"american"
  },
  {
    "name":"Banana Buckwheat Pancakes",
    "picture_url":"https://i.imgur.com/6sQ3zuV.jpg",
    "rating":5,
    "ingredients": ["1 cup buckwheat flour", "1 tablespoon sugar", "1 teaspoon baking powder", "1 teaspoon baking soda", "1/4 teaspoon salt", "1 1/4 cups almond milk", "1 egg", "1/2 teaspoon vanilla extract", "3 ripe bananas"],
    "directions": "In a large mixing bowl, add all of the dry ingredients. In a separate bowl, mash the bananas. Measure the almond milk and add the egg and the vanilla extract to it. Pour the milk mixture into the bowl with the bananas and mix with a fork to break up the egg yolk.  Add the wet ingredients to the dry ingredients and mix until just combined. Heat a large nonstick pan at medium heat. Drop 1/4 cup of batter to the pan. Turn the pancake over to cook on the other side when bubbles on the outer edges break. Serve with sliced bananas.",
    "categories":"american"
  },
  {
    "name":"Tofu Scramble",
    "picture_url":"https://i.imgur.com/h9gAp4m.jpg",
    "rating":5,
    "ingredients": ["2 cups fresh spinach", "1 cup cherry tomatoes halved", "2 teaspoons  tumeric", "1 tablespoon italian or mediterranean spices", "1 teaspoon garlic powder", "1 cup mushrooms sliced", "1 package extra firm tofu", "1/2 teaspoon coarse black pepper", "1 tablespoon olive oil"],
    "directions": "Drain the tofu from the package cut into cubes. Place them in a large mixing bowl. Mix the spices with the tofu until the spices are evenly distributed. Cut the tomatoes in half, slice the mushrooms and place in a separate bowl with the spinach. Heat a large nonstick pan at medium heat with the olive oil. Add the tofu mixture to the pan and sautee for 2 minutes. Add the vegetables to the pan and sautee for another 5 minutes. Add salt and pepper to taste.",
    "categories":"vegetarian"
  },
  {
    "name":"Good Eats Meatloaf",
    "picture_url":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/13/0/GC_good-eats-meatloaf_s4x3.jpg.rend.hgtvcom.406.305.suffix/1380061114628.jpeg",
    "rating":10,
    "ingredients":["6 ounces garlic-flavored croutons", "1/2 teaspoon ground black pepper", "1/2 teaspoon cayenne pepper", "1 teaspoon chili powder", "1 teaspoon dried thyme", "1/2 onion, roughly chopped", "1 carrot, peeled and broken", "3 whole cloves garlic", "1/2 red bell pepper", "18 ounces ground chuck", "18 ounces ground sirloin", "1 1/2 teaspoon kosher salt","1 egg", "For the marinade:", "1/2 cup catsup", "1 teaspoon ground cumin", "Dash Worcestershire sauce", "Dash hot pepper sauce", "1 tablespoon honey"],
  "directions":"Heat oven to 325 degrees F. In a food processor bowl, combine croutons, black pepper, cayenne pepper, chili powder, and thyme. Pulse until the mixture is of a fine texture. Place this mixture into a large bowl. Combine the onion, carrot, garlic, and red pepper in the food processor bowl. Pulse until the mixture is finely chopped, but not pureed. Combine the vegetable mixture, ground sirloin, and ground chuck with the bread crumb mixture. Season the meat mixture with the kosher salt. Add the egg and combine thoroughly, but avoid squeezing the meat. Pack this mixture into a 10-inch loaf pan to mold the shape of the meatloaf.  Combine the catsup, cumin, Worcestershire sauce, hot pepper sauce and honey. Brush the glaze onto the meatloaf.",
    "categories":"american"
  }
]

const users = [{
  "name":"sidgi",
  "email":"example@gmail.com",
  "password":process.env.USER_PASSWORD
}]



const cuisines = [
  {
    "name":"japanese"
  },
  {
    "name":"french"
  },
  {
    "name":"other"
  },
  {
    "name":"american"
  },
  {
    "name":"spanish"
  },
  {
    "name":"vegetarian"
  }
]

module.exports={
  receipies,
  cuisines,
  users
}