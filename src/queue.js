const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.start = null;
  }

  enqueue(value) {
    if (this.start !== null) {
      //если стартовый нод вообще существует, то запускаем условие
      let current = this.start;
      while (current.next !== null) {
        current = current.next;
      } //проходим с начала до конца очереди
      current.next = new ListNode(value);
      //создаём новый элемент в конце
    } else {
      this.start = new ListNode(value);
    }
  }

  dequeue() {
    if (this.start == null) return;
    let current = this.start;
    this.start = current.next;
    //меняем начало на следующий элемент и возвращаем выбывающий
    return current.value;
  }
  getUnderlyingList() {
    return this.start;
  }
}

module.exports = {
  Queue,
};
