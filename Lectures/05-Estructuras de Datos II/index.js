
class LinkedList {
  constructor() {
    this._length = 0;
    this.head = null;
    this.tail = null;
  }
}; 


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};


Node.prototype.getNode = function(n){
  if (n === 1) return this;
  return this.getNode(n - 1)
}


LinkedList.prototype.getNode = function(n) {
  // if (n > this._length) return null;
  
  // let current = this.head;
  // let counter = n;
  
  // if (!current) return null;
  // while (current.next && counter > 1) {
  //     current = current.next;
  //     counter--;
  // }
  // return current;
  if (n > this._length) return null;
  return this.head.getNode(n);
}


LinkedList.prototype.add = function(value) {
  let node = new Node(value);
  let currTail = this.tail;
  if (!this.tail) {
      this.head = node;
      this.tail = node;
      this._length = 1;
      return this.tail;
  }
  currTail.next = node;
  this.tail = node;
  this._length++;
  return this.tail;
};


LinkedList.prototype.remove = function() {
  if (!this._length) return null;

  else if (this._length === 1) {
      let removed = this.tail;
      this.head = null;
      this.tail = null;
      this._length--;
      return removed.value;

  } else {
      let removed = this.tail;
      let newTail = this.getNode(this._length - 1);
      newTail.next = null;
      this.tail = newTail;
      this._length--;
      return removed.value;
  }
};


LinkedList.prototype.search = function(arg) {
  let current = this.head;
  if (!current) return null;

  if (typeof(arg) !== 'function') {
    while (current.value !== arg) {
      if (current.next) current = current.next;
      else return null;
    }
    return current.value;

  } else {
    while (!arg(current.value)) {
      if (current.next) current = current.next;
      else return null;
    }
    return current.value;
  }
};
  
  
  
  
  

let ListaMascotas = new LinkedList();

ListaMascotas.add('Bartolomiau');
ListaMascotas.add('Palta');
ListaMascotas.add('Tota');
ListaMascotas.add('Milaneso');

//ListaMascotas.getNode(ListaMascotas._length - 1);
// ListaMascotas.remove();
// ListaMascotas.remove();
// ListaMascotas.remove();

// console.log(ListaMascotas.remove());
// console.log(ListaMascotas.remove());
console.log(ListaMascotas.remove());
console.log(ListaMascotas.search('Tota'));
console.log(ListaMascotas);
console.log(typeof(LinkedList.prototype.search));





//HASH TABLE

//gamaliel: gama@gmail.com
//sol: sol@gmail.com
//barto: barto@gmail.com

//La funcion hasheadora convierte a numero
//gamaliel => 8
//sol => 3
//barto => 5

//[ [3, [{ sol:sol@gmail.com}]] , [5, [{barto:barto@gmail.com}]] ,
//[8, [{gama:gama@gmail.com}]] ];

//la funcion que evita colisiones detecta si ya hay un valor dentro
//de una de las keys