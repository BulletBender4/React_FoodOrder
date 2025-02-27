import { useState, useEffect } from "react";
import MealItem from "./MealItem";



export default function Meals() {
    // since we are fetching data from backend which is taking some time to return initially we get it undefined thats why we shld use state
    const [loadedMeals, setLoadedMeals] = useState([]);

    useEffect(() => {
        (async function mealsFetch() {

            const response = await fetch("http://localhost:3000/meals");

            if (!response.ok) {

            }

            const meals = await response.json()
            //when you send a request , it sends back the data in JSON format to extract that data and convert it to JS objects and values we must use the JSON method on that response object
            setLoadedMeals(meals);
        })();
        // This meals fetch is a function which is responsible for updating state it creats a infinite loop bcz we are calling mealsFetch
        // func inside a componenet so here it comes play of useEffect hook
    }, [])

    return (
        <>
            {/* <ul id="meals">
                {loadedMeals.map((mealsItem) => (<li key={mealsItem.id}> {mealsItem.name} </li>))}
            </ul> */}

            <ul id="meals">
                {loadedMeals.map((mealsItem) => <MealItem key={mealsItem.id} meal={mealsItem} />)}
            </ul>
        </>
    )
}