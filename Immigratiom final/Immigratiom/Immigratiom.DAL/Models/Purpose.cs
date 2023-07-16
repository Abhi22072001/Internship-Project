using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Immigratiom.DAL.Models
{
   public class Purpose
    {
        [Key]
        public int PurposeID { get; set; }

        [Required]
        public string Reason { get; set; }
        [Required]
        public decimal VisaCharges { get; set; }
        [Required]
        public string PaymentMode { get; set; }
        [Required]
        public string PaymentStatus { get; set; }
    }
}
