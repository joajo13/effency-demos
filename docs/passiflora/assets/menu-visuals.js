// Original art from the publicly linked Passiflora menu; no generated replacements.
// Suppress old visual identities if the owner changes a product name or ingredients.
export const sourceVisuals={
  "espresso-doble": {
    "name": "Espresso doble",
    "category_id": "infusiones-calientes",
    "description": "2 shots espresso",
    "price_note": "Taza chica",
    "file": "espresso-doble.png",
    "drink": true
  },
  "cortado-chico": {
    "name": "Cortado chico",
    "category_id": "infusiones-calientes",
    "description": "1 shot espresso; leche",
    "price_note": "Taza chica",
    "file": "cortado-chico.png",
    "drink": true
  },
  "lagrima": {
    "name": "Lágrima",
    "category_id": "infusiones-calientes",
    "description": "1/4 shot espresso; leche",
    "price_note": "Taza chica",
    "file": "lagrima.png",
    "drink": true
  },
  "cappuccino": {
    "name": "Cappuccino",
    "category_id": "infusiones-calientes",
    "description": "1 shot espresso; leche. Opcional: cacao / canela",
    "price_note": "Taza Mediana",
    "file": "cappuccino.png",
    "drink": true
  },
  "mocaccino": {
    "name": "Mocaccino",
    "category_id": "infusiones-calientes",
    "description": "1 shot espresso; chocolate semiamargo; leche",
    "price_note": "Taza Mediana",
    "file": "mocaccino.png",
    "drink": true
  },
  "flat-white": {
    "name": "Flat White",
    "category_id": "infusiones-calientes",
    "description": "2 shots espresso; leche",
    "price_note": "Taza Mediana",
    "file": "flat-white.png",
    "drink": true
  },
  "americano": {
    "name": "Americano",
    "category_id": "infusiones-calientes",
    "description": "2 shots espresso; agua a gusto",
    "price_note": "Taza Mediana",
    "file": "americano.png",
    "drink": true
  },
  "te-mate-cocido": {
    "name": "Té / Mate cocido",
    "category_id": "infusiones-calientes",
    "description": "Té (consultar variedades) / mate cocido; agua / leche",
    "price_note": "Taza Mediana",
    "file": "te-mate-cocido.png",
    "drink": true
  },
  "chocolate-caliente": {
    "name": "Chocolate caliente",
    "category_id": "infusiones-calientes",
    "description": "Chocolate semiamargo; leche",
    "price_note": "Taza Mediana",
    "file": "chocolate-caliente.png",
    "drink": true
  },
  "latte": {
    "name": "Latte",
    "category_id": "infusiones-calientes",
    "description": "1 shot espresso; leche",
    "price_note": "Taza Grande",
    "file": "latte.png",
    "drink": true
  },
  "caramel-latte": {
    "name": "Caramel Latte",
    "category_id": "infusiones-calientes",
    "description": "1 shot espresso; syrup; leche",
    "price_note": "Taza Grande",
    "file": "caramel-latte.png",
    "drink": true
  },
  "iced-americano": {
    "name": "Iced Americano",
    "category_id": "infusiones-frias",
    "description": "2 shots espresso; agua",
    "price_note": "",
    "file": "iced-americano.png",
    "drink": true
  },
  "iced-mocaccino": {
    "name": "Iced Mocaccino",
    "category_id": "infusiones-frias",
    "description": "1 shot espresso; chocolate semiamargo; leche",
    "price_note": "",
    "file": "iced-mocaccino.png",
    "drink": true
  },
  "iced-latte": {
    "name": "Iced Latte",
    "category_id": "infusiones-frias",
    "description": "1 shot espresso; leche",
    "price_note": "",
    "file": "iced-latte.png",
    "drink": true
  },
  "iced-caramel-latte": {
    "name": "Iced Caramel Latte",
    "category_id": "infusiones-frias",
    "description": "1 shot espresso; syrup; leche",
    "price_note": "",
    "file": "iced-caramel-latte.png",
    "drink": true
  },
  "espresso-tonic": {
    "name": "Espresso Tonic",
    "category_id": "infusiones-frias",
    "description": "1 shot espresso; agua tónica",
    "price_note": "",
    "file": "espresso-tonic.png",
    "drink": true
  },
  "iced-tea": {
    "name": "Iced Tea",
    "category_id": "infusiones-frias",
    "description": "Té (consultar variedades); agua / leche",
    "price_note": "",
    "file": "iced-tea.png",
    "drink": true
  },
  "cookie-vainilla-y-chips": {
    "name": "Cookie vainilla y chips",
    "category_id": "pasteleria",
    "description": "Con chips de chocolate y sal marina",
    "price_note": "La carta indica: sin gluten",
    "file": "sin-gluten.png",
    "gluten": true
  },
  "postre-estilo-tiramisu": {
    "name": "Postre estilo Tiramisú",
    "category_id": "pasteleria",
    "description": "",
    "price_note": "La carta indica: sin gluten",
    "file": "sin-gluten.png",
    "gluten": true
  },
  "postre-estilo-toffee": {
    "name": "Postre estilo Toffee",
    "category_id": "pasteleria",
    "description": "Endulzado con dátiles",
    "price_note": "La carta indica: sin gluten",
    "file": "sin-gluten.png",
    "gluten": true
  }
};
export const ingredientSwatches=[{"id": "leche", "file": "ingredient-leche.png", "label": "Leche"}, {"id": "cafe", "file": "ingredient-cafe.png", "label": "Café"}, {"id": "agua", "file": "ingredient-agua.png", "label": "Agua"}, {"id": "chocolate", "file": "ingredient-chocolate.png", "label": "Chocolate"}, {"id": "agua-tonica", "file": "ingredient-agua-tonica.png", "label": "Agua tónica"}];
export function visualFor(product){const visual=sourceVisuals[product.id];return visual && ["name","category_id","description","price_note"].every(key=>visual[key]===product[key]) ? visual : null;}
