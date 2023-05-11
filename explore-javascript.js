// Javascript Notes 

// Provides interactions with the user.
// Dynamically type, Data types changed while being used.
// Interpreted language, reads at run time.
// Scripting language. Also logic of the computer. Known as the "Brain".

// --- Data Types ---

// 6 Primitive Data Types
    // Number
        // Can be an integer or a float.
            // Integers are whole numbers - Floats are decimals
            // Uses +,-,*,/,**,%
    // string
        // Characters stored in qutations, "Delta"
        // Has length property
        // Indexed, zero indexing. Starts at 0.
    // Bollean
        // True or Falso Statements
        // Not Strings
        // Great for comparing things.
    // Undefined
        // The value of a variable but not assigned yet.
    // Null
        // The lack of a value. Nothing.
        // Used to come back to a value later on.
    // Symbol
        // Unique Keys. [Covering Later]

// --- Variables ---

    // Places where to store information data types. 3 data type(s). Also known as delcarations.
        // var
        // let
        // const
    // Named by using camelCasing. First letters after the first word is capitalized.

    // Ex. of Const. 
        /* const myName
        console.log(myName) */
            // Use node in terminal to check.
        /* const myName = "Brandon"
        console.log(myName)

        myName = "Brandon S"
        console.log(myName) */
            // Will run into an error for const. is used.
    
    // Ex. of let
        // SAME AS ABOVE. Replace const with let.
        // It will NOT run into an error. 
        // More flexible use.

    // Ex. of var
        // SAME AS ABOVE. Replace const with var.
        // Same output as let.

// --- String methods and Properties ---

    // Length property.
        // console.log("delta".length) // Spits out 5
        // Counts all space and special characters.

    // Extract value at given index.
        // console.log("Hello"[0]) // Spits out h
            // Known as bracket Notation
    
    // Built in Methods
        // Actions needs to be done over and over again.
        // Designed for a particular action in a specific Data Type.
        // Pieces of code created as a shortcut for a common action(s).
            // Uses dot nottion and parenthesis to pass more info.
                // Examples may include but not limited to:
                    // .toUpperCase() - open bracket CAP all.
                    // .charAt(1) - returns the character at a specific index.
                    // .indexOf("i") - returns the character according to the index. Spits out a number.
                    // .includes("he") - returns a boolean if subset is within the string.
                    // .slice(1,4) - returns a subset of a string based in starting and ending index.
     
    // String Interpolation
        // Uses bacticks ``
        // Uses ${varName}
        // Allows us to insert variables into a string.
    
// --- Conditionals ---
    // Creates an evaluation
        // Situation where we can determine if the outcome is T/F.
        // Decision tress or if/else statements.
 
    // 3 Operators
        // Equality Operator
            // strict equality
                // uses === to check if the data type and value match
            // Loose equality
                // uses == to check ONLY the value
                // if necessary, will use type coercion (convert the value from one data type to another)
        
        // Relational Operators
            // Math terms
                // >, <, <=, >=
        
        // Logical Operators
            // Allows us to evaluate multiple statments in one condition.
                // logical(||) and (&&)
                    /* var greeting = "hello"
                    var number = 42
                    console.log (92 > number && "hello" = greeting)
                // Both must be true to spit out true.
                    console.log (21 > number || "hello" = greeting)
                // Checks both conditions, if one is true, outputs true.
        
        // Negation
            // Allows us to negte  statement by using the logical opposite.
                // Bang operator !
                    // console.log(number !== greeting) // Spits out true
                        // Even though the number is not the greeting.

// --- if/else ---
    //if
        // if is a keyword in js.
        // needs to pass an evaluation to the if
        // uses parenthesis
            /* if(condition is true){
            perform this action
        } */
    
    // else
        // does not take a statement
        // will ONLY run if nothing else is true
        // catch all
             /* if(condition is true){
            perform this action
            } else {
                console.log ("here is else")
            } */
            

    // else if
        // allows us to check additional statements!
        // can have numerous else if statements.
        // reads line by line.