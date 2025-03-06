class EmployeeStack {
    constructor() {
      this.items = [];
    }

    push(surname, salary) {
      this.items.push({ surname, salary });
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error("Стек порожній!");
      }
      this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    view() {
      if (this.isEmpty()) {
        console.log("Стек порожній!");
        return;
      }
      
      console.log("--- Працівники ---");
      for (let i = this.items.length - 1; i >= 0; i--) {
        console.log(`Прізвище: ${this.items[i].surname}, Оклад: ${this.items[i].salary}`);
      }
      console.log("-------------------");
    }
  
    peek() {
        if (this.isEmpty()) {
            return "Стек порожній";
        }
        console.log(`Прізвище: ${this.items[this.items.length - 1].surname}, Оклад: ${this.items[this.items.length - 1].salary}`);
        return;
    }

    averageSalary() {
      if (this.isEmpty()) return 0;
      const totalSalary = this.items.reduce((sum, employee) => sum + employee.salary, 0);
      return totalSalary / this.items.length;
    }
  
    clear() {
      this.items = [];
    }
}

//приклад використання
const stack = new EmployeeStack();
stack.push("Шевченко", 19000);
stack.push("Безгрішна", 17000);
stack.push("Мельник", 18000);
stack.push("Ковальчук", 20000);
stack.push("Вишнивецька", 21000);

stack.view();
console.log("Середній оклад:", stack.averageSalary());
console.log("Останній працівник:");
stack.peek();
stack.pop();
console.log("Після видалення цього працівника:");
stack.view();