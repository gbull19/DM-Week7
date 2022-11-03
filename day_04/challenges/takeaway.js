const takeaway = (n) => {
    const options = [2, 3, 5];
    let turn1 = n + options[i]; 
    let turn2 = n - options[i];
    if (6 < n - turn < 9) { // must leave 7 or 8 to win
        
    } else if (n - turn < 2) {

    }

};

function canWin(n){
    if(n<2) return false;
    return (canWin(n-2)===0 || canWin(n-3)===0 || canWin(n-5)===0);
}

console.log(canWin(60));
