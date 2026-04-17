import { createContext, useState, useEffect } from "react";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [activities, setActivities] = useState(() => {
    const saved = localStorage.getItem("keen_timeline");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("keen_timeline", JSON.stringify(activities));
  }, [activities]);

  const addActivity = (newActivity) => {
    setActivities((prev) => [newActivity, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ activities, addActivity }}>
      {children}
    </TimelineContext.Provider>
  );
};
