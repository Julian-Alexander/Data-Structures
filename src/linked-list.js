class LinkedList {
  /* Do not modify the constructor */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /* Add the given value to the tail
  of the list. The `tail` pointer
  should be updated accordingly */
  addToTail(value) {
    const newNode = {
      value,
      next: null
    };
    if(this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  /* Remove the list's `head` value 
  The `head` pointer should be updated
  accordingly */
  removeHead() {
  //   const head = this.head.value;
  //   this.head = this.head.next;
  //   return head;
    if (this.head === null) return;
    if (this.head.next === null) {
      const head = this.head;
      this.head = null;
      this.tail = null;
      return head.value;
    }
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  /* Searches the list for the given value
  Returns true or false accordingly */
  contains(value) {
  //   let node = this.head;
  //   while (node){
  //     if (node.value === value) {
  //       return true;
  //     } else {
  //       node = node.next;
  //     }
  //   }
  //   return false;
  // }
  //recurse sol1
  // const recurse = (node)  => {
  //   if (node.value === value) return true;
  //   if (!node.next) return false;
  //   return this.recurse(nose.next);
  // };
  // return recurse (this.head);

  // Recursive solution
  if (this.head === null) return false;
  // const searchLinkedList = (node) => {
  //   // base cases are:
  //   // 1. we find the value
  //   // 2. node.next is null
  //   if (node.value === value) return true;
  //   if (node.next === null) return false;
  //   // call searchLinkedList recursively 
  //   // with the next node in the list
  //   return searchLinkedList(node.next);
  // };
  // // call our recursive function on the head node 
  // // to kick it off
  // return searchLinkedList(this.head);

  // Iterative solution
  let current = this.head;
  while (current) {
    if (current.value === value) {
      return true;
    }
    current = current.next;
  }
  return false;
}

  /* Finds and returns the maximal value
  of all the values in the list */
  getMax() {
    if (!this.head) return null;
    let node = this.head;
    let max = this.head.value;
    while(node) {
      if (node.value > max) {
        max = node.value;
      }
      node = node.next;
    }
    return max;
  }
}

module.exports = LinkedList;