class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    findMax() {
        if (!this.head) return null;
        let maxVal = this.head.data;
        let current = this.head.next;
        while (current) {
            if (current.data > maxVal) {  
                maxVal = current.data;
            }
            current = current.next;
        }
        return maxVal;
    }

    insertAfterOnes(maxVal) {
        let current = this.head;
        while (current) {
            if (current.data === 1) {
                const newNode = new Node(maxVal);
                newNode.next = current.next;
                current.next = newNode;
                current = newNode.next; // Пропускаємо вставлений вузол
            } else {
                current = current.next;
            }
        }
    }

    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + ", ";
            current = current.next;
        }
        return result.trim();
    }
}

// Приклад використання
function main() {
    const list = new LinkedList();
    list.add(1); 
    list.add(3.5);
    list.add(2);
    list.add(1);
    list.add(4.2);
    list.add(1);

    console.log("Початковий список:", list.printList());

    const maxVal = list.findMax();
    if (maxVal !== null) {
        list.insertAfterOnes(maxVal);
    }

    console.log("Список після вставки максимального значення після 1:", list.printList());
}

main();
