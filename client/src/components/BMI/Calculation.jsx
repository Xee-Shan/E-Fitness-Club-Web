import React from 'react';
import styles from "./Calculation.module.css";

export default function Calculation(props) {
    const tab = () => {
        if (props.ans < 18.5) {
            return (
                <div className={styles.div}>
                    <h3 style={{ backgroundColor: 'green' }}>Underweight</h3>
                    <h3 >Normal</h3>
                    <h3 >Overweight</h3>
                    <h3>Obese</h3>
                    <p className={styles.paraSection}>BMI in this range is considered underweight, which means you could be at risk for chronic health issues. A low percentage of body fat can prevent your body from absorbing essential vitamins and minerals.

                    Eating disorders,
                    depression and stress can all lead to weight loss and a lower BMI. Sometimes genetics play a role in whether a person tends to be underweight.

                    Eating disorders, depression and stress can all lead to weight loss and a lower BMI. Sometimes genetics play a role in whether a person tends to be underweight.

                    Note: If you're looking to increase your BMI to a normal range, our "E-Fitness Club" web and mobile app will help you build lean muscle mass while helping increase your appetite.
                    <img src="https://cf.girlsaskguys.com/q2803990/c5bfe706-09c4-48b0-b846-af8295ef2225.jpg" alt="underweight" />

                    </p>
                </div>
            );
        }
        else if (props.ans >= 18.5 && props.ans <= 24.9) {
            return (
                <div className={styles.div}>
                    <h3 >Underweight</h3>
                    <h3 style={{ backgroundColor: 'blue' }}>Normal</h3>
                    <h3 >Overweight</h3>
                    <h3>Obese</h3>
                    <p className={styles.paraSection}>
                        A BMI in this range is considered a healthy weight, which means your risk of weight-related conditions like type 2 diabetes, heart disease and high blood pressure is generally lower.

                        Having a BMI in the normal range isn't a guarantee of good health as it is still possible to have a high body fat percentage.

                        An active lifestyle and a diet full of nutritious foods help maintain a healthy weight, preserve lean muscle mass and stay in a normal BMI range.                     If you're looking to increase your BMI to a normal range, our "E-Fitness Club" web and mobile app will help you build lean muscle mass while helping increase your appetite.

                        Note: large fluctuations in weight should be avoided, and if you experience any unintentional weight change, visit your doctor to make sure you’re in good health
                    <img src="https://qph.fs.quoracdn.net/main-qimg-796c51f54967df93d2b5ec5a6067f0e1.webp" alt=""/>
                    </p>
                </div>
            );
        }
        else if (props.ans >= 25 && props.ans <= 29.9) {
            return (
                <div className={styles.div}>
                    <h3 >Underweight</h3>
                    <h3 >Normal</h3>
                    <h3 style={{ backgroundColor: 'orange' }}>Overweight</h3>
                    <h3>Obese</h3>
                    <p className={styles.paraSection}>
                        A BMI in this range is considered overweight, which means your risk for health conditions, such as type 2 diabetes, heart disease and high blood pressure, increases. A waist circumference measurement can give an additional assessment of body composition because excess belly fat is another predictor for disease risk.

                        Since BMI calculations do not differentiate between lean body mass, body fat or bone mass, it is possible to have an overweight BMI and have more lean body mass than body fat. For example, athletes with increased muscle, relative to height, will have a higher BMI. Also, individuals with medical conditions in which they retain fluid (such as edema) might also fall in this range.

                        An overweight BMI can indicate that you may need to make healthier lifestyle changes. Along with dietary changes, getting more physical activity can help with weight loss, increase lean muscle mass and prevent further weight gain.

                      Note:  If you're looking to increase your BMI to a normal range, our "E-Fitness Club" web and mobile app will help you build lean muscle mass while helping increase your appetite.
                      <img src="https://image.shutterstock.com/image-photo/fat-man-overweight-big-belly-260nw-790468294.jpg" alt=""/>
                    </p>
                </div>
            );
        }
        else if (props.ans >= 30) {
            return (
                <div className={styles.div}>
                    <h3 >Underweight</h3>
                    <h3 >Normal</h3>
                    <h3 >Overweight</h3>
                    <h3 style={{ backgroundColor: 'red' }}>Obese</h3>
                    <p className={styles.paraSection}>
                        A BMI in this range is considered obese, which puts you at the highest risk for diseases and health conditions such as heart disease, stroke, high blood pressure and some cancers. Obesity also increases the risk of developing type 2 diabetes and high cholesterol.

                        People in this BMI range are likely to experience aches and pains, inflammation, low energy level and decreased quality of life. A waist circumference measurement can give an additional assessment of body composition because excess belly fat is another predictor for disease risk.

                        To decrease your BMI, a registered dietitian can evaluate your diet to ensure all your nutrient needs are being met during weight loss. Regular physical activity is also key to achieving weight loss and preventing further weight gain.
                    Note: If you're looking to increase your BMI to a normal range, our "E-Fitness Club" web and mobile app will help you build lean muscle mass while helping increase your appetite. Concern a doctor if you are feeling unwell.
                    <img src="data:image/jpeg;base64,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" alt=""/>
                    </p>
                </div>
            );
        }
    }
    return (
        <>
            <div>
                <h1 style={{ fontFamily: 'Concert One, cursive' }}>Your BMI : {props.ans}</h1>
            </div>
            <div>{tab()}</div>
        </>
    );
}
