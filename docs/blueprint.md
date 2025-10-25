# **App Name**: EduSoft Quality Learning

## Core Features:

- Educational Content Delivery: Deliver educational content about software quality standards (ISO/IEC 25010, ISO/IEC 9126), models (CMMI, MPS.BR) and quality attributes (Usability, Reliability, Efficiency, etc.) in a dynamic and visually appealing manner.
- Interactive Quizzes: Implement interactive quizzes with immediate feedback and score tracking to reinforce learning. User quiz results are saved to Firestore.
- Application Registration: Allow users to register educational applications by providing a name, description, and URL.
- Quality Evaluation: Enable users to evaluate applications based on ISO/IEC 25010 attributes by assigning scores (0-5) to each attribute.
- Weighted Score Calculation: Calculate a weighted final score for each application based on pre-defined weights for each quality attribute (Usability: 0.25, Efficiency: 0.20, Reliability: 0.20, Maintainability: 0.15, Security: 0.20). This calculation uses the 'computeFinalScore' tool function.
- Result Interpretation and Visualization: Display the final score, textual interpretation (Low, Regular, Good, Excellent), and a visual representation of the evaluation results (radar or bar graph).
- Evaluation History: Store evaluation data in Firestore and allow users to view the history of evaluations.

## Style Guidelines:

- Primary color: A calm blue (#5DADE2), reflecting trust and knowledge, for the primary interface elements.
- Background color: A light, muted blue (#EBF5FB), ensuring readability and a serene atmosphere.
- Accent color: A contrasting orange (#F39C12), drawing attention to important actions and results.
- Body font: 'PT Sans' (sans-serif), for clear and readable educational content.
- Headline font: 'Space Grotesk' (sans-serif), for headings and titles, providing a tech-forward, modern feel. Use 'Inter' as the body font when longer text is displayed.
- Use simple, clear icons to represent quality attributes and actions.
- Employ a clean, structured layout with clear navigation to enhance usability.
- Subtle animations and transitions to provide feedback and enhance the user experience.