$('#calc').click(function (){
   /* getting all the values from the DOM*/
    let assigments = parseFloat($("#Assigments").val());
    let gro = parseFloat($("#Gro").val());
    let quiz = parseFloat($("#Quiz").val());
    let mid = parseFloat($("#Midterm").val());
    let final = parseFloat($("#Final").val());
    let intex = parseFloat($("#Intex").val());
  /*  calcuating the weight of the grades*/
    let total = (assigments * 0.5) + (gro * 0.1) + (quiz * 0.1) + (mid * 0.1) +
        (final * 0.1) + (intex * 0.1);
    let score = total.toFixed(2);
    let grade = "";

    /*calcuating the letter grade*/

    if (score >= 94) {
        grade = "A";
    }
    else if (score >= 90) {
        grade = "A-";
    }
    else if (score >= 87) {
        grade = "B+";
    }
    else if (score >= 84) {
        grade = "B";
    }
    else if (score >= 80) {
        grade = "B-";
    }
    else if (score >= 77) {
        grade = "C+";
    }
    else if (score >= 74) {
        grade = "C";
    }
    else if (score >= 70) {
        grade = "C-";
    }
    else if (score >= 67) {
        grade = "D+";
    }
    else if (score >= 64) {
        grade = "D";
    }
    else if (score >= 60) {
        grade = "D-";
    }
    else if (score <= 60) {
        grade = "E";
    }
    //outputing to dom
    $("#show").html("You wil get a "+ score+"% " + "and a letter grade of: "+grade);

    console.log(grade, score);
    


})