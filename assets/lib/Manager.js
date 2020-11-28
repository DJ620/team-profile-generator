const Employee = require('./Employee');

// Manager class that creates an object that extends the Employee class and adds manager specific parameters
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    getRole() {
        return "Manager";
    };
    getOfficeNumber() {
        return this.officeNumber;
    };
};

module.exports = Manager;
