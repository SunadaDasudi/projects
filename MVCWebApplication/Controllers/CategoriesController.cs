using Microsoft.AspNetCore.Mvc;
using MVCWebApplication.Data.Services;

namespace MVCWebApplication.Controllers;

public class CategoriesController(ICategoryService categoryService) : Controller
{
    public async Task<IActionResult> Index()
    {
        var categories = await categoryService.GetCategoriesAsync();
        return View(categories);
    }
}
