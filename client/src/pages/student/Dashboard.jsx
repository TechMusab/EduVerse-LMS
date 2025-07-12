import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../redux/Slices/authSlice";
import Topbar from "../../components/Dashboard/Topbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import StudentDashboard from "../../components/student/StudentDashboard";
import InstructorDashboard from "../../components/instructor/InstructorDashboard";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.auth);

  useEffect(() => {
    // Only fetch if user data is not available
    if (!user) {
      dispatch(fetchProfile());
    }
  }, [dispatch, user]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-primary-500 text-xl animate-bounce">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Topbar />
      <main className="flex flex-col lg:flex-row min-h-screen bg-background">
        <Sidebar />
        <div className="flex-1 p-6">
          {user?.role === "instructor" ? (
            <InstructorDashboard />
          ) : (
            <StudentDashboard />
          )}
        </div>
      </main>
    </>
  );
} 