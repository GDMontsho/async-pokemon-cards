const form = document.querySelector("form");
const input = document.getElementById("input");
const container = document.querySelector(".container");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameOfPokemon = input.value.trim().toLowerCase();
  if (nameOfPokemon) {
    fetchNameOfPokemon(nameOfPokemon);
  }
});

function fetchNameOfPokemon(pokemonName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((res) => res.json())
    .then((data) => {
      displayPokemonChar(data);
    });
}

function displayPokemonChar(pokemon) {
  container.innerHTML = "";

  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("card");

  const pokemonName = document.createElement("p");
  pokemonName.textContent =
    pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  pokemonCard.appendChild(pokemonName);

  const pokemonImg = document.createElement("img");
  pokemonImg.src = pokemon.sprites.front_default;
  pokemonImg.alt = pokemon.name;
  pokemonCard.appendChild(pokemonImg);

  const abilities = document.createElement("div");
  abilities.classList.add("abilities");
  abilities.innerHTML = `<p> <b> PokeMon Abilities:</b></p>`;
  pokemon.abilities.forEach((ability) => {
    const abilityEl = document.createElement("p");
    abilityEl.textContent = ability.ability.name;
    abilities.appendChild(abilityEl);
  });
  pokemonCard.appendChild(abilities);

  container.appendChild(pokemonCard);
}
