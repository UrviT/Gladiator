using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectAPI3.Model
{
    public class TransactionHistory
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("User")]
        public int? UserId { get; set; }
        [ForeignKey("Product")]
        public int? ProductId { get; set; }
        public int Tenure { get; set; }
        public int AmountPaid { get; set; }
        public DateTime? NextDate { get; set; }
        public DateTime Timestamp { get; set; }

    }
}
