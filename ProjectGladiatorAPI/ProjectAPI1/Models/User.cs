using System;
using System.Collections.Generic;

#nullable disable

namespace ProjectAPI1.Models
{
    public partial class User
    {
        public User()
        {
            TransactionHistories = new HashSet<TransactionHistory>();
        }

        public int Id { get; set; }
        public string EmailId { get; set; }
        public string Password { get; set; }
        public decimal? CardId { get; set; }
        public decimal? PhoneNumber { get; set; }
        public string Address { get; set; }
        public string BankName { get; set; }
        public string AccountNumber { get; set; }
        public string Ifsccode { get; set; }
        public decimal? ActivationStatus { get; set; }

        public virtual CardDetail Card { get; set; }
        public virtual ICollection<TransactionHistory> TransactionHistories { get; set; }
    }
}
