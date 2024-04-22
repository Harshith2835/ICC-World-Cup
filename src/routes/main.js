const express = require("express");
const details = require("../models/details");
const routes = express.Router();
const data_player = require("../models/vk");
const data_rounder_bowler = require("../models/all_rounder_bowlers");

routes.get("/", async (req, res) => {
  const detail = await details.findOne({ _id: "642c14b2ac079debb4d82163" });
  res.render("index", {
    detail: detail,
  });
});
routes.get("/player_info",(req,res)=>{
  res.render("player_info")
})
routes.get("/Arshdeep%20Singh", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afeb1" });
  res.render("Arshdeep Singh", {
    data: data,
  });
});
routes.get("/Axar%20Patel", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afead" });
  res.render("Axar Patel", {
    data: data,
  });
});
routes.get("/Hardik%20Pandya", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afeae" });
  res.render("Hardik Pandya", {
    data: data,
  });
});
routes.get("/Ishan%20Kishan", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afea2" });
  res.render("Ishan Kishan", {
    data: data,
  });
});
routes.get("/Jasprit%20Bumrah", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afeb3" });
  res.render("Jasprit Bumrah", {
    data: data,
  });
});
routes.get("/KL%20Rahul", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afea3" });
  res.render("KL Rahul", {
    data: data,
  });
});
routes.get("/Deepak%20Chahar", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afeb2" });
  res.render("Deepak Chahar", {
    data: data,
  });
});
routes.get("/Kuldeep%20Yadav", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afeb4" });
  res.render("Kuldeep Yadav", {
    data: data,
  });
});
routes.get("/Mohammad%20Siraj", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afeb5" });
  res.render("Mohammad Siraj", {
    data: data,
  });
});
routes.get("/R%20Ashwin", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afeb6" });
  res.render("R Ashwin", {
    data: data,
  });
});
routes.get("/R%20jadeja", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afeaf" });
  res.render("R jadeja", {
    data: data,
  });
});
routes.get("/Rishabh%20Pant", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afea4" });
  res.render("Rishabh Pant", {
    data: data,
  });
});
routes.get("/Rohit%20Sharma", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afea5" });
  res.render("Rohit Sharma", {
    data: data,
  });
});
routes.get("/Ruturaj%20Gaikwad", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afea6" });
  res.render("Ruturaj Gaikwad", {
    data: data,
  });
});
routes.get("/Sanju%20Samson", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afea7" });
  res.render("Sanju Samson", {
    data: data,
  });
});
routes.get("/Shardul%20Thakur", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afeb7" });
  res.render("Shardul Thakur", {
    data: data,
  });
});
routes.get("/Shikhar%20Dhawan", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afea8" });
  res.render("Shikhar Dhawan", {
    data: data,
  });
});
routes.get("/Shreyas%20Iyer", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afea9" });
  res.render("Shreyas Iyer", {
    data: data,
  });
});
routes.get("/Shubhman%20Gill", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afeaa" });
  res.render("Shubhman Gill", {
    data: data,
  });
});
routes.get("/Suryakumar%20Yadav", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afeab" });
  res.render("Suryakumar Yadav", {
    data: data,
  });
});
routes.get("/Umesh%20Yadav", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afeb8" });
  res.render("Umesh Yadav", {
    data: data,
  });
});
routes.get("/Virat%20Kohli", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afeac" });
  res.render("Virat Kohli", {
    data: data,
  });
});
routes.get("/Washington%20Sundar", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afeb0" });
  res.render("Washington Sundar", {
    data: data,
  });
});
routes.get("/Y%20chahal", async (req, res) => {
  const data = await data_player.findOne({ _id: "643a72d689b69b20868afeb9" });
  res.render("Y chahal", {
    data: data,
  });
});
routes.get("/Virat_Kohli", (req, res) => {
  res.render("c_Virat Kohli");
});
routes.get("/Ishan_Kishan", (req, res) => {
  res.render("c_Ishan Kishan");
});
routes.get("/Rishabh_Pant", (req, res) => {
  res.render("c_Rishabh_Pant");
});
routes.get("/Rohit_Sharma", (req, res) => {
  res.render("c_Rohit_Sharma");
});
routes.get("/Ruturaj_Gaikwad", (req, res) => {
  res.render("c_Ruturaj_Gaikwad");
});
routes.get("/Sanju_Samson", (req, res) => {
  res.render("c_Sanju_Samson");
});
routes.get("/Shikhar_Dhawan", (req, res) => {
  res.render("c_Shikhar_Dhawan");
});
routes.get("/Shreyas_Iyer", (req, res) => {
  res.render("c_Shreyas_Iyer");
});
routes.get("/Shubhman_Gill", (req, res) => {
  res.render("c_Shubhman_Gill");
});
routes.get("/Suryakumar_Yadav", (req, res) => {
  res.render("c_Suryakumar_Yadav");
});
routes.get("/Arshdeep_Singh", (req, res) => {
  res.render("c_Arshdeep_Singh");
});
routes.get("/Jasprit_Bumrah", (req, res) => {
  res.render("c_Jasprit_Bumrah");
});
routes.get("/Kuldeep_Yadav", (req, res) => {
  res.render("c_Kuldeep_Yadav");
});
routes.get("/Mohammad_Siraj", (req, res) => {
  res.render("c_Mohammad_Siraj");
});
routes.get("/R_Ashwin", (req, res) => {
  res.render("c_R_Ashwin");
});
routes.get("/Shardul_Thakur", (req, res) => {
  res.render("c_Shardul_Thakur");
});
routes.get("/Umesh_Yadav", (req, res) => {
  res.render("c_Umesh_Yadav");
});
routes.get("/Y_chahal", (req, res) => {
  res.render("c_Y_chahal");
});
routes.get("/Axar_Patel", (req, res) => {
  res.render("c_Axar_Patel");
});
routes.get("/Hardik_Pandya", (req, res) => {
  res.render("c_Hardik_Pandya");
});
routes.get("/Washington_Sundar", (req, res) => {
  res.render("c_Washington_Sundar");
});
routes.get("/R_jadeja", (req, res) => {
  res.render("c_R_jadeja");
});
routes.get("/KL_Rahul", (req, res) => {
  res.render("c_KL Rahul");
});
routes.get("/Deepak_Chahar", (req, res) => {
  res.render("c_Deepak_Chahar");
});


