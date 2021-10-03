using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectAPI3.Model
{
    public class CardDetail
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("User")]
        public int? UserId { get; set; }
        public string Ctype { get; set; }
        public int CreditLeft { get; set; }
        public int ToBePaid { get; set; }

        //public virtual User User { get; set; }

    }
}
