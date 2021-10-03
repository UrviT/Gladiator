using System;
using System.Collections.Generic;

#nullable disable

namespace ProjectAPI1.Models
{
    public partial class Product
    {
        public Product()
        {
            TransactionHistories = new HashSet<TransactionHistory>();
        }

        public int Id { get; set; }
        public string Pname { get; set; }
        public string Description { get; set; }
        public int Cost { get; set; }
        public string ImgPath { get; set; }

        public virtual ICollection<TransactionHistory> TransactionHistories { get; set; }
    }
}
