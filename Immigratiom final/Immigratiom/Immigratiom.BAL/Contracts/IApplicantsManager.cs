using Immigratiom.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace Immigratiom.BAL.Services
{
    public interface IApplicantsManager
    {
        Task<IEnumerable<Applicants>> GetAllApplicantsAsync();
        Task<IEnumerable<Applicants>> GetApplicantsByIdAsync(int id);
        Task UpdateExisting(Applicants applicants);
        Task <bool> AddAsync(Applicants applicants);
        Task Remove(int Applicants_id);


    }
}

