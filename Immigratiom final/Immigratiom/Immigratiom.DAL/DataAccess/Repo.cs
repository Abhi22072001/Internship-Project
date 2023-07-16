using Immigratiom.DAL.DataAccess.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Linq.Expressions;
using Immigratiom.DAL.Data;
using Microsoft.EntityFrameworkCore;

namespace Immigratiom.DAL.DataAccess
{
    public class Repo<T> : IRepo<T> where T : class
    {
        private readonly ApplicationDbContext _db;
        internal DbSet<T> DbSet;
        public Repo(ApplicationDbContext db)
        {
            _db = db;
            DbSet = db.Set<T>();
        }
        public void AddAsync(T entity)
        {
            DbSet.AddAsync(entity);
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            IQueryable<T> query = DbSet;
            return await query.ToListAsync();
        }

        public async Task<IEnumerable<T>> GetAllListAsync(Expression<Func<T, bool>> filter)
        {
            IQueryable<T> query = DbSet;
            query = query.Where(filter);
            return await query.ToListAsync();
        }

        public async Task<IEnumerable<T>> GetAllListAsync()
        {
            IQueryable<T> query = DbSet;
            return await query.ToListAsync();
        }

        public async Task<T> GetFirstorDefaultAsync(Expression<Func<T, bool>> filter)
        {
            IQueryable<T> query = DbSet;
            query = query.Where(filter);
            return await query.FirstOrDefaultAsync();
        }

        public void Remove(T entity)
        {
            DbSet.Remove(entity);
        }

        public void RemoveRange(IEnumerable<T> entities)
        {
            DbSet.RemoveRange(entities);
        }

        public void UpdateExisting(T entity)
        {
            DbSet.Update(entity);
        }
    }
}
