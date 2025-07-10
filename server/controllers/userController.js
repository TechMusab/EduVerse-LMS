import User from "../models/User";

export const becomeInstructor = async (req, res) => {
  try {
    const userId = req.user.id;
    const { bio, expersite, linkedin } = req.body;
    if (!bio || !expersite || !linkedin) {
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
          expersite,
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
