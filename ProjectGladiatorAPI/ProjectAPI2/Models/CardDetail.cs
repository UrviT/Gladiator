using System;
using System.Collections.Generic;

#nullable disable

namespace ProjectAPI2.Models
{
    public partial class CardDetail
    {
        public decimal Id { get; set; }
        public int? UserId { get; set; }
        public string Ctype { get; set; }
        public int CreditLeft { get; set; }
        public int ToBePaid { get; set; }

        public virtual User User { get; set; }
    }
}
