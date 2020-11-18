import React, { useState, useEffect } from "react";
import history from "./history/History";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import Axios from "axios";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Bmi from "./components/pages/Bmi";
import PageNotFound from "./components/pages/PageNotFound";
import UserRecipes from "./User/Nutritionist/Recipes/Recipies";
import DietPlan from "./components/pages/DietPlans";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import Product from "./Admin/E-Commerece/Product";
import CreateProduct from "./Admin/E-Commerece/CreateProduct";
import CreateProgram from "./trainer/Components/Training Programs/CreatePrograms";
import EditProduct from "./Admin/E-Commerece/EditProduct";
import UserProduct from "./User/E-commerce System/Product";
import ProductDetail from "./User/E-commerce System/ProductDetail";
import CartPage from "./User/E-commerce System/CartPage";
import Order from "./Admin/E-Commerece/Order";
import TrainerLoginForm from "./trainer/Components/Form/TrainerLoginForm";
import TrainerDashboard from "./trainer/Dashboard";
import UserProgram from "./User/Training System/Programs";
import Programs from "./trainer/Components/Training Programs/Programs";
import UserContext from "./context/userContext";
/*import UserAuth from "../src/auth/UserAuth";*/
import CreateRecipe from "./Nutrition/Recipes/createRecipe";
import UpdateRecipe from "./Nutrition/Recipes/updateRecipe";
import Recipe from "./Nutrition/Recipes/Recipe";
import NutritionistLogin from "./Nutrition/nutritionloginform";
import NutritionistDashboard from "./Nutrition/Dashboard";
import DietPlans from "./Nutrition/DietPlans/dietPlans";
import CreateDietPlan from "./Nutrition/DietPlans/createDietPlans";
import UnderWeight from "./User/Nutritionist/DietPlans/underWeightDietPlan";
import Obese from "./User/Nutritionist/DietPlans/obeseDiet";
import Normal from "./User/Nutritionist/DietPlans/normal";
import OverWieght from "./User/Nutritionist/DietPlans/overWeight";
import Trainee from "./trainer/Components/Trainees/Trainee";
import AddEmployee from "./Admin/Employee/AddEmployee";
import Employee from "./Admin/Employee/Employee";
import Chat from "./Chat System/Chat/Chat";
import Join from "./Chat System/Join/Join";
import Doctor from "./Doctor/Home";
import ProgramDetail from "./User/Training System/ProgramDetail";
import AddSchedule from "./trainer/Components/Training Program Details/Schedule Details/AddSchedule";
import ViewDetail from "./trainer/Components/Training Program Details/View Details/ViewDetail";
import AddWorkout from "./trainer/Components/Training Program Details/Workout Details/AddWorkout";
import EditSchedule from "./trainer/EditSchedule";
import EditWorkout from "./trainer/EditWorkout";
import UserProfile from "./User/UserProfile";
import ResetPassword from "./components/Forms/Reset";
import NewPassword from "./components/Forms/NewPassword";
import RecipeDetail from "./User/Nutritionist/Recipes/RecipeDetails";
import BlogDetail from "./components/Blog/BlogDetails";
import CreateBlog from "./trainer/Components/Blog/CreateBlog";
import GetBlog from "./trainer/Components/Blog/GetBlog";
import Content from "./trainer/Components/Blog/Content";
import Blogs from "./User/Blogs/Blog";

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenisvalid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <Router history={history}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/bmi" component={Bmi} />
          <Route path="/blogDetails" component={BlogDetail} />
          <Route path="/pagenotfound" component={PageNotFound} />
          <Route path="/dietplans/underWeight" component={UnderWeight} />
          <Route path="/dietplans/obese" component={Obese} />
          <Route path="/dietplans/normal" component={Normal} />
          <Route path="/dietplans/overweight" component={OverWieght} />
          <Route path="/user/dietplans" component={DietPlan} />
          <Route path="/user/recipes" component={UserRecipes} />
          <Route path="/user/recipes" component={RecipeDetail} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/admin/product" component={Product} />
          <Route path="/admin/create/product" component={CreateProduct} />
          <Route path="/admin/edit/product" component={EditProduct} />
          <Route path="/admin/order" component={Order} />
          <Route path="/user/cart" component={CartPage} />
          <Route path="/user/product" component={UserProduct} />
          <Route path="/user/productDetail/:id" component={ProductDetail} />
          {/*<Route path="/auth" component={UserAuth} />*/}
          <Route path="/nutritionist/create/recipe" component={CreateRecipe} />
          <Route path="/nutritionist/update/recipe" component={UpdateRecipe} />
          <Route path="/nutritionist/recipe" component={Recipe} />
          <Route path="/nutritionist/login" component={NutritionistLogin} />
          <Route
            path="/nutritionist/dashboard"
            component={NutritionistDashboard}
          />
          <Route
            path="/nutritionist/create/dietPlan"
            component={CreateDietPlan}
          />
          <Route path="/nutritionist/dietPlan" component={DietPlans} />
          <Route path="/trainer/login" component={TrainerLoginForm} />
          <Route path="/trainer/dashboard" component={TrainerDashboard} />
          <Route path="/trainer/create/program" component={CreateProgram} />
          <Route path="/trainer/program" component={Programs} />
          <Route path="/trainer/add/schedule/:id" component={AddSchedule} />
          <Route path="/trainer/add/workout/:id" component={AddWorkout} />
          <Route path="/trainer/view/program/:id" component={ViewDetail} />
          <Route path="/user/program" component={UserProgram} />
          <Route path="/user/programdetail/:id" component={ProgramDetail} />
          <Route
            path="/trainer/editSchedule/:id/:index"
            component={EditSchedule}
          />
          <Route
            path="/trainer/editWorkout/:id/:index"
            component={EditWorkout}
          />
          <Route path="/trainer/trainee" component={Trainee} />
          <Route path="/admin/addEmployee" component={AddEmployee} />
          <Route path="/admin/employee" component={Employee} />
          <Route path="/doctor/home" component={Doctor} />
          <Route path="/chat" component={Chat} />
          <Route path="/join" component={Join} />
          <Route path="/user/profile" component={UserProfile} />
          <Route path="/reset/password" component={ResetPassword} />
          <Route path="/new/password/:token" component={NewPassword} />
          <Route path="/trainer/createblog" component={CreateBlog} />
          <Route path="/trainer/getblog" component={GetBlog} />
          <Route path="/user/blog" component={Blogs} />
          <Route path="/trainer/addcontent/:id" component={Content} />

          <Redirect to="/pagenotfound" />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
