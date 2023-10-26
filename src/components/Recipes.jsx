import { useState } from "react";

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGountletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 5,
};

console.log(elvenShieldRecipe);
console.log(elvenGountletsRecipe);

function Recipes() {
  const [recipe, setRecipe] = useState({});

  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven Shield Recipe</button>
      <button onClick={() => setRecipe(elvenGountletsRecipe)}>Elven Gountlet Recipe</button>
      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;
