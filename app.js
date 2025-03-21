const calculateBmi = () => {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    // const bmi = document.getElementById("bmi").value;
    const convertedWeight = parseInt(weight)
    const convertedHeight = parseInt(height)
    console.log(convertedHeight)
    console.log(convertedWeight)
    const convertedToMeter = (convertedHeight / 100) * (convertedHeight / 100);
    console.log(convertedToMeter)

    const bmi = (convertedWeight / convertedToMeter).toFixed(2)

    document.getElementById("bmi").value = bmi;
}