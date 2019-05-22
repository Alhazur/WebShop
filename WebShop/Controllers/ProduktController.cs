using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WebShop.Models;

namespace WebShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class ProduktController : Controller
    {
        private readonly IProduktService _produktService;

        public ProduktController(IProduktService produktService)
        {
            _produktService = produktService;
        }

        [HttpGet]
        public IEnumerable<Produkt> get()
        {
            var produkts = _produktService.AllProdukts();
            return produkts;
        }

        [HttpPost]
        public JsonResult Create(Produkt produkt)
        {
            if (ModelState.IsValid)
            {
                produkt = _produktService.CreateProdukt(produkt.Price, produkt.Name);
                return Json(produkt);

            }
            return Json("");
        }

        [HttpPut]
        public JsonResult Edit(Produkt produkt)
        {
            if (ModelState.IsValid)
            {
                _produktService.UpdateProdukt(produkt);
                return Json(produkt);
            }

            return Json("Not Found");
        }
    }
}