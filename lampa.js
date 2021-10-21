class Lampa {
  constructor(elem, index) {
    this.elem = elem;
    this.allapot = false;
    this.index = index;
    this.setSzin();
    this.elem.on("click", () => {
      this.setAllapot();
      this.KattintasTrigger();
    });
  }

  setSzin() {
    if (this.allapot) {
      this.elem.css("background-color", "yellow");
    } else {
      this.elem.css("background-color", "green");
    }
  }

  setAllapot() {
    this.allapot = !this.allapot;
    this.setSzin();
  }

  KattintasTrigger() {
    let esemeny = new CustomEvent("lampaFelkapcsol", { detail: this });
    window.dispatchEvent(esemeny);
  }
}
