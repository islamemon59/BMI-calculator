const calculateBmi = () => {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    // const bmi = document.getElementById("bmi").value;
    const convertedWeight = parseInt(weight)
    const convertedHeight = parseInt(height)

    if(weight < 0 || weight === "" || height < 0 || height === ""){
        alert("Input a positive valid number");
        return;
    }

    console.log(convertedHeight)
    console.log(convertedWeight)
    const convertedToMeter = (convertedHeight / 100) * (convertedHeight / 100);
    console.log(convertedToMeter)

    const bmi = (convertedWeight / convertedToMeter).toFixed(2)


    if(bmi < 18.5){
        alert("You are Underweight");
    }
    else if(bmi > 18.5 && bmi < 24.9){
        alert("You are Healthy");
    }
    else if(bmi > 25.0 && bmi < 29.9){
        alert("You are Overweight");
    }
    else {
        alert("You are Obese")
    }

    document.getElementById("bmi").value = bmi;
}
