using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Immigratiom.DAL.Models
{
   public class Admin
    {
        [Key]
        public int AdminID { get; set; }
        [Required]
        public string AdminName { get; set; }
       
        [Required]
        public int ApplicantsID { get; set; }
        [ForeignKey("ApplicantsID")]
        public virtual Applicants applicants { get; set; }
        
        [Required]
        public int ResponseID { get; set; }
        [ForeignKey("ResponseID")]
        public virtual Response response { get; set; }

        [Required]
        public int OfficerID { get; set; }
        [ForeignKey("OfficerID")]
        public virtual Officers officers { get; set; }

    }
}
