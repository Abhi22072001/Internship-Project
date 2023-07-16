using Immigratiom.BAL.Contracts;
using Immigratiom.DAL.DataAccess.Interface;
using Immigratiom.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Immigratiom.BAL.Services
{
    public class OfficersManager : IOfficersManager
    {
        private readonly IDataAccess _da;
        public OfficersManager(IDataAccess da)
        {
            _da = da;
        }
        public async Task<IEnumerable<Officers>> GetAllOfficersAsync()
        {
            return await _da.officers.GetAllOfficers();
        }
        public async Task<IEnumerable<Officers>> GetOfficersByIdAsync(int id)
        {
            var officers = await _da.officers.GetByIdAsync(id);
            return officers;
        }
        public async Task<bool> AddAsync(Officers officers)
        {
            try
            {
                if (officers != null)
                {
                    Applicants obj = await _da.applicants.GetFirstorDefaultAsync(c => c.ApplicantsID == officers.ApplicantsID);
                    Response objj = await _da.response.GetFirstorDefaultAsync(c => c.ResponseID == officers.ResponseID);
                    Officers tempOff = new Officers
                    {
                        OfficerID = officers.OfficerID,
                        OfficerName = officers.OfficerName,
                        Region = officers.Region,
                        ApplicantsID = officers.ApplicantsID,
                        ResponseID = officers.ResponseID,
                        applicants = obj,
                        response  = objj
                    };
                    _da.officers.AddAsync(tempOff);
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
        public async Task UpdateExisting(Officers officers)
        {
            _da.officers.UpdateExisting(officers);
            await _da.SaveAsync();

        }

        public async Task Remove(int OfficersID)
        {
            var officers = await _da.officers.GetFirstorDefaultAsync(t => t.OfficerID == OfficersID);
            if (officers != null)
            {
                _da.officers.Remove(officers);
                _da.Save();
            }
        }
    }
}