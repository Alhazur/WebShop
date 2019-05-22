using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebShop.DataBase;

namespace WebShop.Models
{
    public class ProduktService : IProduktService
    {
        private  WebShopDbContext _webShopDbContext;

        public ProduktService(WebShopDbContext webShopDbContext)
        {
            _webShopDbContext = webShopDbContext;
        }

        public List<Produkt> AllProdukts()
        {
            return _webShopDbContext.Produkts.ToList();
        }

        public Produkt CreateProdukt(int price, string name)
        {
            Produkt produkt = new Produkt()
            {
                Price = price,
                Name = name,
            };

            _webShopDbContext.Produkts.Add(produkt);
            _webShopDbContext.SaveChanges();

            return produkt;

        }

        public Produkt FindProdukt(int id)
        {
            return _webShopDbContext.Produkts.SingleOrDefault(i => i.Id == id);
        }

        public bool UpdateProdukt(Produkt produkt)
        {
            bool stay = false;

            Produkt original = _webShopDbContext.Produkts.SingleOrDefault(p => p.Id == produkt.Id);

            if (original != null)
            {
                original.Price = produkt.Price;
                original.Name = produkt.Name;

                _webShopDbContext.SaveChanges();
                stay = true;
            }

            return stay;
        }
    }
}
