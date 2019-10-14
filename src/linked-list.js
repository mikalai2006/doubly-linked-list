const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }
    append(data) {
        var node = new Node(data);
        
        if (!this.length){
            this._head = node;
            this._tail = node;

        } else {
            
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;

        }
        this.length++;
        // console.log(this._head)
        return this;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {
        let currentEl = this._head,
            count = 0;
        
        if (this.length === 0 || index < 0 || index > this.length){
            throw new Error('not index');
        }
        while (count < index) {
            currentEl = currentEl.next;
            count++;
        }
        // console.log('currentEl._head===>)', currentEl.data)
        return currentEl.data;
    }

    insertAt(index, data) {
        let currentEl = this._head,
            count = 1;
        
        // if (this.length === 0 || index < 0 || index > this.length){
            // throw new Error('big index');
        // }
        // console.log('count===>)', count, ' index-> ', index)
        while (currentEl.next) {
            currentEl = currentEl.next || null;
            
            if (count === index) {
                // console.log('before el===>', currentEl, ' count--->', count)
                let insertEl = new Node(data);
                currentEl.prev.next = insertEl;
                insertEl.prev = currentEl.prev;
                insertEl.next = currentEl;
                currentEl.prev = insertEl;
                this.length++;
                break;
            }
            
            count++;
        }
        
        return this;
    }

    isEmpty() {
        return this.length > 0 ? false : true;
    }

    clear() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    deleteAt(index) {
        if (index < 0 || this.length <= index) {
            return null;
        }
        
        let currentEl = this._head;

        if (index === 0) {
            this._head = currentEl.next
        } else {

            let ind = 0;
            let prev = null;
            
            if (index < this.length){
                while(ind < index) {
                        prev = currentEl;
                        currentEl = currentEl.next || null;
                        ind++;
                }
                
                prev.next = currentEl.next;
                this.length--;
            }
        
        }
        return this;
    }

    reverse() {
       if (this.length > 1) {
            let newElms = this._head;
            this._head = this._tail;
            this._tail = newElms;
            let currentEl = this._head;
            while (currentEl) {
                newElms = currentEl.next;
                currentEl.next = currentEl.prev;
                currentEl.prev = newElms;
                currentEl = currentEl.next;
            }
       }
    
        return this;
    }

    indexOf(data) {
        let currentEl = this._head;
        let currentElIndex = 0;
        while (currentEl) {
            if (currentEl.data === data) {
                return currentElIndex;
            }
            currentElIndex++;
            currentEl = currentEl.next;
        }
        return -1;
    }
}
const list = new LinkedList();
// list.append('22');

module.exports = LinkedList;
