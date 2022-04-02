/*-----------
    SELECTORS
-------------*/

let main = document.querySelector(".main");
let nameOutput = document.querySelector(".name");
let hexOutput = document.querySelector(".hex");
let shuffle = document.querySelector(".shuffle");
let reset = document.querySelector(".reset");

/*---------
    GLOBALS
-----------*/

let previous;

const storage = [
  ["AliceBlue", "F0F8FF"],
  ["AntiqueWhite", "FAEBD7"],
  ["Aquamarine", "7FFFD4"],
  ["Beige", "F5F5DC"],
  ["BlueViolet", "8A2BE2"],
  ["BurlyWood", "DEB887"],
  ["CadetBlue", "5F9EA0"],
  ["Chartreuse", "7FFF00"],
  ["Coral", "FF7F50"],
  ["CornflowerBlue", "6495ED"],
  ["Crimson", "DC143C"],
  ["DarkGrey", "A9A9A9"],
  ["DarkKhaki", "BDB76B"],
  ["DarkOrchid", "9932CC"],
  ["DarkSeaGreen", "8FBC8F"],
  ["DarkSlateBlue", "483D8B"],
  ["DarkSlateGrey", "2F4F4F"],
  ["DodgerBlue", "1E90FF"],
  ["GhostWhite", "F8F8FF"],
  ["Gold", "FFD700"],
  ["GreenYellow", "ADFF2F"],
  ["HotPink", "FF69B4"],
  ["IndianRed", "CD5C5C"],
  ["Lavender", "E6E6FA"],
  ["LavenderBlush", "FFF0F5"],
  ["LemonChiffon", "FFFACD"],
  ["LightGreen", "90EE90"],
  ["LightSkyBlue", "87CEFA"],
  ["LightSteelBlue", "B0C4DE"],
  ["MintCream", "F5FFFA"],
  ["PaleGreen", "98FB98"],
  ["SlateBlue", "6A5ACD"],
  ["Tomato", "FF6347"],
];

/*-----------
    FUNCTIONS
-------------*/

function shuffleLogic() {
  let random = Math.floor(Math.random() * storage.length);

  //Checking for repeat values.
  if (previous === random && random != storage.length - 1) {
    random = random + 1;
  } else if (previous === random && random != 0) {
    random = random - 1;
  }

  //Indexed values.
  let nameValue = storage[random][0];
  let hexValue = storage[random][1];

  //Styles.
  document.body.style.backgroundColor = nameValue;
  document.body.style.color = "var(--Textlight)";
  main.style.border = "2px solid var(--BGdark)";

  shuffle.style.backgroundColor = "var(--BGdark)";
  shuffle.style.color = "var(--Textdark)";
  reset.style.backgroundColor = "var(--BGdark)";
  reset.style.color = "var(--Textdark)";

  //Text.
  nameOutput.innerHTML = `<i class="fa-solid fa-signature"></i> ${nameValue}`;
  hexOutput.innerHTML = `<i class="fa-solid fa-hashtag"></i> ${hexValue}`;

  //Setting previous value.
  previous = random;
}

function resetLogic() {
  //Styles.
  document.body.style.backgroundColor = "var(--BGdark)";
  document.body.style.color = "var(--Textdark)";
  main.style.border = "2px solid var(--BGlight)";

  shuffle.style.backgroundColor = "var(--BGlight)";
  shuffle.style.color = "var(--Textlight)";
  reset.style.backgroundColor = "var(--BGlight)";
  reset.style.color = "var(--Textlight)";

  //Text.
  nameOutput.innerHTML = '<i class="fa-solid fa-signature"></i> Name';
  hexOutput.innerHTML = '<i class="fa-solid fa-hashtag"></i> Hex';
}

/*-----------------
    EVENT LISTENERS
-------------------*/

shuffle.addEventListener("click", () => {
  shuffleLogic();
});

reset.addEventListener("click", () => {
  resetLogic();
});
