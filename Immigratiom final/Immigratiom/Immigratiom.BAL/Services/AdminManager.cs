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
    public class AdminManager : IAdminManager
    {
        private readonly IDataAccess _da;
        public AdminManager(IDataAccess da)
        {
            _da = da;
        }
        public async Task<IEnumerable<Admin>> GetAllAdminAsync()
        {
            return await _da.admin.GetAllAdmin();
        }
        public async Task<IEnumerable<Admin>> GetAdminByIdAsync(int id)
        {
            var admin = await _da.admin.GetByIdAsync(id);
            return admin;
        }
        public async Task<bool> AddAsync(Admin admin)
        {
            try
            {
                if (admin != null)
                {
                    Applicants obj = await _da.applicants.GetFirstorDefaultAsync(c => c.ApplicantsID == admin.ApplicantsID);
                    Response objj = await _da.response.GetFirstorDefaultAsync(c => c.ResponseID == admin.ResponseID);
                    Officers objjj = await _da.officers.GetFirstorDefaultAsync(c => c.OfficerID == admin.OfficerID);
                    Admin tempAdm = new Admin
                    {
                        AdminID = admin.AdminID,
                        AdminName = admin.AdminName,
                        ApplicantsID = admin.ApplicantsID,
                        ResponseID = admin.ResponseID,
                        OfficerID = admin.OfficerID,
                        applicants = obj,
                        response = objj,
                        officers = objjj
                        
                        
                    };
                    _da.admin.AddAsync(tempAdm);
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
        public async Task UpdateExisting(Admin admin)
        {
            _da.admin.UpdateExisting(admin);
            await _da.SaveAsync();

        }

        public async Task Remove(int admin_id)
        {
            var admin = await _da.admin.GetFirstorDefaultAsync(t => t.AdminID == admin_id);
            if (admin != null)
            {
                _da.admin.Remove(admin);
                _da.Save();
            }
        }
    }
}
