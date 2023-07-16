using Immigratiom.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Immigratiom.BAL.Contracts
{
    public interface IPurposeManager
    {
        Task<IEnumerable<Purpose>> GetAllPurposeAsync();
        Task<IEnumerable<Purpose>> GetPurposeByIdAsync(int id);
        Task AddAsync(Purpose purpose);
        Task Remove(int id);    
    }
}