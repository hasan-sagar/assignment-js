//https://github.com/hasan-sagar/assignment-js
//kilometerToMeter


function kilometerToMeter(kilo){
    var meter=kilo*1000;
    return meter;
}
var result=kilometerToMeter(10);
console.log("Meter:",result);


//budgetCalculator

function budgetCalculator(w,m,l){
    var sum=0;
    sum=(w+m+l);
    return sum;

}
var result=budgetCalculator(50,100,500);
console.log(result);

//hotelCost

function hotelCost(stayDay)
{
    var cost=0;
    if(stayDay<=10){
        cost=10*100;
    }
    else if(stayDay<=20){
        var partOne=10*100;
        var remainDay=stayDay-10;
        var partTwo=remainDay*80;
        cost=partOne+partTwo;
    }
    else{

        var remainDay=stayDay-20;
        var partThird=remainDay*50;
        cost=partOne+partTwo+partThird;
}
return cost;
    
}
var totalCost=hotelCost(10);
console.log("Your total cost:",totalCost);



//megaFriend

function megaFriend(friends){

    var larger=friends[0];
    for(var i=0;i<friends.length;i++)
    {
        var element=friends[i];
        if(element>larger){
            larger=element;
        }
    }
    return larger;



}

        var largename=megaFriend(['sagar','hasan','khalid','valorant','csgo']);
        console.log("larger name:",largename);
