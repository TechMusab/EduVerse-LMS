import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../redux/Slices/authSlice";
import Topbar from "../../components/Dashboard/Topbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import Toast from "../../components/shared/Toast";
import review from "../../assets/review (1).jpg";

export default function Profile() {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.auth);
  const [toast, setToast] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    bio: "",
    expertise: "",
    linkedin: "",
    website: "",
  });

  useEffect(() => {
    // Only fetch if user data is not available
    if (!user) {
      dispatch(fetchProfile());
    }
  }, [dispatch, user]);

  useEffect(() => {
    console.log("User data in Profile:", user); // Debug log
    if (user?.instructorProfile) {
      setFormData({
        bio: user.instructorProfile.bio || "",
        expertise: user.instructorProfile.expertise || "",
        linkedin: user.instructorProfile.linkedin || "",
        website: user.instructorProfile.website || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:5000/api/users/update-profile",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      
      if (response.ok) {
        setToast({ message: "Profile updated successfully!", type: "success" });
        setIsEditing(false);
        dispatch(fetchProfile()); // Refresh user data
      } else {
        setToast({ message: data.message || "Failed to update profile", type: "error" });
      }
    } catch (error) {
      setToast({ message: "Network error. Please try again.", type: "error" });
    }
    
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-primary-500 text-xl animate-bounce">Loading...</div>
      </div>
    );
  }

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <Topbar />
      <main className="flex flex-col lg:flex-row min-h-screen bg-background">
        <Sidebar />
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-text mb-8 animate-fade-in">Profile</h1>
            
            {/* Profile Header */}
            <div className="bg-surface rounded-xl shadow-lg p-6 mb-6 animate-slide-up glass-effect">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img
                    src={user?.instructorProfile?.profilePicture || review}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary-500 shadow-glow"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full gradient-success flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-text">{user?.username || "Loading..."}</h2>
                  <p className="text-text-light">{user?.email || "Loading email..."}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      user?.role === "instructor" 
                        ? "gradient-success text-white" 
                        : "gradient-secondary text-white"
                    }`}>
                      {user?.role === "instructor" ? "Instructor" : "Student"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="gradient-primary text-white px-6 py-2 rounded-lg hover:shadow-glow-hover transition-all duration-300 animate-fade-in"
                >
                  {isEditing ? "Cancel" : "Edit Profile"}
                </button>
              </div>
            </div>

            {/* Profile Details */}
            <div className="bg-surface rounded-xl shadow-lg p-6 animate-slide-up glass-effect">
              <h3 className="text-xl font-semibold text-text mb-4">Profile Information</h3>
              
              {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      rows="4"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors bg-gray-50"
                      placeholder={user?.role === "student" ? "Tell us about yourself..." : "Tell us about your teaching experience..."}
                    />
                  </div>
                  
                  {/* Only show expertise field for instructors */}
                  {user?.role === "instructor" && (
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">
                        Expertise
                      </label>
                      <input
                        type="text"
                        name="expertise"
                        value={formData.expertise}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors bg-gray-50"
                        placeholder="Your areas of expertise..."
                      />
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors bg-gray-50"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                  
                  {/* Only show website field for instructors */}
                  {user?.role === "instructor" && (
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors bg-gray-50"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                  )}
                  
                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="gradient-success text-white px-6 py-2 rounded-lg hover:shadow-glow-hover transition-all duration-300"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Bio
                    </label>
                    <p className="text-gray-700 p-3 bg-gray-50 rounded-lg min-h-[60px] border border-gray-200">
                      {user?.instructorProfile?.bio || "No bio added yet."}
                    </p>
                  </div>
                  
                  {/* Only show expertise field for instructors */}
                  {user?.role === "instructor" && (
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">
                        Expertise
                      </label>
                      <p className="text-gray-700 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        {user?.instructorProfile?.expertise || "No expertise listed."}
                      </p>
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      LinkedIn Profile
                    </label>
                    <p className="text-gray-700 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      {user?.instructorProfile?.linkedin ? (
                        <a 
                          href={user.instructorProfile.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary-500 hover:underline transition-colors"
                        >
                          {user.instructorProfile.linkedin}
                        </a>
                      ) : (
                        "No LinkedIn profile added."
                      )}
                    </p>
                  </div>
                  
                  {/* Only show website field for instructors */}
                  {user?.role === "instructor" && (
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">
                        Website
                      </label>
                      <p className="text-gray-700 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        {user?.instructorProfile?.website ? (
                          <a 
                            href={user.instructorProfile.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary-500 hover:underline transition-colors"
                          >
                            {user.instructorProfile.website}
                          </a>
                        ) : (
                          "No website added."
                        )}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 