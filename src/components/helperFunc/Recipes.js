 function Recipes ({recipe, onHandleAddRecipe, children}){
    return(
        <div className="recipe" key={recipe.id}>
            <span className="recipe_container">
                <p className="recipe_name">{recipe.name}</p>
                <div className="img_container">
                   <img src={recipe.img} alt="recipe" className="recipe_img"/>
                </div>
                {children}
            </span>
        </div>
    )
}

export default Recipes