using Immigratiom.DAL.Data;
using Immigratiom.DAL.DataAccess.Interface;
using Immigratiom.DAL.Models;
using Immigratiom.DAL.DataAccess;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;


namespace Immigratiom.DAL.DataAccess
{
    public class DataAccess : IDataAccess
    {
        private readonly ApplicationDbContext _db;
        public DataAccess(ApplicationDbContext db)
        {
            _db = db;
            applicants = new ApplicantsRepo(_db);
            purpose = new PurposeRepo(_db);
            response = new ResponseRepo(_db);
            officers = new OfficersRepo(_db);
            admin = new AdminRepo(_db);

        }



        public IApplicantsRepo applicants { get; private set; }
        public IPurposeRepo purpose { get; private set; }
        public IResponseRepo response { get; private set; }
        public IOfficersRepo officers { get; private set; }
        public IAdminRepo admin { get; private set; }

       


        public void Save()
        {
            _db.SaveChangesAsync();
        }

        public async Task SaveAsync()
        {
            await _db.SaveChangesAsync();
        }
    }



    public class ApplicantsRepo : Repo<Applicants>, IApplicantsRepo
    {
        private readonly ApplicationDbContext _db;
        public ApplicantsRepo(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }
        //implement AllGetApplicants();

        public async Task<IEnumerable<Applicants>> GetAllApplicants()
        {
            return await _db.Applicants
                .Include(c => c.purpose)
                .ToListAsync();
        }

        

        public async Task<Applicants> getApplicantsById(int id)
        {
            IEnumerable<Applicants> b = await GetAllApplicants();
            return b.FirstOrDefault(x => x.ApplicantsID == id);
        }
    }
    public class PurposeRepo : Repo<Purpose>, IPurposeRepo
    {
        private readonly ApplicationDbContext _db;
        public PurposeRepo(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public async Task<IEnumerable<Purpose>> GetAllPurpose()
        {
            return await _db.Purpose.ToListAsync();
        }

    }
    public class ResponseRepo : Repo<Response>, IResponseRepo
    {
        private readonly ApplicationDbContext _db;
        public ResponseRepo(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public async Task<IEnumerable<Response>> GetAllResponse()
        {
            return await _db.Response.ToListAsync();
        }


        Task IResponseRepo.GetFirstorDefaultAsyn(Func<object, bool> p)
        {
            throw new NotImplementedException();
        }
    }



    public class OfficersRepo : Repo<Officers>, IOfficersRepo
    {
        private readonly ApplicationDbContext _db;
        public OfficersRepo(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public async Task<IEnumerable<Officers>> GetAllOfficers()
        {
            return await _db.Officers
                .Include(c => c.applicants.purpose)
                .Include(c => c.response)
                .ToListAsync();
        }

        public async Task<IEnumerable<Officers>> GetByIdAsync( int id)        
            {
                return await _db.Officers
                    .Include(fk1 => fk1.applicants).ThenInclude(x => x.purpose)
                    .Include(fk2 => fk2.response)
                    .Where(officers => officers.OfficerID == id)
                    .ToListAsync();
            }


        
    }



    public class AdminRepo : Repo<Admin>, IAdminRepo
    {
        private readonly ApplicationDbContext _db;
        public AdminRepo(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }
        public async Task<IEnumerable<Admin>> GetAllAdmin()
        {
            return await _db.Admin
                .Include(a => a.applicants.purpose)
                .Include(a => a.response)
                .Include(a => a.officers.applicants.purpose)
                .ToListAsync();
        }


        public async Task<IEnumerable<Admin>>GetByIdAsync(int id)
        {
            return await  _db.Admin
                .Include(fk1 => fk1.applicants).ThenInclude(x => x.purpose)
                .Include(fk2 => fk2.response)
                .Include(fk3 => fk3.officers).ThenInclude(c => c.applicants)
                .Where(admin => admin.AdminID == id)
                .ToListAsync();
        }
    }
}