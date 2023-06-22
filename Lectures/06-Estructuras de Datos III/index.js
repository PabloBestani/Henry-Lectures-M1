
// Implementar la clase BinarySearchTree, definiendo los siguientes métodos
recursivos:
//   - size: retorna la cantidad total de nodos del árbol

//   - insert: agrega un nodo en el lugar correspondiente

//   - contains: retorna true o false luego de evaluar si cierto valor existe
//dentro del árbol

//   - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS)
//en cualquiera de sus variantes, según se indique por parámetro
//("post-order", "pre-order", o "in-order"). Nota:
//si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.

//   - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

//   El ábrol utilizado para hacer los tests se encuentra representado en
//la imagen bst.png dentro del directorio homework.


class BinarySearchTree {
    constructor(value) {
       this.value = value;
       this.left = null;
       this.right = null;
    };
 };
 
 BinarySearchTree.prototype.size = function() {
    let sum = 1;
    if (this.left) sum += this.left.size();
    if (this.right) sum += this.right.size();
    return sum;
 };
 
 BinarySearchTree.prototype.insert = function(value) {
    if (value < this.value) {
        if (this.left === null) {
            this.left = new BinarySearchTree(value);
        } else {
            this.left.insert(value);
        }
    } else if (value > this.value) {
        if (this.right === null) {
            this.right = new BinarySearchTree(value);
        } else {
            this.right.insert(value);
        }
    }
 };
 
 BinarySearchTree.prototype.contains = function(value) {
    if (value === this.value) return true;
    else if (value < this.value) {
        if (this.left) return this.left.contains(value);
        return false;
    } else {
        if (this.right) return this.right.contains(value);
        return false;
    }
 };
 
 BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {
    switch (order) {
       case 'post-order':
          this.left && this.left.depthFirstForEach(cb, order);
          this.right && this.right.depthFirstForEach(cb, order);
          cb(this.value);
          break;
       case 'pre-order':
          cb(this.value);
          this.left && this.left.depthFirstForEach(cb, order);
          this.right && this.right.depthFirstForEach(cb, order);
          break;
       default:
          this.left && this.left.depthFirstForEach(cb, order);
          cb(this.value);
          this.right && this.right.depthFirstForEach(cb, order);
          break;
    }
 };
 
 
 BinarySearchTree.prototype.breadthFirstForEach = function(cb) {
    let queue = [this];
    while (queue.length > 0) {
       let aux = queue.shift();
       aux.left && queue.push(aux.left);
       aux.right && queue.push(aux.right);
       cb(aux.value);
    }
 };
 