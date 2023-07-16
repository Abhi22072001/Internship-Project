using Immigratiom.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Immigratiom.BAL.Contracts
{
    public interface IResponseManager
    {
        Task<IEnumerable<Response>> GetAllResponseAsync();
        Task<IEnumerable<Response>> GetResponseByIdAsync(int id);
        Task UpdateExisting(Response response);
        Task Remove(int Response_id);
        Task  AddResponseAsync(Response response);
    }
}