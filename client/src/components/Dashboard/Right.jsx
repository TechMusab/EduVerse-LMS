import React from "react";
import { MdTrendingUp, MdNotifications, MdCalendarToday } from "react-icons/md";
import { FaTrophy, FaStar } from "react-icons/fa";

export default function Right() {
  const achievements = [
    { id: 1, title: "First Course", description: "Completed your first course", icon: "🏆", color: "gradient-success" },
    { id: 2, title: "Perfect Score", description: "Got 100% on a quiz", icon: "⭐", color: "gradient-warning" },
    { id: 3, title: "Streak Master", description: "7 days learning streak", icon: "🔥", color: "gradient-error" }
  ];

  const notifications = [
    { id: 1, message: "New course available: Advanced React", time: "2 hours ago", type: "course" },
    { id: 2, message: "Assignment due tomorrow", time: "5 hours ago", type: "assignment" },
    { id: 3, message: "You earned a new badge!", time: "1 day ago", type: "achievement" }
  ];

  return (
    <div className="space-y-6">
      {/* Learning Stats */}
      <div className="bg-surface rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-text mb-4">Learning Stats</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-background">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <MdTrendingUp size={20} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-text">Learning Streak</p>
                <p className="text-sm text-muted">Current streak</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-text">7</p>
              <p className="text-xs text-muted">days</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-background">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <FaTrophy size={20} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-text">Total Points</p>
                <p className="text-sm text-muted">Earned this month</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-text">1,247</p>
              <p className="text-xs text-muted">points</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-background">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <FaStar size={20} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-text">Average Score</p>
                <p className="text-sm text-muted">Last 30 days</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-text">87%</p>
              <p className="text-xs text-muted">excellent</p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-surface rounded-xl p-6 shadow-lg glass-effect">
        <h2 className="text-xl font-bold text-text mb-4">Recent Achievements</h2>
        <div className="space-y-3">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:shadow-sm transition-all duration-300">
              <div className={`w-12 h-12 rounded-lg ${achievement.color} flex items-center justify-center text-2xl`}>
                {achievement.icon}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-text">{achievement.title}</p>
                <p className="text-sm text-text-light">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-surface rounded-xl p-6 shadow-lg glass-effect">
        <h2 className="text-xl font-bold text-text mb-4">Recent Notifications</h2>
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div key={notification.id} className="p-3 rounded-lg border border-gray-100 hover:shadow-sm transition-all duration-300">
              <p className="text-sm text-text font-medium">{notification.message}</p>
              <p className="text-xs text-text-light mt-1">{notification.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-surface rounded-xl p-6 shadow-lg glass-effect">
        <h2 className="text-xl font-bold text-text mb-4">Upcoming Events</h2>
        <div className="space-y-3">
          <div className="p-3 rounded-lg border border-gray-100 hover:shadow-sm transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <MdCalendarToday size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-text">Live Q&A Session</p>
                <p className="text-sm text-text-light">Tomorrow at 2:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="p-3 rounded-lg border border-gray-100 hover:shadow-sm transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-secondary flex items-center justify-center">
                <MdNotifications size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-text">Course Deadline</p>
                <p className="text-sm text-text-light">React Fundamentals - 3 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
