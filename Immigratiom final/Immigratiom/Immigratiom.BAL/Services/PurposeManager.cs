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
    public class PurposeManager : IPurposeManager
    {
        private readonly IDataAccess _da;
        public PurposeManager(IDataAccess da)
        {
            _da = da;
        }
        public async Task<IEnumerable<Purpose>> GetAllPurposeAsync()
        {
            return await _da.purpose.GetAllPurpose();
        }

        public async Task<IEnumerable<Purpose>> GetPurposeByIdAsync(int id)
        {
            var purpose = await _da.purpose.GetFirstorDefaultAsync(t => t.PurposeID == id);
            return purpose != null ? new List<Purpose> { purpose } : Enumerable.Empty<Purpose>();
        }
        
                
               
        public async Task AddAsync(Purpose purpose)
        {
            _da.purpose.AddAsync(purpose);
            await _da.SaveAsync();
        }

        public async Task Remove(int purpose_id)
        {
            var purpose = await _da.purpose.GetFirstorDefaultAsync(t => t.PurposeID == purpose_id);
            if (purpose != null)
            {
                _da.purpose.Remove(purpose);
                _da.Save();
            }
        }
    }
}
