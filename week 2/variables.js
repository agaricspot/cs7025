class Identity  {
    constructor(firstname, lastname, age, weight, height){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    get name(){
        //console.log(this.firstname, this.lastname);
        return this.firstname + ' ' + this.lastname;
    }
}

const john = new Identity('John', 'Smith', 47, '75kg' , '1.6m');


console.log(john.age);
john.age = 48;
console.log(john.age);

console.log(john.name);
john.lastname = 'Roberts';
console.log(john.name);

let operating_systems = ['Windows', 'MacOS', 'OpenBSD', 'Linux', 'iOS'];
console.log(operating_systems[1], operating_systems[2]);