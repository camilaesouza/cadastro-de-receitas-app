export class Recipe {
  id: String;
  name: string;
  description: string;
  prepare: string;

	constructor(id:String, name: string, description: string, prepare: string) {
	  this.id = id;
    this.name = name;
    this.description = description;
    this.prepare = prepare;
	}
}
