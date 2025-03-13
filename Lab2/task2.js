class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " ";
            current = current.next;
        }
        return result.trim();
    }

    extractSublist(px, py) {
        if (!px || !py || px === py) return null;
        
        let newHead = null, newTail = null;
        let current = px.next;
        
        while (current && current !== py) {
            let nextNode = current.next;
            
            // Від'єднуємо вузол від основного списку
            if (current.prev) {
                current.prev.next = nextNode;
            }
            if (nextNode) {
                nextNode.prev = current.prev;
            }
            
            // Додаємо у новий список
            if (!newHead) {
                newHead = newTail = current;
                newHead.prev = null;
                newHead.next = null;
            } else {
                newTail.next = current;
                current.prev = newTail;
                newTail = current;
                newTail.next = null;
            }
            
            current = nextNode;
        }
        
        return newHead;
    }
}

// Приклад використання
function main() {
    const list = new DoublyLinkedList();
    [1, 2, 3, 4, 5, 6, 7].forEach(num => list.add(num));

    console.log("Початковий список:", list.printList());

    let px = list.head.next; 
    let py = list.tail.prev; 

    let newHead = list.extractSublist(px, py);

    console.log("Перетворений список:", list.printList());

    console.log("Новий список:");
    let current = newHead;
    const newValues = [];
    while (current) {
        newValues.push(current.data);
        current = current.next;
    }
    console.log(newValues.join(", ") || "null");
}

main();