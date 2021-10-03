using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;
using ProjectAPI3.Model;
using ProjectAPI3.Models;

namespace ProjectAPI3.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<CardDetail> CardDetails { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<TransactionHistory> TransactionHistories { get; set; }
    }
}
