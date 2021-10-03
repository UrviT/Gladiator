using System;
using System.Collections.Generic;

#nullable disable

namespace ProjectAPI2.Models
{
    public partial class TransactionHistory
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public int? ProductId { get; set; }
        public int Tenure { get; set; }
        public int AmountPaid { get; set; }
        public DateTime? NextDate { get; set; }
        public DateTime Timestamp { get; set; }

        public virtual Product Product { get; set; }
        public virtual User User { get; set; }
    }
}
