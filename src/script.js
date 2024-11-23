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

  const cardInner = document.createElement("div");
  cardInner.classList.add("card-inner");

  const cardFront = document.createElement("div");
  cardFront.classList.add("card-back");

  const pokemonName = document.createElement("p");
  pokemonName.classList.add("pokemonName");
  pokemonName.textContent =
    pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  cardFront.appendChild(pokemonName);

  const pokemonImg = document.createElement("img");
  pokemonImg.src = pokemon.sprites.front_default;
  pokemonImg.alt = pokemon.name;
  cardFront.appendChild(pokemonImg);

  const abilities = document.createElement("div");
  abilities.classList.add("abilities");
  abilities.innerHTML = `<p><b>Pokémon Abilities:</b></p>`;
  pokemon.abilities.forEach((ability) => {
    const abilityEl = document.createElement("p");
    abilityEl.textContent = ability.ability.name;
    abilities.appendChild(abilityEl);
  });
  cardFront.appendChild(abilities);

  const stats = document.createElement("div");
  stats.classList.add("stats");
  stats.innerHTML = `<p><b>Pokémon Stats:</b></p>`;
  pokemon.stats.forEach((stat) => {
    const statEl = document.createElement("p");

    const statNameSpan = document.createElement("span");
    statNameSpan.classList.add("stat-name");
    statNameSpan.textContent = stat.stat.name;

    const statValueSpan = document.createElement("span");
    statValueSpan.classList.add("stat-value");
    statValueSpan.textContent = stat.base_stat;

    statEl.appendChild(statNameSpan);
    statEl.appendChild(statValueSpan);

    stats.appendChild(statEl);
  });
  cardFront.appendChild(stats);

  const cardBack = document.createElement("div");
  cardBack.classList.add("card-front");

  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);

  pokemonCard.appendChild(cardInner);
  container.appendChild(pokemonCard);
}
