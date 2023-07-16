using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Immigratiom.DAL.Models
{
    public class Response
    {
        [Key]
        public  int ResponseID { get; set; } 
        [Required]

        public string Action { get; set; }

    }
}
