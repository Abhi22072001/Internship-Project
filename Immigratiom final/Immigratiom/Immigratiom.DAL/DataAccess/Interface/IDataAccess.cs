
using Immigratiom.DAL.DataAccess.Interface;
using Immigratiom.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Immigratiom.DAL.DataAccess.Interface
{
    public interface IDataAccess
    {
        IApplicantsRepo applicants { get; }
        IPurposeRepo purpose { get; }
        IResponseRepo response { get; }
        IOfficersRepo officers { get; }
        IAdminRepo admin { get; }

        Task SaveAsync();
        void Save();
    }
}
public interface IApplicantsRepo : IRepo<Applicants>
{

    public Task<IEnumerable<Applicants>> GetAllApplicants();
    public Task<Applicants> getApplicantsById(int id);

}
public interface IPurposeRepo : IRepo<Purpose>
{
    Task<IEnumerable<Purpose>> GetAllPurpose();
    
}
public interface IResponseRepo : IRepo<Response>
{
  
    Task GetFirstorDefaultAsyn(Func<object, bool> p);
    void UpdateExisting(Response response);

}
public interface IOfficersRepo : IRepo<Officers>
{
    Task<IEnumerable<Officers>> GetAllOfficers();
    Task<IEnumerable<Officers>> GetByIdAsync(int id);
}
public interface IAdminRepo : IRepo<Admin>
{
    Task<IEnumerable<Admin>> GetAllAdmin();
    Task<IEnumerable<Admin>> GetByIdAsync(int id);
}

