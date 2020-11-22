import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import React, { Fragment } from "react";
import Navbar from "../../Navbar/Navbar";

const OverWeight = () => {
  return (
    <>
      <Navbar />
      <Fragment>
        <br />
        <h1 style={{ textAlign: "center" }}>Diet Plan For Over Weight</h1>
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
                <td>
                  1 serving Baked Banana-Nut Oatmeal Cups <br /> 1 medium apple
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mid-Meal (11:00-11:30AM)</td>
                <td>1 clementine</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Lunch (2:00-2:30PM)</td>
                <td>1 serving Veggie & Hummus Sandwich</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Evening (4:00-4:30PM)</td>
                <td>1 medium banana</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dinner (8:00-8:30PM)</td>
                <td>
                  1 serving Sheet-Pan Chicken Fajita Bowls with 1/2 cup cooked
                  brown rice
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
                  1 serving Baked Banana-Nut Oatmeal Cups <br />1 medium apple
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mid-Meal (11:00-11:30AM)</td>
                <td>
                  1 oz. Cheddar cheese <br />1 hard-boiled egg
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Lunch (2:00-2:30PM)</td>
                <td>1 serving Chipotle-Lime Cauliflower Taco Bowls</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Evening (4:00-4:30PM)</td>
                <td>1 clementine</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dinner (8:00-8:30PM)</td>
                <td>
                  1 serving Zucchini-Chickpea Veggie Burgers with Tahini-Ranch
                  Sauce
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
                  1 serving Baked Banana-Nut Oatmeal Cups <br /> 1 medium apple
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mid-Meal (11:00-11:30AM)</td>
                <td>2 clementines</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Lunch (2:00-2:30PM)</td>
                <td>1 serving Chipotle-Lime Cauliflower Taco Bowls</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Evening (4:00-4:30PM)</td>
                <td>1 medium banana</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dinner (8:00-8:30PM)</td>
                <td>1 serving Easy Salmon Cakes over 2 cups baby spinach</td>
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
                <td>1 serving Muesli with Raspberries</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mid-Meal (11:00-11:30AM)</td>
                <td>1 clementine</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Lunch (2:00-2:30PM)</td>
                <td>1 serving Chipotle-Lime Cauliflower Taco Bowls</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Evening (4:00-4:30PM)</td>
                <td>1/2 cup raspberries</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dinner (8:00-8:30PM)</td>
                <td>
                  1 serving Chicken & Cucumber Lettuce Wraps with Peanut Sauce
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
                <td>1 serving Muesli with Raspberries</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mid-Meal (11:00-11:30AM)</td>
                <td>
                  1/2 oz. Cheddar cheese <br /> 1 hard-boiled egg
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Lunch (2:00-2:30PM)</td>
                <td>1 serving Chipotle-Lime Cauliflower Taco Bowls</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Evening (4:00-4:30PM)</td>
                <td>1 cup blueberries</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dinner (8:00-8:30PM)</td>
                <td>
                  1 serving Mediterranean Ravioli with Artichokes & Olives
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
                  <h3>Friday</h3>
                </th>
                <th></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>1</td>
                <td>Breakfast (8:00-8:30AM)</td>
                <td>1 serving Muesli with Raspberries</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mid-Meal (11:00-11:30AM)</td>
                <td>1 medium apple</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Lunch (2:00-2:30PM)</td>
                <td>1 serving Veggie & Hummus Sandwich</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Evening (4:00-4:30PM)</td>
                <td>1 hard-boiled egg</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dinner (8:00-8:30PM)</td>
                <td>
                  1 serving Curried Sweet Potato & Peanut Soup <br /> 1 (1-in.)
                  slice whole-wheat baguette
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
                  <h3>Saturday</h3>
                </th>
                <th></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>1</td>
                <td>Breakfast (8:00-8:30AM)</td>
                <td>1 serving "Egg in a Hole" Peppers with Avocado Salsa</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mid-Meal (11:00-11:30AM)</td>
                <td>1 serving Curried Sweet Potato & Peanut Soup</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Lunch (2:00-2:30PM)</td>
                <td>
                  1 cup raspberries <br /> 1 oz. dark chocolate
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
                <td>1 serving Spinach & Artichoke Dip Pasta</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </Fragment>
    </>
  );
};

export default OverWeight;
