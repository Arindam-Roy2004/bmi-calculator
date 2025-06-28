# 🧮 BMI Calculator

A simple and interactive BMI (Body Mass Index) calculator web app that allows users to enter their height and weight in **Metric** (cm, kg) or **Imperial** (ft, lbs) units and view their BMI score and weight category.

---

<img width="647" alt="Screenshot 2025-06-28 at 11 53 22 PM" src="https://github.com/user-attachments/assets/49b39b7e-d7f5-41e0-b3c9-87a22dce1b20" />


## 🚀 Features

- Supports **two unit systems**:
  - Metric (centimeters, kilograms)
  - Imperial (feet, pounds)
- Calculates and displays:
  - **BMI value**
  - **BMI category** (Underweight, Normal weight, Overweight, Obesity)
- Responsive and easy-to-use UI
- Reset button to clear input and result

---

## 📦 Project Structure

```
project-folder/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 📐 BMI Formulas Used

### Metric Units (cm, kg)

**BMI = weight in kg / (height in meters)²**

> Conversion: height in meters = height in cm / 100

---

### Imperial Units (ft, lbs)

**BMI = (703 × weight in lbs) / (height in ft × 12)²**

> Only feet is used for height input. It is internally converted to inches.

---

## ✅ How to Use

1. Open `index.html` in your browser.
2. Select your preferred unit system from the dropdown.
3. Enter your height and weight.
4. Click on **Calculate BMI**.
5. View your BMI result and category.
6. Click **Reset** to clear everything and start again.

---

## 📸 Example

| Unit       | Height   | Weight | Result       |
|------------|----------|--------|--------------|
| Metric     | 170 cm   | 70 kg  | BMI: 24.2    |
| Imperial   | 5.5 ft   | 160 lb | BMI: 25.8    |

---

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)

---

## 📬 License

This project is free to use and modify for educational or personal use.

---
