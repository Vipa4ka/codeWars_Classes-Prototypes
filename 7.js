class File{
    constructor(fullName, contents){
       this._fullName = fullName;
       this.contents = contents;
       this.countWord=0;
       this.countLetter=0;
    }

  get fullName(){
      return this._fullName;
      }
  set fullName(fullName){
     return ;
          }

  get filename(){
       return this._fullName.split('.').slice(0, -1).join('.');
       }


  set filename(fullName){
     return ;
     }
  get extension(){
      return this._fullName.split('.').pop();

    }   
  set extension(fullName){
      return ;
      }         


   getContents(){
    return this.contents
  } 

    write(str){
      if(this.contents===''){
      this.contents=`${str}`;
      }else{
        this.contents=`${this.contents}\n${str}`; 
    }
  }
    gets(){
      let word=this.contents.split('\n')[this.countWord];
      this.countWord+=1;
      return word; 
      }

    
    getc(){
      let letter=this.contents.split('')[this.countLetter];
      this.countLetter+=1;
      return letter; 
      }

    
}

// var myFile = new File("hello.txt", "Hello World");
// console.log(myFile.fullName); // hello.txt
// myFile.fullName = "goodbye.txt"; // Reassignment should fail
// console.log(myFile.fullName); // still "hello.txt"


// var file1 = new File("hello_world.txt", "Hello World");
// console.log(file1.filename); // "hello_world"
// file1.filename = "goodbye_world"; // Reassignment should fail
// console.log(file1.filename); // still "hello_world"


// var file2 = new File("class.phptester.php", "<?php /* Some PHP code here */ ?>");
// console.log(file2.filename); // "class.phptester" - the filename should be correctly identified even if the filename itself contains the '.' character


// var myFile = new File("hello.txt", "Hello World\nHello World");
// console.log(myFile.getContents()); // "Hello World\nHello World"

// var fileWithComplexName = new File("alpha.beta.gamma.delta.txt", "alpha beta gamma delta");
// console.log(fileWithComplexName.extension); // "txt"
// fileWithComplexName.extension = "js"; // Reassignment should fail
// console.log(fileWithComplexName.extension); // still "txt"


// var myFile = new File("hello.txt", "Hello World\nHello World");
// console.log(myFile.getContents()); // "Hello World\nHello World"

var myFile = new File("example.txt", "");
console.log(myFile.getContents()); // ""
myFile.write("Line 1");
console.log(myFile.getContents()); // "Line 1"
myFile.write("Line 2");
console.log(myFile.getContents()); // "Line 1\nLine 2"
myFile.write("Line 3");
console.log(myFile.getContents()); // "Line 1\nLine 2\nLine 3"

// var myFile = new File("example.txt", "Line 1\nLine 2\nLine 3\nLine 4\nLine 5");
// console.log(myFile.gets()); // "Line 1"
// console.log(myFile.gets()); // "Line 2"
// console.log(myFile.gets()); // "Line 3"
// console.log(myFile.gets()); // "Line 4"
// console.log(myFile.gets()); // "Line 5"
// console.log(myFile.gets()); // undefined
// console.log(myFile.gets()); // undefined
// console.log(myFile.gets()); // undefined


// var myFile = new File("Lorem Ipsum.txt", "Lorem ipsum dolor sit amet, adispicing eu.");
// console.log(myFile.getc()); // "L"
// console.log(myFile.getc()); // "o"
// console.log(myFile.getc()); // "r"
// console.log(myFile.getc()); // "e"
// console.log(myFile.getc()); // "m"
// console.log(myFile.getc()); // " "
// console.log(myFile.getc()); // "i"
// console.log(myFile.getc()); // "p"
// // ... (many calls to myFile.getc())
// console.log(myFile.getc()); // undefined (when number of calls exceeds character count)



// Kata and Series Overview
// In Kata #1-4 in this series, we learned the fundamentals and features of ES6 classes including ES6 class syntax, classical inheritance in ES6 (as opposed to prototypal inheritance in all previous versions of ECMAScript/Javascript), getters and setters. In Kata #5 of this Series we began to apply our knowledge of ES6 classes to solve the challenge, but the challenge was still a bit Codecademy-like (traning level code) and did not resemble a real world application. Therefore, in this Kata of the series, we are going to apply our knowledge of ES6 class syntax and features in a semi-real world application.