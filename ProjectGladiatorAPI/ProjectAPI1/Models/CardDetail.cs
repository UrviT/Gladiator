using System;
using System.Collections.Generic;

#nullable disable

namespace ProjectAPI1.Models
{
    public partial class CardDetail
    {
        public CardDetail()
        {
            Users = new HashSet<User>();
        }

        public decimal Id { get; set; }
        public string Ctype { get; set; }
        public int CreditLeft { get; set; }
        public int ToBePaid { get; set; }

        public virtual ICollection<User> Users { get; set; }
    }
}
