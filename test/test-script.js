/*jshint esversion: 6 */
const chai = require ('chai');
const Zombies = require ('../zombies');

chai.should();


describe('Item', () =>{

  let item = Zombies.item;

  it('should be a class', ()=> {
    item.should.be.a.function
  });

  it('should have a name', ()=> {
    item.should.have.property('name');
  });

  it('name should be string like cheese',() =>{
    item.name.should.be.a('string');
  });

});

describe('Weapon', () =>{

  let weapon = Zombies.weapon;
  let wand;

  beforeEach(()=>{
    wand = new weapon("wand", 69);
  });

  it('should be a class', ()=>{
    weapon.should.be.a.function
  });

  it('should have a name and damage values', ()=> {
    wand.should.have.property('name');
    wand.should.have.property('damage', 69);
    Object.keys(wand).length.should.equal(2);
  });

  it('name should be of type string', ()=>{
    wand.name.should.be.a('string');
  });

  it('damage should be of type number', () => {
    let sword = new weapon("sword", 12);
    sword.damage.should.be.a('number');
  });

  // it('should cause damage man', ()=> {
  //   wand.damage.should.equal(69);
  // });  

  it('Weapon should extend Items, obviously', () => {
    weapon.prototype instanceof Zombies.item;
  });

  it('Weapon should also be an item, mayne', () => {
    wand instanceof Zombies.item;
  });

});

describe ('Food', () => {
  let food = Zombies.food;
  let cereal;

  beforeEach(() => {
    cereal = new food('cereal',69);
  });

  it('Food should be a class', () => {
    food.should.be.a.function
  });

  it('should have parameters of name and energy', ()=> {
    cereal.should.have.property('name','cereal');
    cereal.should.have.property('energy', 69);
  });

  it('Food should extend Item', () => {
    food.prototype instanceof Zombies.item
  });

});
