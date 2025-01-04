using FoodOrderingApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrderingApp.Controllers
{
    public class RecipeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public IActionResult GetRecipeCard([FromBody]List<Recipe> recipes)
        {
            return PartialView("_RecipeCard", recipes);
        }
    }
}
