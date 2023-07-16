using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Immigratiom.DAL.Models
{
    public class Applicants
    {
        [Key]
        public int ApplicantsID { get; set; }
        [Required]
        public string FullName { get; set; }
        [Required]
        public string PassportNumber { get; set; }
        [Required]
        public DateTime PassportExpiryDate { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public string Nation { get; set; }
        [Required]
        public string VisitingCountry { get; set; }
        [Required]
        public bool HasCriminalRecord { get; set; }
        [Required]
        public int FIRNumber { get; set; }
        [Required]
        public string PurposeName { get; set; }
        [Required]
        public int PurposeID { get; set; }
        [ForeignKey("PurposeID")]
        public virtual Purpose purpose { get; set; }

    }
}
