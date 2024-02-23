export class IdolServices {
  constructor(database) {
    this.db = database;
    console.log("constructor database", this.db);
  }
  get(id) {
    console.log("Getting idol");
    return this.db.filter((item) => item.id == id)[0];
  }
  getAll() {
    console.log("database", this.db);
    return this.db;
  }
  create(idol) {
    console.log("creating idol");
    this.db.push({ id: this.db.length + 1, ...idol });
    console.log("database", this.db);
  }
  update(idol) {
    console.log("Editing idol");
    this.delete(idol.id);
    this.db.push(idol);
    console.log("updated database", this.db);
  }
  delete(id) {
    let idolIndex;
    this.db.forEach((item, index) => {
      if (item.id == id) {
        idolIndex = index;
        console.log("idolIndex", idolIndex);
      }
    });
    this.db.splice(idolIndex, 1);
  }
}
