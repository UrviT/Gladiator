using System;
using System.Collections.Generic;

#nullable disable

namespace ProjectAPI2.Models
{
    public partial class User
    {
        public User()
        {
            CardDetails = new HashSet<CardDetail>();
            TransactionHistories = new HashSet<TransactionHistory>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailId { get; set; }
        public string Password { get; set; }
        public decimal? PhoneNumber { get; set; }
        public string Address { get; set; }
        public string BankName { get; set; }
        public string AccountNumber { get; set; }
        public string Ifsccode { get; set; }
        public decimal? ActivationStatus { get; set; }

        public virtual ICollection<CardDetail> CardDetails { get; set; }
        public virtual ICollection<TransactionHistory> TransactionHistories { get; set; }
    }
}
