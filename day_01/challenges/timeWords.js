// const timeWord = time => {
//     let word = "";
//     if ((time[0] == "0" && time[1] == "0") || (time[0] == "1" && time[1] == "2")) {
//         word += "twelve";
//     } else if ((time[0] == "0" && time[1] == "1") || (time[0] == "1" && time[1] == "3")) {
//         word += "one";
//     } else if ((time[0] == "0" && time[1] == "2") || (time[0] == "1" && time[1] == "4")) {
//         word += "two";
//     } else if ((time[0] == "0" && time[1] == "3") || (time[0] == "1" && time[1] == "5")) {
//         word += "three"
//     } else if ((time[0] == "0" && time[1] == "4") || (time[0] == "1" && time[1] == "6")) {
//         word += "four"
//     } else if ((time[0] == "0" && time[1] == "5") || (time[0] == "1" && time[1] == "7")) {
//         word += "five"
//     } else if ((time[0] == "0" && time[1] == "6") || (time[0] == "1" && time[1] == "8")) {
//         word += "six"
//     } else if ((time[0] == "0" && time[1] == "7") || (time[0] == "1" && time[1] == "9")) {
//         word += "seven"
//     } else if ((time[0] == "0" && time[1] == "8") || (time[0] == "2" && time[1] == "0")) {
//         word += "eight"
//     } else if ((time[0] == "0" && time[1] == "9") || (time[0] == "2" && time[1] == "1")) {
//         word += "nine"
//     } else if ((time[0] == "1" && time[1] == "0") || (time[0] == "2" && time[1] == "2")) {
//         word += "ten"
//     } else if ((time[0] == "1" && time[1] == "1") || (time[0] == "2" && time[1] == "3")) {
//         word += "eleven"
//     } 
//     return word;
// };

const timeWord = time => {
    let hour = "one two three four five six seven eight nine ten eleven twelve".split(" ");
    let num = "one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    let tens = "twenty thirty forty fifty".split(" ");
    let word = "";

    if (time[0].concat(time[1]) < 10) {
        word += hour[time[1]-1]
    } else if (time[0].concat(time[1]) <= 12) {
        word += hour[time[0].concat(time[1])-1]
    } else if (13 <= time[0].concat(time[1]) <= 24) {
        word += hour[time[0].concat(time[1])-13]
    } else {
        return "error with input"
    }
        
    if (time[3].concat(time[4]) <= 9) {
        word += (" oh " + num[time[3].concat(time[4])-1])
    } else if (time[3].concat(time[4]) < 20 ) {
        word += (" " + num[time[3].concat(time[4])-1])
    } else if (1 < time[3] < 6 && time[4] == 0) {
        word += (" " + tens[time[3]-2])
    } else if (1 < time[3] < 6 && time[4] != 0) {
        word += (" " + tens[time[3]-2] + " " + num[time[4]-1])
    } else {
        return "error with input"
    }

    if (time[0].concat(time[1]) <= 12) {
        word += " am"
    } else {
        word += " pm"
    }

    return word;
};

console.log(timeWord("20:41"));