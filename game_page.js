player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");
player1_score= 0;
player2_score= 0;
question_turn= "player1";
answer_turn= "player2";

document.getElementById("player1_name").innerHTML= player1_name + " : ";
document.getElementById("player2_name").innerHTML= player2_name + " : ";

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML= "Question Turn: "+ player1_name; 
document.getElementById("player_answer").innerHTML= "Answer Turn: "+ player2_name;

function send(){
    get_word= document.getElementById("word").value;
    word= get_word.toLowerCase();
    console.log(word);
    char1= word.charAt(1);
    console.log(char1);
    char2= word.charAt(Math.floor(word.length/2));
    console.log(char2);
    char3= word.charAt(word.length-1);
    console.log(char3);
    replacechar1= word.replace(char1, "_");
    replacechar2= replacechar1.replace(char2, "_");
    replacechar3= replacechar2.replace(char3, "_");
    console.log(replacechar3);
    question_tag= '<h4 id="word_display"> Question : '+ replacechar3+ '</h4>';
    answer_tag= '<br> Answer : <input id="input_check_box" type="text">';
    button_tag= '<br><br> <button class="btn btn-info" onclick="check()"> Check </button>';
    row= question_tag+answer_tag+button_tag;
    document.getElementById("output").innerHTML= row;
    document.getElementById("word").value= "";
}

function check(){
    get_answer= document.getElementById("input_check_box").value;
    if(word==get_answer){
        if(answer_turn=="player1"){
            player1_score= player1_score+1;
            document.getElementById("player1_score").innerHTML= player1_score;
        }
        else if(answer_turn=="player2"){
             player2_score= player2_score+1;
             document.getElementById("player2_score").innerHTML= player2_score;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML= "Question Turn: "+ player2_name; 
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML= "Question Turn: "+ player1_name;
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML= "Answer Turn: "+ player2_name; 
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML= "Answer Turn: "+ player1_name;
    }
    document.getElementById("output").innerHTML= "";
}