
export class IdolServices {
  constructor(database) {
    this.db = database;
    console.log("constructor database", this.db);
  }
  get(id) {}
  getAll() {
    console.log("database", this.db);
    return this.db.length > 0
      ? this.db
      : "There are no Idols in your database.";
  }
  create(idol) {
    console.log("creating idol");
    this.db.push({ id: this.db.length + 1, ...idol });
    console.log("database", this.db);
  }
  update(idol) {}
  delete(id) {}
}
