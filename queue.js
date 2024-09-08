class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  enqueue(value) {
      const newNode = new Node(value);
      if (!this.tail) {
          this.head = this.tail = newNode;
      } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
      }
      this.length++;
  }

  dequeue() {
      if (!this.head) {
          return null;
      }
      const value = this.head.value;
      this.head = this.head.next;
      if (this.head) {
          this.head.prev = null;
      } else {
          this.tail = null;
      }
      this.length--;
      return value;
  }

  peek() {
      return this.head ? this.head.value : null;
  }

  size() {
      return this.length;
  }

  display() {
      let current = this.head;
      const values = [];
      while (current) {
          values.push(current.value);
          current = current.next;
      }
      return values.join(' -> ');
  }
}

const queue = new DoublyLinkedList();

function enqueue() {
  const value = document.getElementById('valueInput').value;
  if (value) {
      queue.enqueue(value);
      document.getElementById('valueInput').value = '';
      displayQueue();
  }
}

function dequeue() {
  queue.dequeue();
  displayQueue();
}

function peek() {
  document.getElementById('queuePeek').innerText = `Front: ${queue.peek()}`;
}

function size() {
  document.getElementById('queueSize').innerText = `Size: ${queue.size()}`;
}

function displayQueue() {
  document.getElementById('queueDisplay').innerText = queue.display();
}
