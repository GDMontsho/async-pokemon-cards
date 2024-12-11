# Pokemon Cards

Created a pokemon search engine using the Fetch API and the Pokemon API.  
Using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), and the [Pokemon API](https://pokeapi.co/);

- This website  allows the user to search for Pokemon. The user is able to interact with the page using an `<input />` field and a `<button>`.

## Features

- There is an `<input />` field for the search criteria
- There is a button which on `click`, uses the `value` of the `<input />` field to;

  - Check the `value` is not empty
  - If `value` is empty, display a warning to the user
  - Search the [Pokemon API](https://pokeapi.co/)
  - Display the result from the API on the page
  - The result includes the following properties;
    - name
    - front_default (image)
    - stats
    - abilities

- The results are styled to look like a card (see **Expected Result** below)

## Result

![Expected result](./reference.gif)
