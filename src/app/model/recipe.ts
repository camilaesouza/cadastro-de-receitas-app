export class Recipe {
  id: number;
  name: string;
  author: string;
  value: number;
  description: string;
  prepare: string;

	constructor(id:number, name: string, author:string, value:number,  description: string, prepare: string) {
	  this.id = id;
    this.name = name;
    this.author = author;
    this.value = value;
    this.description = description;
    this.prepare = prepare;
	}
}
