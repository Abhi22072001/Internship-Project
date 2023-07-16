using Immigratiom.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Immigratiom.BAL.Contracts
{
    public interface IAdminManager
    {
        Task<IEnumerable<Admin>> GetAllAdminAsync();
        Task<IEnumerable<Admin>> GetAdminByIdAsync(int id);
        Task UpdateExisting(Admin admin);
        Task<bool> AddAsync(Admin admin);
        Task Remove(int Admin_id);

    }
}
