import { FC, ReactNode } from "react";
import CourseGoals from "./CourseGoals";
import { type courseGoal } from "../App";
import InfoBox from "./InfoBox";

interface courseGoalListPorps {
  goals: courseGoal[];
  onDeleteGoal: (id: string | number) => void;
}
const CourseGoalsList: FC<courseGoalListPorps> = ({ goals, onDeleteGoal }) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You Have No course yet, Start adding new goals!
      </InfoBox>
    );
  }
  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
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
    </>
  );
};

export default CourseGoalsList;
