export default function MealItem({ meal }) {
    return (
        <li className="meal-item">
            <article>
                {/* when you are fetching image from the backend, try to give the end point using template literals */}
                {/* <img src={meal.image}></img> */}
                <img src={`http://localhost:3000/${meal.image}`}></img>
                <div>
                    <h3> {meal.name}</h3>
                    <p className="meal-item-price"> {meal.price} </p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <button>Add to cart</button>
                </p>
            </article>
        </li>
    )
}