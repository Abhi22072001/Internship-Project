using Immigratiom.DAL.DataAccess.Interface;
using Immigratiom.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace Immigratiom.BAL.Services
{
    public class ApplicantsManager : IApplicantsManager
    {
        private readonly IDataAccess _da;
        public ApplicantsManager(IDataAccess da)
        {
            _da = da;
        }
        public async Task<IEnumerable<Applicants>> GetAllApplicantsAsync()
        {
            return await _da.applicants.GetAllApplicants();
        }

        public async Task<IEnumerable<Applicants>> GetApplicantsByIdAsync(int id)
        {
            var applicants = await _da.applicants.getApplicantsById(id);
            return applicants != null ? new List<Applicants> { applicants } : Enumerable.Empty<Applicants>();
        }
        public async Task <bool> AddAsync(Applicants applicants)
        {
            try
            {
                if(applicants != null)
                {
                    Purpose obj = await _da.purpose.GetFirstorDefaultAsync(c => c.PurposeID == applicants.PurposeID);
                    Applicants tempApp = new Applicants
                    {
                        ApplicantsID = applicants.ApplicantsID,
                        FullName = applicants.FullName,
                        PassportNumber = applicants.PassportNumber,
                        PassportExpiryDate = applicants.PassportExpiryDate,
                        Gender = applicants.Gender,
                        Nation = applicants.Nation,
                        VisitingCountry = applicants.VisitingCountry,
                        HasCriminalRecord = applicants.HasCriminalRecord,
                        FIRNumber = applicants.FIRNumber,
                        PurposeName = applicants.PurposeName,
                        PurposeID = applicants.PurposeID,
                        purpose = obj
                       
                    };
                    _da.applicants.AddAsync(tempApp);
                    _da.SaveAsync();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch
            {
                return false;
            }
        }
        public async Task UpdateExisting(Applicants applicants)
        {
            _da.applicants.UpdateExisting(applicants);
            await _da.SaveAsync();

        }

        public async Task Remove(int applicants_id)
        {
            var applicants = await _da.applicants.GetFirstorDefaultAsync(t => t.ApplicantsID == applicants_id);
            if (applicants != null)
            {
                _da.applicants.Remove(applicants);
                _da.Save();
            }
        }


    }
}