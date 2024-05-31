function resultGenerator(){
    let marks = document.getElementById(`userInput`).value;
    let totalMarks =750;
    let percentage = marks / totalMarks *100 
    if (percentage >= 90){
        alert("A+ grade") 
    }else if (percentage>= 80) {
        alert("A grade") 
    }else if (percentage>= 70){
        alert("B grade") 
    }else if (percentage>= 60){
        alert("C grade") 
    }else if (percentage>= 50){
        alert("D grade") 
    }else{
        alert("Sorry You did not pass the exam") 
    } 
}
    