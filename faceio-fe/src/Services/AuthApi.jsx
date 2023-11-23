import axios from "axios";

const saveUserInfoToDatabase = async (userInfo) => {
  try {
    const apiUrl = "http://localhost:3000/api/auth/register";

    const response = await axios.post(apiUrl, userInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("User information saved to the database successfully.");
    } else {
      console.error("Failed to save user information to the database.");
    }
  } catch (error) {
    console.error("Error while saving user information:", error);
  }
};

export {saveUserInfoToDatabase};
