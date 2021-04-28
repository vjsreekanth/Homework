// require the "readline" module
const readline = require("readline")
// require the "fs" module
const fs = require('fs');
// const { toUnicode } = require("punycode");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
 


// arrays for utility

  let completedArray = [];
  let todoList = [];
  const optionsArray = ["q","n","v"];
  const selectedOptionsArray = ["c", "d"];

// functions 

function showMenu(){
  console.log(`\n(v) View . (n) New . (cX) Complete . (dX) Delete . (q) Quit \n`)
  rl.setPrompt("> ");
  rl.prompt();
}

function quit(){
  console.log(`\nSee you soon! \uD83D\uDE00 \n`)
  rl.close()
}

function addNewItem(){
  rl.question(`\nWhat?\n\n>`, item => {
  todoList.push(item);
  showMenu();
  })
}





function viewList(){
  if(todoList.length === 0){
    console.log(`\nList is empty..`);
  }
  todoList.forEach((item, index) =>{
   if(completedArray.includes(item) ){
     console.log(`\n${index} [✓] ${item}`)
   }
   else {
    console.log(`\n${index} [] ${item}`)
   }
  })
  showMenu();
}

function welcomeMenu(){
  console.log(`\nWelcome to Todo CLI!
  \n--------------------
  \n(v) View . (n) New . (cX) Complete . (dX) Delete . (q) Quit\n `)
  rl.setPrompt("> ");
  rl.prompt();
}

  
rl.on("line", answer => {
   // if user enter a blank
  if (!answer){
    console.log(`\nPlease enter a valid option`);
    showMenu();
  }
      
  const editedAnswer = answer.trim().toLowerCase()

  if(editedAnswer.length === 1 && !optionsArray.includes(editedAnswer)){
    console.log(`\nPlease enter a valid option`);
    showMenu();
  }
  else if(editedAnswer.length === 1 && selectedOptionsArray.includes(editedAnswer)){
    console.log(`\nPlease enter a valid option`);
    showMenu()
  }
  else if (editedAnswer === "q"){
    quit();
  }
  else if(editedAnswer === "n"){
    addNewItem();
  }
  else if(editedAnswer.length > 1){
    let commandLetter = editedAnswer[0].toLowerCase();
    let selectedIndex = parseInt(editedAnswer.slice(1));
    console.log(selectedIndex)
    function completeItem(){
      completedArray.push(todoList[selectedIndex])
      console.log(`\nCompleted "${todoList[selectedIndex]}" `)
      showMenu();
    }

    function deleteitem(){
      console.log(`\nDeleted ${todoList[selectedIndex]}`)
      todoList.splice(selectedIndex, 1)
      showMenu();
    }

    if(!selectedOptionsArray.includes(commandLetter) || !Number.isInteger(selectedIndex)){
        console.log(`\nPlease enter a valid option`);
        showMenu()
    }
        
    else if(selectedOptionsArray.includes(commandLetter) && todoList.length < 1){
          console.log(`\nNo items in your todo list to perform this action`);
          showMenu()
    }

    else if(selectedOptionsArray.includes(commandLetter) && selectedIndex > (todoList.length - 1)){
          console.log(`\nPlease enter a valid item index number from 0 to ${(todoList.length - 1)}`);
          showMenu();
    }
    else if(commandLetter === "c" && selectedIndex <= (todoList.length - 1)){
          completeItem();
    }
    else if(commandLetter === "d" && selectedIndex <= (todoList.length - 1)){
          deleteitem()
          
    }
  }
  else if(editedAnswer === "v"){
       viewList();
  }
      
})
welcomeMenu();
  