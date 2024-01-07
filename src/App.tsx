import Header from "./components/Header";
import logo from "./assets/react.svg";
import { useState } from "react";
import CourseGoalsList from "./components/CourseGoalsList";
import NewGoal from "./components/NewGoal";
export type courseGoal = {
  title: string;
  description: string;
  id: string | number;
};

const App = () => {
  const [goals, setGoals] = useState<courseGoal[]>([]);

  const handleAddGoals = (goal: string, summary: string): void => {
    console.log(goal, summary);
    setGoals((prevGoals) => [
      ...prevGoals,
      {
        title: goal,
        description: summary,
        id: new Date().getMilliseconds(),
      },
    ]);
  };
  const handleDeleteGoal = (id: string | number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };
  return (
    <main>
      <Header image={{ src: logo, alt: "this is course goals logo" }}>
        <h1>Your Course Goals V1</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoals} />
      <CourseGoalsList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
};

export default App;
