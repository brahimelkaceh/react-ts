import { FC, type ReactNode } from "react";

interface CourseGoalsProps {
  id: string | number;
  title: string;
  children: ReactNode;
  onDeleteGoal: (id: string | number) => void;
}
const CourseGoals: FC<CourseGoalsProps> = ({
  title,
  children,
  onDeleteGoal,
  id,
}) => {
  return (
    <article>
      <div>
        <h2>
          {title} {id}
        </h2>
        {children}
      </div>
      <button onClick={() => onDeleteGoal(id)}>Delete</button>
    </article>
  );
};

export default CourseGoals;
