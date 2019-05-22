using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebShop.Models;

namespace WebShop.DataBase
{
    public class WebShopDbContext : IdentityDbContext
    {
        public WebShopDbContext(DbContextOptions<WebShopDbContext> options) : base(options) { }

        public DbSet<Produkt> Produkts { get; set; }
    }
}
