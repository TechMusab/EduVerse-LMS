import User from "../models/User.js";

export const becomeInstructor = async (req, res) => {
  try {
    console.log("h")
    const userId = req.user.id;
    const { bio, expertise, linkedin } = req.body;
    if (!bio || !expertise) {
      return res.status(400).json({
        message: "Please provide all required fields.",
      });
    }
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        role: "instructor",
        instructorProfile: {
          bio,
          expertise,
          linkedin,
        },
      },
      {
        new: true,
      }
    );
    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found.",
      });
    }
    res.status(200).json({
      message: "User role updated to instructor successfully.",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error. Please try again later.",
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { bio, expertise, linkedin, website } = req.body;
    
    const updateData = {};
    if (bio !== undefined) updateData["instructorProfile.bio"] = bio;
    if (expertise !== undefined) updateData["instructorProfile.expertise"] = expertise;
    if (linkedin !== undefined) updateData["instructorProfile.linkedin"] = linkedin;
    if (website !== undefined) updateData["instructorProfile.website"] = website;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    res.status(200).json({
      message: "Profile updated successfully.",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error. Please try again later.",
    });
  }
};

export const getProfileInfo = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log("Fetching profile for user ID:", userId); // Debug log
    const user = await User.findById(userId).select('-password');
    console.log("User data from database:", user); // Debug log
    
    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    res.status(200).json({
      user: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error. Please try again later.",
    });
  }
};
