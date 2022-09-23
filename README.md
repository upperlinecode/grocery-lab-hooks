# Create A Grocery App

## The Goal

In this lab, you're going to build the front-end for a digital grocery store! Users will be able to add and remove items to and from their cart and see a live total updated as they make changes.

## Getting Started

1. Clone this repository using `git clone`
2. `cd` into the project folder
3. `npm install`
4. `npm start`

## The Lab

> Note: to do this lab in TypeScript, change each `.jsx` extension to `.tsx` and add types where necessary. 

### Part One: Display the Items

Before starting, look at the `App.js` file, and pay special attention to the components used - looks like it only has three so far: `<Hero />`, `<ProductList />`, and `<ShoppingCart />`. However, you'll notice that there's also another component in the `components` folder called `Product.jsx`. That component will be used not as a child component of the `App`, but as its grandchild component instead. So for this first part of the lab we'll be developing mostly in the `ProductList.jsx` file, where we can insert some `<Product />` components, and in the `Product.jsx` file, where we can make that product more interactive and configurable.

###### Core features:

1. In `productList.jsx`, Replace the placeholder text with at least one `<Product />` component.
2. The `ProductList` component has a prop called `inventory`, which is an array of objects. Pass the first object's name in that inventory array down to the first `<Product />` component as a prop (called something like `name`), and then go display the product name as part of the `Product` component in the `product.jsx` file.
3. Using a similar strategy as in step 2, try to display that price on the product. You'll need to also figure out the best way to display the price formatted in human-readable currency, since the price itself is in cents.
4. Add two more instances of the `<Product/>` component to complete this for all three of the products in our starting inventory.
5. Doing this manually is pretty tedious, and would be impossible if we had 100 or so items. Use a `.map()` method to display all the items instead.

### Part Two: Build the Shopping Cart

This app doesn't have any state added to it yet. You'll need to manage the state of the user's `cart` at the `App` level so that both the left hand summary AND the individual items can use and manipulate the state.

###### Core features:

1. Add a useState hook to the App component in `App.jsx`.
2. You'll definitely want to start with an initial state - here's a really good example. Add the following code to your `App.jsx` and change your `useState()` to include the `exampleStartingCart` as the default state. While most stores start with an empty cart, we need sample data to start. We can change this later when the app is working.

```js
const exampleStartingCart = [
  {
    product: {
      name: "Apple",
      priceInCents: 199,
      productID: "a1582",
    },
    qty: 1,
  },
  {
    product: {
      name: "Loaf of Bread",
      priceInCents: 150,
      productID: "b2693",
    },
    qty: 1,
  },
  {
    product: {
      name: "Milk",
      priceInCents: 250,
      productID: "m3704",
    },
    qty: 1,
  },
];
```

3. Pass the `cart` state variable to the `<ShoppingCart />` component as a prop.
4. Render each item in the cart as a line item in the `ShoppingCart.jsx` so that the display on screen matches the values in the cart state variable which was passed as a prop. You'll want to pattern match to the existing HTML in that file instead of redesigning your own.
5. Display the item name, the quantity, and the price per item in the shopping cart.

   - Note that right now, the `CartItem` is just a repeated div, so you're welcome to break this out to a separate file and create a brand new component for this if you'd like.

6. Write a function to compute the total price for the entire cart, and display the total on screen.
7. To ensure that your code is truly stateful, go to the React DevTools and inspect the `App` component. You should be able to change the quantity of an item in the state, and see those changes reflected live in your application.

###### Stretch features:

- Most grocery stores add a small subtotal line to items if you are buying more than one of them. So if you were buying two loaves of bread, you'd see both `$1.50 x2` and `$3.00` on your receipt. Come up with some conditional rendering to add small subtotals to items with quantities greater than 1.
- By now, you may be seeing unusual price formats like $3.5 instead of $3.50, and you may get some rounding errors in JavaScript that will lead to even wackier issues like $1.989999999999 (instead of $1.99). Consider creating a `priceFormatter` function to convert a number into a string that always has exactly two digits after the decimal point.

### Part Three: Build the add-remove functions.

Now that the cart displays on screen, it's time to bring our application to life with some interactivity. One important note - since you aren't allowed to mutate state variables in React you MUST make copies of collections (like arrays and objects) instead of mutating their contents directly. Most developers use slices and the [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) to [modify arrays stored in state](https://www.delftstack.com/howto/react/react-setstate-array/#update-array-state-values-in-react).

###### Core features:

1. Start by writing a new function in the `App` component called `addItem(id)` which will allow us to add an item to our cart. Start with JUST an alert like the one below, so that we can connect the function to the buttons on each product before dealing with complicated state updates.

```
alert("Adding item " + id + " to cart");
```

2. Next, pass that function down to the "Add" button and connect it as an `onClick`. An alert should confirm that you've done this.
3. Reconfigure each of these functions so that they increase / decrease the quantity of items in the cart. Be careful not to mutate the array stored in state directly.
4. Celebrate! You've created a grocery store!

###### Stretch features:

## Extensions

- Right now, it may be possible to put a negative number of items in your cart - decide how you want to handle that behavior and implement a fix.
- The shopping cart on the left may display items with 0 quantity. You can fix this in one of two ways:
  - You could ensure that the cart state variable fully removes items with zero quantity. You'll likely need to do some significant work to your `addItem` and `removeItem` functions to get this to work.
  - You could also modify the <ShoppingCart/> component to skip over items in the map if they have zero quantity - you'll likely need to replace the .map with a .filter method if you pursue this route.
- Most stores have a `+` and `-` button to change quantities directly in the shopping cart. Add those. Consider removing the "remove item" from the `Product` component, since that feels unusual.
- Right now our inventory says which items we have for sale, but doesn't keep track of quantities, so if a user ordered more apples than we have in stock, we'd be unable to fulfill the order. Figure out a way to handle that with a separate state variable for your inventory.
  - It's also important that the user knows when something is out of stock - come up with a visual indicator for when something is sold out.
- Add in 3 more products and group them into shelves by category - dairy, produce, etc.
