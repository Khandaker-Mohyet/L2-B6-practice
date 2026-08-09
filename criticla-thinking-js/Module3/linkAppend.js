class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {

    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      console.error("toi says")
      return undefined
    }

    if(index === 0){
      return this.prepend(value);
    }

    if(index === this.length){
      return this.append(value)
    }

    // fine the leading node

    const leadingNode = this. _traversToIndex(index-1);
    const holdingNode  = leadingNode.next;

    const newNode = new Node(value)

    leadingNode.next = newNode;
    newNode.next = holdingNode;

    this.length++;
    


  }

  remove(index) {

    if(index === 0){
      this.head = this.head.next;

      if(this.length === 1){
        this.tail=null;
      }
    }

    const leadingNode = this. _traversToIndex(index-1);
    const nodeToRemove = leadingNode.next;
    leadingNode.next = nodeToRemove.next;

    if(leadingNode === null){
      this.tail = leadingNode;
    }
   }

// helper function
  _traversToIndex(index){
    let count = 0;
    let currentNode = this.head;

    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }



  print() {
    const arr = []
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(arr.join(" --> "), "--> null")
  }
}


const linkedList = new LinkedList();

linkedList.append("A")
linkedList.append("B")
linkedList.append("C")
linkedList.print()
linkedList.remove(2)


// linkedList.insert(2, 200);


// linkedList.prepend(10)
// linkedList.prepend(20)
// linkedList.prepend(30)
// linkedList.insert(2, 100)

linkedList.print()