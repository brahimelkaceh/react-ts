import React, { FormEvent, useState } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal: React.FC<NewGoalProps> = ({ onAddGoal }) => {
  const [goal, setGoal] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmitFunction = (e: FormEvent) => {
    e.preventDefault();
    onAddGoal(goal, summary);
    setGoal(""); // Clear the input after submitting
    setSummary(""); // Clear the input after submitting
  };

  return (
    <form onSubmit={handleSubmitFunction}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input
          type="text"
          id="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input
          type="text"
          id="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
