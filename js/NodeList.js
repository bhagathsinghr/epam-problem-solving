function Node(val) {
    this.val = val;
    this.next = null;
}

var SingleLinkedList = (function() {
    function SingleLinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    SingleLinkedList.prototype.unshift = function(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    };

    SingleLinkedList.prototype.push = function(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    };
    
    SingleLinkedList.prototype.pop = function() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    };

    SingleLinkedList.prototype.shift = function() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    };

    SingleLinkedList.prototype.get = function(index) {
       if(typeof index !== 'number' || index === null || index === undefined || index < 0 || index >= this.length) return null;
       let counter = 0;
       var current = this.head;
       while(counter !== this.length) {
        current = current.next;
        counter++;
       }
       return current;
    };

    SingleLinkedList.prototype.set = function(index, val) {
      let node = this.get(index);
      if(node) {
        node.val = val;
        return true;
      }
      return false;
    };
    
    SingleLinkedList.prototype.set = function(index, val) {
      let node = this.get(index);
      if(node) {
        node.val = val;
        return true;
      }
      return false;
    };


    

    return SingleLinkedList;
})()

