using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations;

namespace ProjectAPI3.Model
{
    public class User
    {
        //[Key]
        //public int Id { get; set; }
        //[MaxLength(15),Required]
        //public string FirstName { get; set; }
        //[MaxLength(15), Required]
        //public string LastName { get; set; }
        //[MaxLength(30), Required]
        //public string EmailId { get; set; }
        //[MaxLength(10), MinLength(8), Required]
        //public string Password { get; set; }
        //[MaxLength(10), Required]
        //public decimal? PhoneNumber { get; set; }
        //public string Address { get; set; }
        //[MaxLength(15), Required]
        //public string BankName { get; set; }
        //[MaxLength(15), Required]
        //public string AccountNumber { get; set; }
        //[Required]
        //public string IfscCode { get; set; }
        //public int ActivationStatus { get; set; }

        [Key]
        public int Id { get; set; }
        [MaxLength(15)]
        public string FirstName { get; set; }
        [MaxLength(15)]
        public string LastName { get; set; }
        [MaxLength(30)]
        public string EmailId { get; set; }
        [MaxLength(10), MinLength(8)]
        public string Password { get; set; }
        [MaxLength(10)]
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        [MaxLength(15)]
        public string BankName { get; set; }
        [MaxLength(15)]
        public string AccountNumber { get; set; }
        public string IfscCode { get; set; }
        public int ActivationStatus { get; set; }
    }
}
