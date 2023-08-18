// Write your solution in this file!
const employee = {
    name:"key",
    streetAddress:"value",
};
function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const newEmployee = {...employee};
    newEmployee[name]=streetAddress
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee[name] = streetAddress;
    return employee;
}
function deleteFromEmployeeByKey(employee, name, streetAddress) {
    const deleteEmploy ={...employee};
    delete deleteEmploy[name];
    return deleteEmploy;
}
function destructivelyDeleteFromEmployeeByKey(employee, name, streetAddress) {
    delete employee.name;
    return employee;
}
