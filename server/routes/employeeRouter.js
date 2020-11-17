router.post("/register", async (req, res) => {
    try {
      let {
        name,
        email,
        userName,
        password,
        passwordCheck,
        gender,
        phoneNumber,
        role,
        address,
      } = req.body;
      var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  
      // validate
  
      if (
        !name ||
        !email ||
        !userName ||
        !password ||
        !passwordCheck ||
        !gender ||
        !phoneNumber ||
        !address
      )
        return res.status(400).json({ msg: "Not all fields have been entered." });
  
      var valid = emailRegex.test(email);
      if (!valid) res.status(400).json({ msg: "Please enter correct email." });
  
      const existingUser = await User.findOne({ email: email });
      if (existingUser)
        return res
          .status(400)
          .json({ msg: "An account with this email already exists." });
  
      if (userName.length > 10)
        return res.status(400).json({
          msg: "The username needs to be less than or equal to 10 character.",
        });
  
      const existingUserName = await User.findOne({ userName: userName });
      if (existingUserName)
        return res
          .status(400)
          .json({ msg: "An Account with this username already exists." });
  
      if (password.length < 5)
        return res
          .status(400)
          .json({ msg: "The password needs to be at least 5 characters long." });
  
      if (password !== passwordCheck)
        return res
          .status(400)
          .json({ msg: "Enter the same password twice for verification." });
  
      if (gender !== "Male" && gender !== "Female")
        return res.status(400).json({ msg: "Please select correct gender." });
  
      if (phoneNumber.length !== 11)
        return res
          .status(400)
          .json({ msg: "The phone number needs to be 11 digits long." });
  
      const existingPhoneNumber = await User.findOne({
        phoneNumber: phoneNumber,
      });
      if (existingPhoneNumber)
        return res
          .status(400)
          .json({ msg: "An account with this phone number already exists." });
  
      let duplicatePassword = password;
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        name,
        email,
        userName,
        password: passwordHash,
        gender,
        phoneNumber,
        role,
        address,
      });
  
      if (newUser.role === "user") {
        const saveUser = newUser.save().then((user) => {
          smtpTransport.sendMail({
            to: user.email,
            from: "efitnessclub7@gmail.com",
            subject: "Account Signup Success",
            html: `WELCOME TO E-FTINESS CLUB`,
          });
        });
        res.json(saveUser);
      } else {
        const saveEmployee = newUser.save().then((user) => {
          smtpTransport.sendMail({
            to: user.email,
            from: "efitnessclub7@gmail.com",
            subject: "Account Credentials",
            html: `Welcome ${user.name} your role in our website is ${user.role} 
            Your User Name is ${user.userName} and your password is ${duplicatePassword}`,
          });
          res.json(saveEmployee);
        });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  