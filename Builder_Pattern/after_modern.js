class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}

class User {
    constructor(name, { age = 18, phone = '12345678', address } = {}) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

let user = new User('Bob', { address: new Address('12345', 'Main St.') });
console.log(user);
