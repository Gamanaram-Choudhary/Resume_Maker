import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import User from "../models/User.js";
dotenv.config();

const { JWT_SECRET_KEY, YOUR_EMAIL, YOUR_PASSWORD } = process.env;

const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return res
        .status(409)
        .json({ status: false, message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    return res
      .status(201)
      .json({ status: true, message: "User created successfully." });
  } catch (error) {
    console.error("Signup Error:", error); // Enhanced error logging
    return res
      .status(500)
      .json({ status: false, message: "Internal server error." });
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res
        .status(401)
        .json({ status: false, message: "Incorrect password" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET_KEY, {
      expiresIn: "3h",
    });

    const options = {
      path: "/",
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    };

    res.cookie("token", token, options); // Store token in cookie
    return res
      .status(200)
      .json({ status: true, message: "Login successfully" });
  } catch (error) {
    console.error("Login Error:", error); // Enhanced error logging
    return res
      .status(500)
      .json({ status: false, message: "Internal server error." });
  }
};

const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET_KEY, {
      expiresIn: "10m",
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: YOUR_EMAIL,
        pass: YOUR_PASSWORD,
      },
    });

    const mailOptions = {
      from: YOUR_EMAIL,
      to: email,
      subject: "Reset Password",
      text: `Click this link to reset your password: http://localhost:3000/reset-password/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({
          status: false,
          message: "Error in sending mail, please try again later.",
        });
      } else {
        console.log("Email sent:", info.response);
        return res.status(200).json({
          status: true,
          message: "Please check your email for password reset instructions.",
        });
      }
    });
  } catch (error) {
    console.error("Forgot Password Error:", error); // Enhanced error logging
    return res
      .status(500)
      .json({ status: false, message: "Internal server error." });
  }
};

const resetPassword = async (req, res, next) => {
  try {
    const { token } = req.params;
    const { password } = req.body;
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    if (!decoded) {
      return res
        .status(401)
        .json({ status: false, message: "Unauthorized user." });
    }
    const id = decoded.id;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.findByIdAndUpdate(id, { password: hashedPassword });
    return res.status(200).json({
      status: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.error("Reset Password Error:", error); // Enhanced error logging
    return res.status(500).json({ status: false, message: "Invalid token." });
  }
};

const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    // console.log(token);
    if (!token) {
      return res
        .status(401)
        .json({ status: false, message: "No token found." });
    }

    jwt.verify(token, JWT_SECRET_KEY, (error, user) => {
      if (error) {
        return res
          .status(401)
          .json({ status: false, message: "Invalid token" });
      }
      req.userId = user.id;
      next();
    });
  } catch (error) {
    // console.error("Verify User Error:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal Server Error" });
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId, "-password");
    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }
    return res.status(200).json({ status: true, user });
  } catch (error) {
    // console.error("Get User Error:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal Server Error" });
  }
};

const logout = async (req, res, next) => {
  try {
    res.clearCookie("token");
    return res
      .status(200)
      .json({ status: true, message: "logout successfully." });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "Internal Server Error" });
  }
};

export { signup, login, forgotPassword, resetPassword, verifyUser, getUser,logout };
