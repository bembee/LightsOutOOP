$(function () {
  const szuloElem = $("article");
  const sablonElem = $(".lampa");
  const meret = 9;
  const lampak = [];
  for (let index = 0; index < meret; index++) {
    const ujElem = sablonElem.clone().appendTo(szuloElem);
    const lampa = new Lampa(ujElem, index);
    lampak.push(lampa);
  }
  sablonElem.remove();

  $(window).on("lampaFelkapcsol", (event) => {
    let szam = event.detail.index;
    if (szam >= 3) {
      lampak[szam - 3].setAllapot();
    }
    if (szam % 3 !== 0) {
      lampak[szam - 1].setAllapot();
    }
    if (szam < 6) {
      lampak[szam + 3].setAllapot();
    }
    if (szam % 3 !== 2) {
      lampak[szam + 1].setAllapot();
    }
  });
});
