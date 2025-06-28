document.addEventListener('DOMContentLoaded', () => {
    // const unit = document.getElementById('unit').value;
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const calculateBtn = document.getElementById('calculate-btn');

    const resultContainer = document.getElementById('bmi-result');
    const bmiOutput = document.getElementById('bmi-output');
    const bmiCategory = document.getElementById('bmi-category');
    const resetBtn = document.getElementById('reset-btn');
    calculateBtn.addEventListener('click', () => {
        const unit = document.getElementById('unit').value;
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            alert('Please enter valid height and weight values.');
            return;
        }

        let bmi;
        let convertedHeight;

        if (unit === 'metric') {
            // height in cm, weight in kg
            convertedHeight = height / 100;
            bmi = weight / (convertedHeight * convertedHeight);
        } else if (unit === 'imperial') {
            // height in feets , weight in lbs
            convertedHeight = height * 12;
            bmi = (703 * weight) / (convertedHeight * convertedHeight);
        }

        // bmi = bmi.toFixed(2); // Round to 2 decimal places

        bmiOutput.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
        bmiCategory.innerHTML = `Category: ${getBMICategory(bmi)}`;
        resultContainer.classList.remove('hidden');
    });
    resetBtn.addEventListener('click', () => {
        heightInput.value = '';
        weightInput.value = '';
        resultContainer.classList.add('hidden');
        bmiOutput.innerHTML = '';
        bmiCategory.innerHTML = '';

    });

    function getBMICategory(bmi) {
        bmi = parseFloat(bmi);
        if (bmi < 18.5) return 'Underweight';
        if (bmi < 24.9) return 'Normal weight';
        if (bmi < 29.9) return 'Overweight';
        return 'Obesity';
    }
});