// routes.get("/sign-up", async (req, res) => {
//   const detail = await details.findOne({ _id: "642c14b2ac079debb4d82163" });
//   res.render("sign-up", {
//     detail: detail,
//   });
// });
// routes.get("/contact-us", async (req, res) => {
//   const detail = await details.findOne({ _id: "642c14b2ac079debb4d82163" });
//   res.render("contact", {
//     detail: detail,
//   });
// });
// routes.post("/process-contact-form", async (req, res) => {
//   // saving the data into db
//   try {
//     const data = await contact.create(req.body);
//     res.redirect("/");
//   } catch (e) {
//     console.log(e);
//   }
// });

// routes.post("/process-sign-up-form", async (req, res) => {
//   //encrypting users password
//   const { username, email, password: plainTextPassword } = req.body;
//   const password = await bcrypt.hash(plainTextPassword, 10);
//   //saving data into db
//   try {
//     const data_sign_up = await sign_up.create({
//       username,
//       email,
//       password,
//     });
//     res.redirect("/");
//   } catch (e) {
//     console.log(e);
//   }
// });

// routes.post("/process-login-form", async (req, res) => {
//   const { username, password } = req.body;
//   const user = await sign_up.findOne({ username });
//   if (!user) {
//     return res.render("Error");
//   }
//   if (await bcrypt.compare(password, user.password)) {
//     //the username password combination is succesfull
//     const token = jwt.sign(
//       {
//         id: user._id,
//         username: user.username,
//       },
//       JWT_SECRET
//     );
//   const detail = await details.findOne({ _id: "642c14b2ac079debb4d82163" });
//   return res.render("account",{
//     user:user,
//     detail: detail,
//     });
//   } else {
//     //incorrect password
//     return res.render("Error");
//   }
// });

module.exports = routes;
