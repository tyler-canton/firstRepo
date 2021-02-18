import 'bootstrap'
import './sass/main.scss'
<<<<<<< HEAD
import { moduleObj } from './moduleObj';
let name1 = 'Consuelo Maldoando';
console.log(name1);
=======
import { moduleObj } from './module';
>>>>>>> dev

// VARIABLE: Var Let Const
// COMMENTS
// DECLARATIONS
// SCOPE
// HOISTING
// GLOBAL SCOPE 

let fname = 'Yunis';
let anoterVariable = 'fname';
// LEXICAL OR OBJECT SCOPE
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
<<<<<<< HEAD
console.log('DEBUG: data before push',dataRelations);
dataRelations.push(moduleObj);
=======
 

console.log('DEBUG: data before push',dataRelations);

dataRelations.push(moduleObj);

>>>>>>> dev
console.log('DEBUG: data before push',dataRelations);

let person = obj;
// Undefined
console.log(person[anoterVariable]);

console.log(dataRelations);



// This is an comment

/**
 *  @obj 
 *  @property firstname: this param with a datatype of string
 *  @TODO : I need to do addt'l work here
 */




let name = 'Ty Canton';

/**
 * // Global module
var myModule = (function ( jQ, _ ) {

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
}( jQuery, _ ));

myModule.publicMethod();
 */
