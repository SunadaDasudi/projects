using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MVCWebApplication.Data;
using MVCWebApplication.Data.Services;
using MVCWebApplication.Models;

namespace MVCWebApplication.Controllers;

public class ProductsController(SqlDbContext DbContext, IProductService productService) : Controller
{
    public async Task<IActionResult> Index()
    {
        var products = await productService.GetProductsAsync();
        return View(products);
    }

    public async Task<IActionResult> Overview(int id)
    {
        var product = await productService.GetProductAsync(id);
        if (product == null)
        {
            return NotFound();
        }
        return View(product);
    }

    public IActionResult Create()
    {
        return View();
    }

    [HttpPost]
    public async Task<IActionResult> Create([Bind("Id", "Name", "Description", "Price", "Category")] Product product)
    {
        if (ModelState.IsValid)
        {
            await productService.AddProductAsync(product);
            return RedirectToAction(nameof(Index));
        }
        return View(product);
    }

    public async Task<IActionResult> Delete(int id)
    {
        var product = await productService.GetProductAsync(id);
        if (product == null)
        {
            return NotFound();
        }
        
        await productService.DeleteProductAsync(product);
        return RedirectToAction(nameof(Index));
    }

    public async Task<IActionResult> Edit(int id)
    {
        var product = await productService.GetProductAsync(id);
        if (product == null)
        {
            return NotFound();
        }
        return View(product);
    }

    [HttpPost]
    public async Task<IActionResult> Update(int id, [Bind("Id", "Name", "Description", "Price", "Category")] Product product)
    {
        if (!ModelState.IsValid)
        {
            return View(product);
        }       

        try
        {
            await productService.UpdateProductAsync(product);
        }
        catch (DbUpdateConcurrencyException)
        {
            ModelState.AddModelError("", "The product was modified by another user.");
            return View(product);
        }

        return RedirectToAction(nameof(Index));

    }
}
