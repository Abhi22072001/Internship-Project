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
    public class ResponseManager : IResponseManager
    {
        private readonly IDataAccess _da;
        public ResponseManager(IDataAccess da)
        {
            _da = da;
        }
        public async Task<IEnumerable<Response>> GetAllResponseAsync()
        {
            return await _da.response.GetAllListAsync();
        }
        public async Task<IEnumerable<Response>> GetResponseByIdAsync(int id)
        {
            var response = await _da.response.GetFirstorDefaultAsync(t => t.ResponseID == id);
            return response != null ? new List<Response> { response } : Enumerable.Empty<Response>();
        }

        public async Task AddResponseAsync(Response response)
        {
            _da.response.AddAsync(response);
            await _da.SaveAsync();
        }
        public async Task UpdateExisting(Response response)
        {
            _da.response.UpdateExisting(response);
            await _da.SaveAsync();
        }

        public async Task Remove(int response_id)
        {
            var response = await _da.response.GetFirstorDefaultAsync(t => t.ResponseID == response_id);
            if (response != null)
            {
                _da.response.Remove(response);
                _da.Save();
            }
        }

    }
}