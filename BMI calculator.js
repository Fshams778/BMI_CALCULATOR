
const Weight = parseFloat(prompt('Enter Your Weight By KG \n')) // ask the user to enter weight
const Hight = parseFloat(prompt('Enter Your Hight By M \n'))    // ask the user to enter hight


function calculate_bmi(weight,hight){ //function to calculate the BMI 

  var  bmi= weight/(hight*hight)

    return bmi}

    function interpret_bmi(bmi){ //function to interpre the BMI
 if (bmi<18.2){
    console.log("Under Weight")}

 else if (bmi == 18.5 || bmi < 25)
    {
        console.log("Normal Weight")
    }

    else if (bmi == 25 || bmi <30){
        console.log("Over Weight")
}

 else{
    console.log("Obses")}
}
calculate_bmi(weight,hight);
interpret_bmi(bmi);
document.getElementById("mm").innerHTML=interpret_bmi(bmi)