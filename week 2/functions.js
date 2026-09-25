let player_score = 0; 

function add_one(){
    player_score += 1; 
}

function display_score(){
    console.log(player_score);
}

function is_even(){
    if(player_score % 2 === 0){
        console.log('the score is even');
    }
    else{
        console.log('the score is odd');
    }
}

function score(){
    add_one();
    display_score();
    is_even();
}

//test
display_score();
score();
score(); 

