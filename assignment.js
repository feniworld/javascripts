//feetToMile#1

function feetToMile(feet){
    var Mile = feet*0.000189393939;
    return Mile;
}
var result = feetToMile(500);
result = result.toFixed(7);
console.log(result);


//woodCalculator#2
function woodCalculator(chair, table, bed){
    var chairNum = chair * 1;
    var tableNum = table * 3;
    var bedNum = bed * 5;
    var totalWood = chairNum + tableNum + bedNum;
    return totalWood;
}

let totalOutput = woodCalculator(10, 3, 3);
console.log(totalOutput);





//brickCalculator#3
function brickCalculator(floor) {
    var bricks = 0;
    if (floor <= 0) {
        return "floor can't be zero Or negative value!";
    }
    else if (floor >= 1 && floor <= 10) {
        bricks = floor * 15 * 1000;
        return bricks;
    }
    else if (floor >= 11 && floor <= 20) {
        floor = floor - 10;
        bricks = (floor * 12 * 1000) + 150000;
        return bricks;
        //150000 floor 1 to 10 added
    }
    else if (floor >= 21) {
        floor = floor - 20;
        bricks = (floor * 10 * 1000) + 150000 + 120000;
        return bricks;
         //150000+120000 floor  11 to 20 added
    }
}
var floor = 25;
var totalBricks = brickCalculator(floor);
console.log(totalBricks);

//tinyFriend#4
function tinyFriend(Friend) {
    var min = friend[0];
    for (var i = 0; i < friend.length; i++) {
        var element = friend[i];
            if (element.length < min.length) {
                min = element;
            }
    }
    return min;
}
var Friend = ['sonia', 'rafi', 'Seikhbabul', 'fazlul'];
var tinyFriend = tinyFriend(Friend);
console.log(tinyFriend);

