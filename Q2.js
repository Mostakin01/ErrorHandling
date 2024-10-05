function login(username, password) {
    if (!username) {
      throw new Error("Username is required.");
    }
    if (!password) {
      throw new Error("Password is required.");
    }
    // Simulate checking credentials (this is just an example)
    const validUsername = "user123";
    const validPassword = "password123";
    if (username !== validUsername || password !== validPassword) {
      throw new Error("Invalid username or password.");
    }
    console.log("Login successful!");
  }
  
  try {
    login("user123", "password123"); // Should log: "Login successful!"
    login("", "password456"); // Should throw an error: "Username is required."
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    login("user567", ""); // Should throw an error: "Password is required."
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    login("invalidUser", "invalidPassword"); // Should throw an error: "Invalid username or password."
  } catch (error) {
    console.error(error.message);
  }