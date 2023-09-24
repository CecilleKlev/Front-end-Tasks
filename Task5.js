function findEmployee(name, obj){
    //check if the current object has a "name" property and it matches the desired name
    if(obj.hasOwnProperty('name')&& obj.name ==name){
        return {name: obj.name, wage: obj.wage};
    }

    //Iterate through all properties of the current object

    
}

//Example usage
const employeeNameFind = "John Doe";
const result = findEmployee(employeeNameFind, hierarchy);

if(result){
    console.log('Found employee: ${result.name}, Wage: ${result.wage}');
}else {
    console.log('Employee ${employeeNameFind} not found');
}