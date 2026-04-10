export const registerController = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Register controller",
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginController = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Login controller",
    });
  } catch (error) {
    console.log(error);
  }
};
