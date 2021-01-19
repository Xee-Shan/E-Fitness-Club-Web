import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import React, { Fragment } from "react";
import UserAuth from "../../../auth/UserAuth";
import NavBar from "../../Navbar/Navbar";

const Normal = () => {
  return (
    <UserAuth>
      <Fragment>
        <NavBar />
        <br />
        <h1 style={{ textAlign: "center" }}>Diet Plan For Normal</h1>
        <br />
        <div className="container">
          <MDBTable striped>
            <MDBTableHead color="primary-color" textWhite>
              <tr>
                <th></th>
                <th>
                  <h3>Sunday</h3>
                </th>
                <th></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>1</td>
                <td>Breakfast (8:00-8:30AM)</td>
                <td>1 serving Avocado Egg Toast</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mid-Meal (11:00-11:30AM)</td>
                <td>1 cup blueberries</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Lunch (2:00-2:30PM)</td>
                <td>1 serving Loaded Black Bean Nacho Soup</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Evening (4:00-4:30PM)</td>
                <td>1 Medium Orange</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dinner (8:00-8:30PM)</td>
                <td>
                  1 serving Seared Salmon with Green Peppercorn Sauce <br /> 1
                  cup steamed green beans <br /> 1 baked medium red potato,
                  drizzled with 1 tsp. olive oil, 1 Tbsp. nonfat plain <br />{" "}
                  Greek yogurt and a pinch of pepper.
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>

        <div className="container">
          <MDBTable striped>
            <MDBTableHead color="primary-color" textWhite>
              <tr>
                <th></th>
                <th>
                  <h3>Monday</h3>
                </th>
                <th></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>1</td>
                <td>Breakfast (8:00-8:30AM)</td>
                <td>
                  1 cup bran cereal <br /> 1 cup skim milk <br />
                  1/4 cup blueberries
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mid-Meal (11:00-11:30AM)</td>
                <td>1 medium apple</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Lunch (2:00-2:30PM)</td>
                <td>1 serving Spinach & Strawberry Meal-Prep Salad</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Evening (4:00-4:30PM)</td>
                <td>1 medium orange</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dinner (8:00-8:30PM)</td>
                <td>1 serving Charred Shrimp & Pesto Buddha Bowls</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>

        <div className="container">
          <MDBTable striped>
            <MDBTableHead color="primary-color" textWhite>
              <tr>
                <th></th>
                <th>
                  <h3>Tueday</h3>
                </th>
                <th></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>1</td>
                <td>Breakfast (8:00-8:30AM)</td>
                <td>
                  1 cup nonfat plain Greek yogurt <br />
                  3/4 cup blueberries <br />1 1/2 Tbsp. slivered almonds <br />2
                  tsp. honey
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mid-Meal (11:00-11:30AM)</td>
                <td>1 cup raspberries</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Lunch (2:00-2:30PM)</td>
                <td>1 serving Spinach & Strawberry Meal-Prep Salad</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Evening (4:00-4:30PM)</td>
                <td>1 medium orange</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dinner (8:00-8:30PM)</td>
                <td>
                  1 serving Curried Sweet Potato & Peanut Soup <br />1 slice
                  whole-wheat bread, toasted
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>

        <div className="container">
          <MDBTable striped>
            <MDBTableHead color="primary-color" textWhite>
              <tr>
                <th></th>
                <th>
                  <h3>Wednesday</h3>
                </th>
                <th></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>1</td>
                <td>Breakfast (8:00-8:30AM)</td>
                <td>
                  3/4 cup bran cereal <br />
                  3/4 cup skim milk <br />
                  1/2 cup blueberries
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mid-Meal (11:00-11:30AM)</td>
                <td>1 medium apple</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Lunch (2:00-2:30PM)</td>
                <td>1 serving Spinach & Strawberry Meal-Prep Salad</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Evening (4:00-4:30PM)</td>
                <td>1 medium orange</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dinner (8:00-8:30PM)</td>
                <td>
                  1 serving Cod with Tomato Cream Sauce <br />
                  3/4 cup cooked brown rice <br />1 cup steamed broccoli
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>

        <div className="container">
          <MDBTable striped>
            <MDBTableHead color="primary-color" textWhite>
              <tr>
                <th></th>
                <th>
                  <h3>Thursday</h3>
                </th>
                <th></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>1</td>
                <td>Breakfast (8:00-8:30AM)</td>
                <td>
                  1/2 cup rolled oats, cooked in 1 cup milk <br />1 cup
                  raspberries <br />
                  Cook oats and top with raspberries and a pinch of cinnamon.
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mid-Meal (11:00-11:30AM)</td>
                <td>
                  1 medium bell pepper, sliced <br />3 Tbsp. hummus
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Lunch (2:00-2:30PM)</td>
                <td>1 serving Spinach & Strawberry Meal-Prep Salad</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Evening (4:00-4:30PM)</td>
                <td>1 cup blueberries</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dinner (8:00-8:30PM)</td>
                <td>1 1/4 cups Chicken Cauliflower Fried "Rice"</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>

        <div className="container">
          <MDBTable striped>
            <MDBTableHead color="primary-color" textWhite>
              <tr>
                <th></th>
                <th>
                  <h3>Friday</h3>
                </th>
                <th></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>1</td>
                <td>Breakfast (8:00-8:30AM)</td>
                <td>
                  1 cup bran cereal <br />1 cup skim milk <br />1 cup
                  blueberries
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mid-Meal (11:00-11:30AM)</td>
                <td>1 medium orange</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Lunch (2:00-2:30PM)</td>
                <td>1 serving Tuna, White Bean & Dill Salad</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Evening (4:00-4:30PM)</td>
                <td>1 cup raspberries</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dinner (8:00-8:30PM)</td>
                <td>1 serving Toaster-Oven Tostada</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>

        <div className="container">
          <MDBTable striped>
            <MDBTableHead color="primary-color" textWhite>
              <tr>
                <th></th>
                <th>
                  <h3>Saturday</h3>
                </th>
                <th></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>1</td>
                <td>Breakfast (8:00-8:30AM)</td>
                <td>
                  1 serving Avocado Egg Toast <br /> 1 cup blueberries
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mid-Meal (11:00-11:30AM)</td>
                <td>1 cup raspberries</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Lunch (2:00-2:30PM)</td>
                <td>
                  1 serving Tuna, White Bean & Dill Salad <br /> 1 slice
                  whole-wheat bread, toasted
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Evening (4:00-4:30PM)</td>
                <td>1 medium orange</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dinner (8:00-8:30PM)</td>
                <td>1 serving Skillet Lemon Chicken & Potatoes with Kale</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </Fragment>
    </UserAuth>
  );
};

export default Normal;
