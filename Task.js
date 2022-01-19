class Task {
    constructor(elem, adat) {
        this.elem = elem;
        this.adat = adat;

        this.title = this.elem.children("h3");
        this.description = this.elem.children(".description");
        this.date = this.elem.children(".date");
        this.user = this.elem.children(".user-id");
        this.lajk = this.elem.children(".lajk");        
        this.edit=this.elem.children(".edit");
        this.delete=this.elem.children(".delete");

        this.setAdatok(this.adat);

        this.delete.on("click", () => {
            this.kattintas();
          });

    }
    kattintas() {
        this.kattintasTrigger();
      }
    
      kattintasTrigger() {
        let esemeny = new CustomEvent("deleteKattintas", { detail: this.adat });
        window.dispatchEvent(esemeny);
      }

    setAdatok(adat) {
        this.title.html(adat.title);
        this.description.html(adat.description);
        this.date.html(adat.date);
        this.lajk.html(adat.lajk);
    }


}