//Create a function to check who the winner is:

function Winner(NetsScores,KnicksScores){
    NetsAverage=0;
    KnicksAverage=0; 
    for(i=0; i<NetsScores.length;i++){
        NetsAverage=NetsAverage+NetsScores[i];
    }
    for(i=0; i<KnicksScores.length;i++){
        KnicksAverage=KnicksAverage+KnicksScores[i];
    }
    NetsAverage=Math.round( NetsAverage/NetsScores.length * 100 + Number.EPSILON ) / 100;
    KnicksAverage=Math.round( KnicksAverage/KnicksScores.length * 100 + Number.EPSILON ) / 100;

    if((NetsAverage>KnicksAverage)&&(NetsAverage>=100)){

        console.log(`Nets Wins ${NetsAverage} Vs ${KnicksAverage}`);
    }
    else if((NetsAverage<KnicksAverage)&&(KnicksAverage>=100)){
        console.log(`Knicks Wins ${KnicksAverage} Vs ${NetsAverage}`);
    }
    else if ((NetsAverage==KnicksAverage)&&(NetsAverage>=100)){
        console.log("Draw");
    }
    else{
        console.log("No Weam Wins ");
    }

}
//calculate the tip Amount

 function TipCalculator(BillValue){
    var TipAmount;
    var FinalAmount;
    if((BillValue >= 30) && (BillValue<=100)){
        TipAmount = 0.15*BillValue;
    }
    else  {
        TipAmount=0.20*BillValue;  
    }
   TipAmount= Math.round( TipAmount * 100 + Number.EPSILON ) / 100;
   FinalAmount=TipAmount+BillValue;
   console.log(`The bill was $${BillValue}, the tip was $${TipAmount}, and the total value was $${FinalAmount}`);

}


//Create 2 functions (Arrow Function Only) to convert temperature:
CovertCelsiusToFahrenheit = (temperature) => console.log(`${temperature}°C is ${(temperature*(9/5)+32)}°F`);
CovertFahrenheitToCelsius = (temperature) => console.log(`${temperature}°F is ${(temperature-32)*(5/9)}°C`);
