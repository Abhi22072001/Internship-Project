using Immigratiom.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Immigratiom.BAL.Contracts
{
    public interface IOfficersManager
    {
        Task<IEnumerable<Officers>> GetAllOfficersAsync();
        Task<IEnumerable<Officers>> GetOfficersByIdAsync(int id);
        Task UpdateExisting(Officers officers);
        Task<bool> AddAsync(Officers officers);
        Task Remove(int Officers_id);
    }
}