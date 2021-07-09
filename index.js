// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;

    return employee;
}
function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value; 
    return employee;
}