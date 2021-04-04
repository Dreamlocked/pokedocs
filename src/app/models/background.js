import ColorThief from "./node_modules/colorthief/dist/color-thief.mjs";
const ColorThief = require("colorthief");

const colorThief = new ColorThief();

const img = document.querySelector("img");

if (img.complete) {
  colorThief.getColor(img);
} else {
  image.addEventListener("load", function () {
    colorThief.getColor(img);
  });
}
function bgcolor(Nimg) {
  const img = ColorThief.resolve(process.cwd(), Nimg);

  ColorThief.getColor(img)
    .then((color) => {
      console.log(color);
    })
    .catch((err) => {
      console.log(err);
    });

  ColorThief.getPalette(img, 5)
    .then((palette) => {
      console.log(palette);
    })
    .catch((err) => {
      console.log(err);
    });
}
if (this.pokemon.id.toString().length === 1) {
  this.rute = "00" + this.pokemon.id;
} else if (this.pokemon.id.toString().length === 2) {
  this.rute = "0" + this.pokemon.id;
} else {
  this.rute = this.pokemon.id.toString();
}
this.pic =
  "../assets/images/pokemons/" + this.rute + this.pokemon.name.english + ".png";
bgcolor(this.pic);
