import React, { useContext } from "react";
import { TimelineContext } from "../context/store";

const SummaryCard = ({ friends }) => {
  const { activities } = useContext(TimelineContext);
  const total = friends.length;

  const onTrack = friends.filter((f) => f.status === "on-track").length;

  const needAttention = friends.filter(
    (f) => f.status === "overdue" || f.status === "almost due",
  ).length;

  const currentMonth = new Date().toLocaleString("en-US", { month: "long" });
  const interactionsThisMonth = activities.filter((activity) =>
    activity.date.includes(currentMonth),
  ).length;

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold text-emerald-900 mb-2">
              {total}
            </h2>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-tight">
              Total Friends
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold text-emerald-900 mb-2">
              {onTrack}
            </h2>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-tight">
              On Track
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold text-emerald-900 mb-2">
              {needAttention}
            </h2>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-tight">
              Need Attention
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold text-emerald-900 mb-2">
              {interactionsThisMonth}
            </h2>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-tight">
              Interactions {currentMonth}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummaryCard;
