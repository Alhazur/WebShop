using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebShop.Models
{
    public interface IProduktService
    {
        Produkt CreateProdukt(int price, string name);

        List<Produkt> AllProdukts();

        Produkt FindProdukt(int id);

        bool UpdateProdukt(Produkt produkt);
    }
}
