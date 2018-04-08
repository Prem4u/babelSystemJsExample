import {Person} from 'person.js';

let person=new Person('Prem',30);

let test=()=>{
	console.log("Test Successfull !! ");	
	console.log("Name->"+person.getName()+" "+"Age ->"+person.getAge());
};
class Employee extends Person{
	 constructor(name,age){
		 super(name,age);
	 }
}
let emp1=new Employee();
test();


