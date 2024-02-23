
export class IdolServices {
  constructor(database) {
    this.db = database;
    console.log("constructor database", this.db);
  }
  get(id) {}
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
    this.db.filter((item) => {
      if (item.id == idol.id) {
        console.log('We gound your idol');
      } 
    })
  }
  delete(id) {}
}
