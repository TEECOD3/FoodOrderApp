import React from "react";
import useHttp from "../../Hooks/use-Http";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

function AvailableMeals() {
  const { Error, isLoading, sendrequest } = useHttp();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchedData = (data) => {
      const loadedmeals = [];

      for (const key in data) {
        loadedmeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedmeals);
    };

    sendrequest(
      {
        url: "https://foodorderapp-d2403-default-rtdb.firebaseio.com/meals.json",
      },
      fetchedData
    );
  }, []);

  if (Error) {
    return <p className={classes.error}>{Error}!!!</p>;
  }

  const mealslist = (
    <Card>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <ul>
          {meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              Title={meal.name}
              Description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      )}
    </Card>
  );

  return <section className={classes.meals}>{mealslist}</section>;
}

export default AvailableMeals;
