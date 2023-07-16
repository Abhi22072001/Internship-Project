using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Immigratiom.DAL.DataAccess.Interface
{
    public interface IRepo<T> where T : class
    {
        void AddAsync(T entity);
        void Remove(T entity);
        void RemoveRange(IEnumerable<T> entities);
        void UpdateExisting(T entity);
        Task<IEnumerable<T>> GetAllListAsync();

        Task<T> GetFirstorDefaultAsync(Expression<Func<T, bool>> filter);
        Task<IEnumerable<T>> GetAllListAsync(Expression<Func<T, bool>> filter);


    }
}