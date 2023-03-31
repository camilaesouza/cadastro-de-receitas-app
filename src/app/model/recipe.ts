export class Recipe {
  name: string;
  description: string;
  prepare: string;

	constructor(name: string, description: string, prepare: string) {
	  this.name = name;
    this.description = description;
    this.prepare = prepare;
	}
}
