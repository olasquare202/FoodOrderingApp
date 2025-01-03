using Microsoft.AspNetCore.Mvc;

namespace FoodOrderingApp.Controllers
{
    public class RecipeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
