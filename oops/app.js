function Student(name, id) {
    this.name = name;
    this.id = id;

    this.fun = function() {
        console.log(name, id);
    }
}
let s1= new Student("ayush",21);
console.log(s1);

s1.fun();
let s2= new Student("anki",20);
console.log(s2);

s2.fun();