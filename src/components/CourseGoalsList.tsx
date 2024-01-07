import { FC } from "react";
import CourseGoals from "./CourseGoals";
import { type courseGoal } from "../App";

interface courseGoalListPorps {
  goals: courseGoal[];
  onDeleteGoal: (id: string | number) => void;
}
const CourseGoalsList: FC<courseGoalListPorps> = ({ goals, onDeleteGoal }) => {
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <li key={goal.id}>
            <CourseGoals
              title={goal.title}
              onDeleteGoal={onDeleteGoal}
              id={goal.id}
            >
              <p>{goal.description}</p>
            </CourseGoals>
          </li>
        );
      })}
    </ul>
  );
};

export default CourseGoalsList;
