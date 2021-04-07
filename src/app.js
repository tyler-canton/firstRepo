import 'bootstrap'
import './sass/main.scss'
// export
import { moduleObj } from './module';
// export default
import MainClass from './MainClass';

// VARIABLE: Var Let Const
// COMMENTS
// DECLARATIONS
// SCOPE
// HOISTING
// GLOBAL SCOPE 
// LEXICAL OR OBJECT SCOPE

let fname = 'Yunis';
let anoterVariable = 'fname';
let obj = {
	// local scope
	fname: 'Ty'
};

window.dataRelations = [{
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}, {
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}, {
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}, {
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}, {
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}];


console.log('DEBUG: data before push', dataRelations);

dataRelations.push(moduleObj);

console.log('DEBUG: data before push', dataRelations);

console.log(dataRelations);

// Implement "Instantiating a Class" for development
let ourClass = new MainClass('Ty');

// Invoking a function
console.log('Class Instantion', ourClass.test());
let name = 'Ty Canton';

// String Interpolation
let anothervariable;
anothervariable = 'this will show below';
let strPerson = `Anytext ${name}`;
console.log(strPerson);





 // Global module
var fixMenuModule = (function ( jQ) {

	function privateMethod1(){
		jQ(".container").html("test");
	}

	function privateMethod2(){
	  console.log( _.min([10, 5, 100, 2, 1000]) );
	}

	return{
		publicMethod: function(){
			privateMethod1();
		}
	};

// Pull in jQuery and Underscore
}( jQuery));

fixMenuModule.publicMethod();
 