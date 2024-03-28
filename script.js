const typeChart = {
  bug: { fighting: 0.5, grass: 0.5, ground: 0.5, fire: 2, flying: 2, rock: 2 },
  dark: { dark: 0.5, ghost: 0.5, psychic: 0.5, bug: 2, fairy: 2, fighting: 2 },
  dragon: {
    electric: 0.5,
    fire: 0.5,
    grass: 0.5,
    water: 0.5,
    dragon: 2,
    fairy: 2,
    ice: 2,
  },
  electric: { electric: 0.5, flying: 0.5, steel: 0.5, ground: 2 },
  fairy: {
    bug: 0.5,
    dark: 0.5,
    dragon: 0.5,
    fighting: 0.5,
    poison: 2,
    steel: 2,
  },
  fighting: { bug: 0.5, dark: 0.5, rock: 0.5, fairy: 2, flying: 2, psychic: 2 },
  fire: {
    bug: 0.5,
    fire: 0.5,
    fairy: 0.5,
    grass: 0.5,
    ice: 0.5,
    steel: 0.5,
    ground: 2,
    rock: 2,
    water: 2,
  },
  flying: {
    bug: 0.5,
    fighting: 0.5,
    grass: 0.5,
    ground: 0.5,
    electric: 2,
    ice: 2,
    rock: 2,
  },
  ghost: {
    bug: 0.5,
    fighting: 0.5,
    normal: 0.5,
    poison: 0.5,
    dark: 2,
    ghost: 2,
  },
  grass: {
    electric: 0.5,
    grass: 0.5,
    ground: 0.5,
    water: 0.5,
    bug: 2,
    fire: 2,
    flying: 2,
    ice: 2,
    poison: 2,
  },
  ground: { electric: 0.5, poison: 0.5, rock: 0.5, grass: 2, ice: 2, water: 2 },
  ice: { ice: 0.5, fighting: 2, fire: 2, rock: 2, steel: 2 },
  normal: { ghost: 0.5, fighting: 2 },
  poison: {
    fairy: 0.5,
    fighting: 0.5,
    grass: 0.5,
    poison: 0.5,
    bug: 0.5,
    ground: 2,
    psychic: 2,
  },
  psychic: { fighting: 0.5, psychic: 0.5, bug: 2, dark: 2, ghost: 2 },
  rock: {
    fire: 0.5,
    flying: 0.5,
    normal: 0.5,
    poison: 0.5,
    fighting: 2,
    grass: 2,
    ground: 2,
    steel: 2,
    water: 2,
  },
  steel: {
    bug: 0.5,
    dragon: 0.5,
    fairy: 0.5,
    flying: 0.5,
    grass: 0.5,
    ice: 0.5,
    poison: 0.5,
    psychic: 0.5,
    rock: 0.5,
    steel: 0.5,
    fighting: 2,
    fire: 2,
    ground: 2,
  },
  water: { fire: 0.5, ice: 0.5, steel: 0.5, water: 0.5, electric: 2, grass: 2 },
};

function calculateMultipliers() {
  const urlParams = new URLSearchParams(window.location.search);
  const type1FromQuery = urlParams.get("type1");
  const type2FromQuery = urlParams.get("type2");
  const type1Dropdown = document.getElementById("type1");
  const type2Dropdown = document.getElementById("type2");
  const type1 = type1FromQuery || type1Dropdown.value.toLowerCase();
  const type2 = type2FromQuery || type2Dropdown.value.toLowerCase();

  // Set selected values in dropdowns
  type1Dropdown.value = type1;
  type2Dropdown.value = type2;

  // Update query string
  updateQueryString();

  const multipliers = calculateCombinedMultipliers(type1, type2);

  const multiplierList = document.getElementById("multiplierList");

  while (multiplierList.firstChild)
    multiplierList.removeChild(multiplierList.firstChild);

  // Sort multipliers in decreasing order of effectiveness
  const sortedMultipliers = Object.entries(multipliers)
    .sort(([, a], [, b]) => b - a)
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

  for (const type in sortedMultipliers) {
    const multiplier = sortedMultipliers[type];
    const listItem = document.createElement("li");
    listItem.textContent = `${
      type.charAt(0).toUpperCase() + type.slice(1)
    }: ${multiplier}x`;
    multiplierList.appendChild(listItem);
  }
}

function calculateCombinedMultipliers(type1, type2) {
  const multipliers = {};

  for (const key of [type1, type2]) {
    if (key === "none") {
      continue;
    }

    const typeMultipliers = typeChart[key] || {};
    for (const otherType in typeMultipliers) {
      const multiplier = typeMultipliers[otherType];
      if (multipliers[otherType]) {
        multipliers[otherType] *= multiplier;
      } else {
        multipliers[otherType] = multiplier;
      }
    }
  }

  return multipliers;
}

function updateQueryString() {
  const type1 = document.getElementById("type1").value;
  const type2 = document.getElementById("type2").value;
  const urlParams = new URLSearchParams(window.location.search);

  urlParams.set("type1", type1);
  urlParams.set("type2", type2);

  window.history.replaceState(
    {},
    "",
    `${window.location.pathname}?${urlParams}`
  );
}

// Calculate multipliers on page load if types are provided in the query string
document.addEventListener("DOMContentLoaded", () => {
  calculateMultipliers();
});

// Trigger button click on space or enter key
document.addEventListener("keydown", (event) => {
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    calculateMultipliers();
  }
});
