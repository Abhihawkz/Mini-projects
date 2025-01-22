import User from "../model/usermodel.js"


export const signup  = async (req, res) => {
    try {
      const { username, fullname, password, email } = req.body;
      const user = new User({ username, fullname, password, email });
      await user.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to create user', error: error.message });
    }
  };

export const login = async (req, res) => {
    const { username, password } = req.body;

  
    // Dummy authentication logic (replace this with your actual authentication logic)
    const user = User.findOne(username,password);
  
    if (user) {
      // User authenticated successfully
      res.json({ success: true, message: 'Login successful' });
    } else {
      // Invalid username or password
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  };
