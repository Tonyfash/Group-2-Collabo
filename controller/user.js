const userModel = require('../models/user');


exports.createUser = async (req, res) => {
  try {
    const {name, email, location} = req.body

    const existingEmail = await userModel.findOne({email});

    if (existingEmail) {
      return res.status(400).json({
        message: `User with the email: ${email} already exists`
      })
    }

    const user = new userModel({
      name,
      email,
      location
    })

    await user.save();
    res.status(201).json({
      message: `User created successfully`,
      data: user
    })
    
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}