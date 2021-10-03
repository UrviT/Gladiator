using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations;

namespace ProjectAPI3.Model
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(20), Required]
        public string Pname { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int Cost { get; set; }
        [MaxLength(15), Required]
        public string ImgPath { get; set; }
    }
}
