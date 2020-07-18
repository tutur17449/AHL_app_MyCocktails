export default function seo(data = null, ingredients = null) {
    if (data !== null) {
        return {
            "@context": "http://schema.org",
            "@type": "Recipe", 
            name: data.strDrink,
            recipeCategory: data.strCategory,
            image: data.strDrinkThumb,
            datePublished: data.dateModified,
            prepTime: "PT0M",
            cookTime: "PT0M",
            totalTime: "PT0M",
            recipeYield: "1 personne",
            recipeIngredient: ingredients.ingredients,
            recipeInstructions: data.strInstructions,
            author: "The Cocktail Db",
            description: data.strDrink,
            keywords: data.strDrink,
        }
    } else {
        return {
            "@context": "http://schema.org",
            "@type": "WebSite",
            url: "https://ahl-app-my-cocktails.vercel.app/",
            description: "Want a cocktail? You are in the right place! Discover a rich range of cocktail recipes to make yourself. Find a cocktail based on ingredients or name!",
            headline: "Discover a rich range of cocktail recipes to make yourself.",
            inLanguage: "en-GB",
            mainEntityOfPage: "https://ahl-app-my-cocktails.vercel.app/",
            name: "MyCocktails",
            "publisher": {
                "@type": "Person",
                name: "Arthur Hamel",
                email: "arthur.hamel1@orange.fr",
                url: "https://github.com/tutur17449"
            }
        }
    }
}