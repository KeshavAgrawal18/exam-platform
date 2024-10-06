# **Exam Application**

This is an interactive **Exam Application** built using **React.js**. The app provides a controlled exam environment where users must stay in full-screen mode to avoid violations and complete the exam within a fixed time limit. Upon completion or termination, a report is shown to the user, and the option to restart the exam is provided.

## **Features**

### 1. **Start Exam with Custom Alert**

- Before the exam begins, a custom alert modal is displayed, asking, "Are you ready to start the exam?".
- Once confirmed, the exam starts, and the timer countdown begins.
- The app forces the user into full-screen mode to simulate a controlled exam environment.

### 2. **Full-Screen Mode Requirement**

- The exam can only be taken in **full-screen mode**.
- If the user exits full-screen mode during the exam, they are warned through a custom modal alert, and a violation is counted.

### 3. **Violation Handling**

- If the user exits full-screen mode during the exam, a custom alert appears warning them.
- **Two full-screen violations** will result in automatic exam termination with a report stating the exam status as **"Terminated"** due to violations.

### 4. **Timer Countdown**

- The exam comes with a **10-minute countdown timer** (600 seconds).
- If the timer runs out, the exam is automatically terminated with the status **"Completed"**.
- The timer is shown in the format `MM:SS` to help the user easily track the remaining time.

### 5. **Submit Exam**

- Users can choose to **submit the exam** at any point by clicking the "Submit Exam" button.
- On submission, the exam is terminated, and the status is shown as **"Terminated"**.

### 6. **Custom Alert Modals**

- All prompts and alerts are custom modals styled with modern and professional UI.
- Custom alert modals are used for:
  - Starting the exam ("Are you ready to start the exam?")
  - Violations warning ("You cannot exit full-screen mode during the exam.")
  - Exam end alerts ("Exam completed" or "Exam terminated").

### 7. **Exam Termination**

- The exam is automatically terminated if:
  - **Two violations** (exiting full-screen mode) occur.
  - The user manually submits the exam.
  - The timer runs out (10 minutes).
- A final report is shown after termination, detailing:
  - **Exam Status** (Completed or Terminated)
  - **Time Remaining** (when terminated/submitted)
  - **Number of Violations**

### 8. **Restart Exam**

- After the exam is terminated or completed, a **"Restart Exam"** button is shown.
- When clicked, the custom alert asks, **"Are you ready to start the exam?"**, allowing the user to restart the exam with all parameters reset (timer, violations, and status).

---

## **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/exam-application.git
   ```
2. **Navigate to the project directory:**

```bash
Copy code
cd exam-application
```

3. **Install dependencies:**

```bash
Copy code
npm install
```

4. **Run the application:**

```bash
Copy code
npm start
```

The application will be running at http://localhost:3000.

# Deployed Application:

You can access the live version of the application deployed on Vercel at:
https://exam-platform-zeta.vercel.app/

# Exam Application

This is a web application designed to facilitate online exams with strict adherence to exam protocols, including full-screen requirements and violation tracking.

## Table of Contents

- [Usage](#usage)
  - [Starting the Exam](#starting-the-exam)
  - [During the Exam](#during-the-exam)
  - [Ending the Exam](#ending-the-exam)
  - [Restarting the Exam](#restarting-the-exam)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Usage

### Starting the Exam:

1. Click the **"Start Exam"** button.
2. Confirm the custom modal asking if you are ready to start the exam.
3. The exam will start, and you will be forced into full-screen mode.

### During the Exam:

- You must stay in full-screen mode during the exam.
- If you exit full-screen, a violation will be counted. After two violations, the exam will automatically terminate.
- You can click **Submit Exam** at any time to terminate and view your exam status.

### Ending the Exam:

- The exam ends when you either submit, the timer reaches zero, or the exam is terminated due to multiple violations.
- After the exam ends, a summary report is shown.

### Restarting the Exam:

- If the exam is terminated or completed, a **"Restart Exam"** button appears.
- Click it to restart the exam, and confirm the custom alert asking if you are ready to start the exam.

## Technologies Used

- **React.js**: Frontend framework used for building the application.
- **CSS**: Styling of custom alert modals and other UI elements.

## Contributing

Contributions are welcome! If you have suggestions for improvements, feel free to create a pull request or open an issue in this repository.
