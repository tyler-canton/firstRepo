import 'bootstrap'
import './sass/main.scss'
import { moduleObj } from './module';

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

let dataRelations = [{
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

let person = obj;
// Undefined
console.log(person[anoterVariable]);
console.log(moduleObj);



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