using FirstWeb.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstWeb.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Calc()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Calc (CalcModel model)
        {
            return View();
        }

    }
}
