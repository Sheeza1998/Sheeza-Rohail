using Microsoft.AspNetCore.Mvc;
using Sheeza_Rohail.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sheeza_Rohail.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("index2")]
        public IActionResult Index2()
        {
            return View();
        }

        [HttpPost("index2")]
        public IActionResult Index2(index2Model model)
        {
            return View();
        }
    }
}
