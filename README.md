# Create A Grocery App

## The Goal

In this lab, you're going to build the front-end for a digital grocery store! Users will be able to add and remove items to and from their cart and see a live total updated as they make changes.

## Getting Started

1. Clone this repository using `git clone`
2. `cd` into the project folder
3. `npm install`
4. `npm start`

## The Lab

### Part One: Display the Items

Before starting, look at the `App.js` file, and pay special attention to the components used - looks like it only has three so far: `<Hero />`, `<ProductList />`, and `<ShoppingCart />`. However, you'll notice that there's also another component in the `components` folder called `Product.tsx`. That component will be used not as a child component of the `App`, but as its grandchild component instead. So for this first part of the lab we'll be developing mostly in the `ProductList.tsx` file, where we can insert some `<Product />` components, and in the `Product.tsx` file, where we can make that product more interactive and configurable.

###### Core features:

1. In `productList.tsx`, Replace the placeholder text with at least one `<Product />` component.
2. The `ProductList` component has a prop called `inventory`, but right now it's typed with `any`, which is not ideal. Type it correctly.
3. Pass the first string in that inventory array down to the first `<Product />` component as a prop (called something like `name`), and then go display the product name as part of the `Product` component in the `product.tsx` file.
4. Using a similar strategy as in step 2, try to display that price on the product. You'll need to also figure out the best way to display the price formatted in human-readable currency, since the price itself is in cents.
5. Add two more instances of the <Product/> component to complete this for all three of the products in our starting inventory.
6. Doing this manually is pretty tedious, and would be impossible if we had 100 or so items. Use a `.map()` method to display all the items instead.

### Part Two: Create the add-remove functions

This app doesn't have redux added to it yet. You'll need to manage the state of the user's `cart` in a redux store.

###### Core features:

1. Add a provider to the application.
2. Create a redux folder and create a store. Export it and add it to your provider as a prop.
3. Create a reducer and include it in your `createStore`.
4. Create an initial state and pass it as a default argument. How you structure your state is largely up to you, but if you'd like to match the solutions branch, you'll want to use this example:

```js
const initialState = {
  cart: [
    {
      product: {
        name: "Apple",
        priceInCents: 199,
        productID: "a1582",
      } as InventoryItem,
      qty: 1,
    },
    {
      product: {
        name: "Loaf of Bread",
        priceInCents: 150,
        productID: "b2693",
      } as InventoryItem,
      qty: 1,
    },
    {
      product: {
        name: "Milk",
        priceInCents: 250,
        productID: "m3704",
      } as InventoryItem,
      qty: 1,
    },
  ],
};
```

5. Configure the add button to dispatch actions that will add the designated item from your cart.
6. Add a case to your reducer so that the add button works as intended.
7. Repeat the above two steps to make the remove button work as well. Remember to include some logic to account for what happens if you try to remove an item that isn't there.

###### Stretch features:

- Write a selector that lets you know which items are currently in your cart, and make the "remove" button either hidden or unclickable when there are no items of that type in your cart.

### Part Three: Build the shopping cart display

Now that state is updating, we need to get the contents on screen.

###### Core features:

1. Create and use a selector to access the store's cart within your `ShoppingCart` component.
2. Now that the data is in your `ShoppingCart` component, write some code to compute and display that total where the hard-coded placeholder `200` is currently listed.
3. Create a check to see if your cart has at least one item in it. If not, display a message like `your cart is empty :(`.
4. Map over the items to display everything in your cart. Ensure that items with a quantity of zero do not display.
5. Display the item name, quantity, and total price of each item in the Shopping Cart.
6. Create a clickable "x" on each line that removes the item from your cart. This will need a dispatch.

###### Stretch features:

- Right now, you are probably seeing unusual price formats like $3.5 instead of $3.50, and you may get some rounding errors in JavaScript that will lead to even wackier issues like $1.989999999999 (instead of $1.99). Consider creating a `priceFormatter` function to convert a number into a string that always has exactly two digits after the decimal point.

## Extensions

- Most stores have a `+` and `-` button to change quantities directly in the shopping cart. Add those. Consider removing the "remove item" from the `Product` component, since that feels unusual.
- Right now our inventory says which items we have for sale, but doesn't keep track of quantities, so if a user ordered more apples than we have in stock, we'd be unable to fulfill the order. Figure out how we can handle that.
- Add in 3 more products and group them into shelves by category - dairy, produce, etc. Notice how little extra work this took when we're using Redux (compared to if we needed to prop drill further down).
