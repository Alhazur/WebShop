using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebShop.Models;

namespace WebShop.Controllers
{
    public class ProduktController : Controller
    {
        ProduktVM ProduktVM = new ProduktVM();

        private readonly IProduktService _produktService;

        public ProduktController(IProduktService produktService)
        {
            _produktService = produktService;
        }

        public IActionResult Index()
        {
            ProduktVM.produkts = _produktService.AllProdukts();

            return View(ProduktVM);
        }

        public IActionResult Produkt(Produkt produkt)
        {
            var item = _produktService.FindProdukt((int)produkt.Id);
            if (item != null)
            {
                return PartialView("_Produkt", item);
            }
            return NotFound();
        }

        [HttpPost]
        public IActionResult CreateProdukt(Produkt produkt)
        {
            if (ModelState.IsValid)
            {
                produkt = _produktService.CreateProdukt(produkt.Price, produkt.Name);
                return PartialView("_Produkt", produkt);

            }
            return BadRequest();
        }

        [HttpGet]
        public IActionResult Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var produkt = _produktService.FindProdukt((int)id);
            if (produkt == null)
            {
                return NotFound();
            }
            return PartialView("_Edit", produkt);
        }

        [HttpPost, ActionName("Edit")]
        public IActionResult EditComplete(Produkt produkt)
        {
            if (ModelState.IsValid)
            {
                _produktService.UpdateProdukt(produkt);
                return PartialView("_Produkt", produkt);
            }

            return PartialView("_Edit", produkt);
        }

    }
}