import React, { FunctionComponent } from "react";
import "./LandingView.css";
import { getChallengesPerArena } from "../../RobotSimulator/ChallengeConfigLoader";
import {
  Card,
  CardImage,
  CardTitle,
  CardBody,
} from "../components/Common/Card";
import placeholder from "../components/Header/FIRST_Horz_RGB.png";
import { Link } from "react-router-dom";
import { ChallengeConfig } from "../../RobotSimulator/Arenas/base";

const DEFAULT_LANDING_DESCRIPTION = "Solve this challenge!";

const LessonSection: FunctionComponent<{ title: string }> = ({
  title,
  children,
}) => {
  return (
    <div className="lesson-section">
      <h1 className="lesson-title">{title}</h1>
      <div className="lessons">{children}</div>
    </div>
  );
};

export const LandingView = () => {
  const lessons: Array<{
    title: string;
    challenges: ChallengeConfig[];
  }> = [];

  getChallengesPerArena().forEach((challenges, lessonTitle) => {
    lessons.push({
      title: lessonTitle,
      challenges,
    });
  });

  return (
    <div className="landing-view">
      {lessons.map((lesson) => (
        <LessonSection title={lesson.title} key={lesson.title}>
          {lesson.challenges.map((challenge) => (
            <Link
              className="lesson-link"
              to={`/lessons/${lesson.title}/challenges/${challenge.name}/`}
              key={challenge.name}
            >
              <Card>
                <CardImage src={challenge.image || placeholder} />
                <CardTitle title={challenge.name} as="h2" />
                <CardBody>
                  {challenge.descriptions?.short || DEFAULT_LANDING_DESCRIPTION}
                </CardBody>
              </Card>
            </Link>
          ))}
        </LessonSection>
      ))}
    </div>
  );
};
