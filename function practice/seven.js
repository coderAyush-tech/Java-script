function outerFunction(){
    function innerFunction() {
       console.log("Hello from innerFunction");
    }
   return innerFunction();
}
outerFunction(); // This will throw an error because innerFunction is not defined in this scope
 