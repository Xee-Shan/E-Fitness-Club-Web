import React, { useState, useEffect } from "react";
import history from "./history/History";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import Axios from "axios";
import Home from "./components/pages/Home";
import AdminProfile from "./Admin/EditProfile";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Bmi from "./components/pages/Bmi";
import PageNotFound from "./components/pages/PageNotFound";
import UserRecipes from "./User/Nutritionist/Recipes/Recipies";
import DietPlan from "./User/Nutritionist/DietPlans/dietPlan";
import DietPlanDetails from "./User/Nutritionist/DietPlans/dietPlanDetails";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import Product from "./Admin/E-Commerece/Product";
import CreateProduct from "./Admin/E-Commerece/CreateProduct";
import CreateProgram from "./trainer/Components/Training Programs/CreatePrograms";
import EditProgram from "./trainer/Components/Training Programs/EditProgram";
import EditProduct from "./Admin/E-Commerece/EditProduct";
import UserProduct from "./User/E-commerce System/Product";
import ProductDetail from "./User/E-commerce System/ProductDetail";
import CartPage from "./User/E-commerce System/CartPage";
import Order from "./Admin/E-Commerece/Order";
import History from "./Admin/E-Commerece/History";
import TrainerDashboard from "./trainer/Dashboard";
import UserProgram from "./User/Training System/Programs";
import Programs from "./trainer/Components/Training Programs/Programs";
import UserContext from "./context/userContext";
/*import UserAuth from "../src/auth/UserAuth";*/
import CreateRecipe from "./Nutrition/Recipes/createRecipe";
import UpdateRecipe from "./Nutrition/Recipes/updateRecipe";
import Recipe from "./Nutrition/Recipes/Recipe";
import NutritionistDashboard from "./Nutrition/Dashboard";
import DietPlans from "./Nutrition/DietPlans/dietPlans";
import DietPlanList from "./Nutrition/DietPlans/DietPlanList";
import ViewDietPlan from "./Nutrition//DietPlans//ViewDetails";
import UpdateDietDetails from "./Nutrition/DietPlans/UpdateDietList";
import CreateDietPlan from "./Nutrition/DietPlans/createDietPlans";
import UpdateDietPlan from "./Nutrition/DietPlans/UpdateDietPlan";
import CreateNutritionistBlog from "./Nutrition/Blog/CreateBlog";
import GetNutritionistBlog from "./Nutrition/Blog/GetBlog";
import EditNutritionistBlog from "./Nutrition/Blog/EditBlog";
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
import UserSettings from "./User/User Settings/UserSettings";
import ResetPassword from "./components/Forms/Reset";
import NewPassword from "./components/Forms/NewPassword";
import RecipeDetail from "./User/Nutritionist/Recipes/RecipeDetails";
import GetVideos from "./User/Training System/GuidedWorkouts";
import ProductCategory from "./User/E-commerce System/ProductCategory";
import CreateBlog from "./trainer/Components/Blog/CreateBlog";
import CreateAdminBlog from "./Admin/Blog/CreateBlog";
import EditAdminBlog from "./Admin/Blog/EditBlog";
import GetAdminBlog from "./Admin/Blog/GetBlog";
import GetBlog from "./trainer/Components/Blog/GetBlog";
import CreateGuidedWorkout from "./trainer/Components/Guided Workouts/CreateWorkout";
import GetGuidedWorkout from "./trainer/Components/Guided Workouts/GetWorkouts";
import EditBlog from "./trainer/Components/Blog/EditBlog";
import DoctorCreateBlog from "./Doctor/Blog/CreateBlog";
import UploadMeditation from "./Doctor/meditation/UploadMeditation";
import DoctorGetBlog from "./Doctor/Blog/GetBlog";
import DoctorEditBlog from "./Doctor/Blog/EditBlog";
import UpdateMeditation from "./Doctor/meditation/UpdateMeditation";
import Blogs from "./User/Blogs/Blog";
import BlogDetails from "./User/Blogs/BlogDetail";
import Meditation from "./Doctor/meditation/Meditation";
import AdminHome from "./Admin/AdminHome";
import ShowMeditation from "./User/Meditation/ShowMeditation";
import MeditationDetail from "./User/Meditation/MeditationDetail";
import GuidedWorkoutDetail from "../src/User/Training System/GuidedWorkoutDetail";
import GuidedWOrkoutSchedule from "../src/trainer/Components/Guided Workouts/AddWorkoutSchedule";
import GuidedWorkoutList from "../src/trainer/Components/Guided Workouts/AddWorkoutList";
import GuidedWorkoutInfo from "../src/trainer/Components/Guided Workouts/WorkoutDetails";
import EditGuidedWorkoutSchedule from "../src/trainer/Components/Guided Workouts/EditSchedule";
import EditGuidedWorkoutList from "./trainer/Components/Guided Workouts/EditWorkout";
import EditGuidedWorkouts from "./trainer/Components/Guided Workouts/EditGuidedWorkouts";
import DoctorProfile from "./Doctor/EditProfile";

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

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

  useEffect(() => {
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
          <Route path="/pagenotfound" component={PageNotFound} />
          <Route path="/user/dietplans" component={DietPlan} />
          <Route path="/user/recipes" component={UserRecipes} />
          <Route path="/user/recipedetail/:id" component={RecipeDetail} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/admin/product" component={Product} />
          <Route path="/admin/create/product" component={CreateProduct} />
          <Route path="/admin/edit/product/:id" component={EditProduct} />
          <Route path="/admin/home" component={AdminHome} />
          <Route path="/admin/order" component={Order} />
          <Route path="/user/videos" component={GetVideos} />
          <Route path="/user/cart" component={CartPage} />
          <Route path="/user/product" component={UserProduct} />
          <Route path="/user/productDetail/:id" component={ProductDetail} />
          <Route
            path="/user/meditationDetail/:id"
            component={MeditationDetail}
          />
          <Route
            path="/user/productCategory/:category"
            component={ProductCategory}
          />
          {/*<Route path="/auth" component={UserAuth} />*/}
          <Route path="/nutritionist/create/recipe" component={CreateRecipe} />
          <Route
            path="/nutritionist/update/recipe/:id"
            component={UpdateRecipe}
          />
          <Route path="/nutritionist/recipe" component={Recipe} />
          <Route path="/user/meditation" component={ShowMeditation} />
          <Route path="/admin/profile" component={AdminProfile} />
          <Route path="/doctor/profile" component={DoctorProfile} />          
          <Route path="/admin/history" component={History} />
          <Route path="/admin/createBlog" component={CreateAdminBlog} />
          <Route path="/admin/blog/edit/:id" component={EditAdminBlog} />
          <Route path="/admin/getBlog" component={GetAdminBlog} />

          <Route
            path="/nutritionist/dashboard"
            component={NutritionistDashboard}
          />
          <Route
            path="/nutritionist/create/dietPlan"
            component={CreateDietPlan}
          />
          <Route
            path="/nutritionist/update/dietPlan/:id"
            component={UpdateDietPlan}
          />
          <Route path="/nutritionist/dietPlan" component={DietPlans} />
          <Route path="/nutritionist/dietPlanList/:id" component={DietPlanList} />
          <Route path="/user/dietPlanDetails/:id" component={DietPlanDetails} />
          <Route path="/nutritionist/view/:id" component={ViewDietPlan} />
          <Route path="/nutritionist/update/:id/:index" component={UpdateDietDetails}/>
          <Route
            path="/nutritionist/createblog"
            component={CreateNutritionistBlog}
          />
          <Route path="/nutritionist/getblog" component={GetNutritionistBlog} />
          <Route
            path="/nutritionist/editblog/:id"
            component={EditNutritionistBlog}
          />
          <Route
            path="/trainer/create/guided/workout"
            component={CreateGuidedWorkout}
          />
          <Route path="/trainer/guided/workout" component={GetGuidedWorkout} />
          <Route path="/trainer/dashboard" component={TrainerDashboard} />
          <Route path="/trainer/create/program" component={CreateProgram} />
          <Route path="/trainer/program" component={Programs} />
          <Route path="/trainer/edit/program/:id" component={EditProgram} />
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
          <Route path="/admin/addEmployee" component={AddEmployee} />
          <Route path="/admin/employee" component={Employee} />
          <Route path="/doctor/home" component={Doctor} />
          <Route path="/chat" component={Chat} />
          <Route path="/join" component={Join} />
          <Route path="/user/profile" component={UserSettings} />
          <Route path="/reset/password" component={ResetPassword} />
          <Route path="/new/password/:token" component={NewPassword} />
          <Route path="/trainer/createblog" component={CreateBlog} />
          <Route path="/trainer/getblog" component={GetBlog} />
          <Route path="/doctor/createBlog" component={DoctorCreateBlog} />
          <Route path="/doctor/update/:id" component={UpdateMeditation} />
          <Route path="/doctor/getBlog" component={DoctorGetBlog} />
          <Route path="/doctor/editBlog/:id" component={DoctorEditBlog} />
          <Route path="/doctor/upload" component={UploadMeditation} />
          <Route path="/doctor/meditation" component={Meditation} />
          <Route path="/trainer/editblog/:id" component={EditBlog} />
          <Route path="/user/blog" component={Blogs} />
          <Route path="/user/blogdetail/:id" component={BlogDetails} />
          <Route
            path="/user/guided/workout/detail/:id"
            component={GuidedWorkoutDetail}
          />
          <Route
            path="/trainer/guided/schedule/:id"
            component={GuidedWOrkoutSchedule}
          />
          <Route
            path="/trainer/guidedworkout/list/:id"
            component={GuidedWorkoutList}
          />
          <Route
            path="/trainer/guidedworkout/view/:id"
            component={GuidedWorkoutInfo}
          />
          <Route
            path="/trainer/guidedworkout/editschedule/:id/:index"
            component={EditGuidedWorkoutSchedule}
          />
          <Route
            path="/trainer/guidedworkout/editworkout/list/:id/:index"
            component={EditGuidedWorkoutList}
          />
          <Route
            path="/trainer/edit/guidedworkout/:id"
            component={EditGuidedWorkouts}
          />

          <Redirect to="/pagenotfound" />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
