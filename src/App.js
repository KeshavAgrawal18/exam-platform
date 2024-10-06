import React, { useState, useEffect } from "react";
import "./App.css";
import CustomModal from "./CustomModal";

function App() {
  const [isExamStarted, setIsExamStarted] = useState(false);
  const [timer, setTimer] = useState(600);
  const [violations, setViolations] = useState(0);
  const [examTerminated, setExamTerminated] = useState(false);
  const [showCustomAlert, setShowCustomAlert] = useState(false);
  const [showStartExamModal, setShowStartExamModal] = useState(true);
  const [customAlertContent, setCustomAlertContent] = useState({
    title: "",
    message: "",
    onConfirm: () => {},
    isConfirm: false,
  });
  const [examStatus, setExamStatus] = useState(null);

  const startExam = () => {
    setShowStartExamModal(false);
    setIsExamStarted(true);
    enterFullScreen();
  };

  const enterFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => {
          console.log("Entered full-screen mode");
        })
        .catch((err) => {
          console.log("Full-screen request denied: ", err);
        });
    }
  };

  const exitFullScreenHandler = () => {
    if (!document.fullscreenElement && isExamStarted) {
      setViolations((prev) => prev + 1);
      setCustomAlertContent({
        title: "Violation Warning",
        message: "You cannot exit full-screen mode during the exam.",
        onConfirm: handleReEnterFullScreen,
        isConfirm: false,
      });
      setShowCustomAlert(true);
    }
  };

  const handleReEnterFullScreen = () => {
    setShowCustomAlert(false);
    enterFullScreen();
  };

  const endExam = (reason, status) => {
    setExamTerminated(true);
    setIsExamStarted(false);
    setExamStatus(status);
    setCustomAlertContent({
      title: "Exam Ended",
      message: reason,
      onConfirm: () => setShowCustomAlert(false),
      isConfirm: false,
    });
    setShowCustomAlert(true);
  };

  const resetExam = () => {
    setShowCustomAlert(false);
    setViolations(0);
    setTimer(600);
    setExamTerminated(false);
    setIsExamStarted(false);
    setExamStatus(null);
    setCustomAlertContent({
      title: "Restart Exam",
      message: "Are you ready to start the exam?",
      onConfirm: (confirmed) => {
        setShowCustomAlert(false);
        if (confirmed) {
          startExam();
        }
      },
      isConfirm: true,
    });
    setShowCustomAlert(true);
  };

  useEffect(() => {
    if (isExamStarted && timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    }
    if (timer === 0) {
      endExam("Time is up! The exam has been completed.", "Completed");
    }
  }, [isExamStarted, timer]);

  useEffect(() => {
    if (violations >= 2) {
      endExam(
        "Exam terminated due to multiple full-screen violations.",
        "Terminated"
      );
    }
  }, [violations]);

  useEffect(() => {
    document.addEventListener("fullscreenchange", exitFullScreenHandler);
    return () =>
      document.removeEventListener("fullscreenchange", exitFullScreenHandler);
  }, [isExamStarted]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="App">
      {!isExamStarted && !examTerminated && showStartExamModal && (
        <CustomModal
          title="Start Exam"
          message="Are you ready to start the exam?"
          onConfirm={startExam}
          isConfirm={true}
        />
      )}

      {isExamStarted && !examTerminated && (
        <div>
          <h1>Exam in Progress</h1>
          <h2>Time Left: {formatTime(timer)}</h2>
          <button
            onClick={() => endExam("You submitted the exam.", "Terminated")}
          >
            Submit Exam
          </button>
        </div>
      )}

      {examTerminated && (
        <div>
          <h2>Exam {examStatus}.</h2>
          <h3>Summary:</h3>
          <p>Status: {examStatus}</p>
          <p>Time Remaining: {formatTime(timer)}</p>
          <p>Number of Violations: {violations}</p>
          <button onClick={resetExam}>Restart Exam</button>
        </div>
      )}

      {showCustomAlert && (
        <CustomModal
          title={customAlertContent.title}
          message={customAlertContent.message}
          onConfirm={customAlertContent.onConfirm}
          isConfirm={customAlertContent.isConfirm}
        />
      )}
    </div>
  );
}

export default App;
