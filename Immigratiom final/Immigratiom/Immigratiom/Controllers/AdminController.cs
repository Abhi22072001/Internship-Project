using Immigratiom.BAL.Contracts;
using Immigratiom.DAL.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Immigratiom.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminManager _adm;
        public AdminController(IAdminManager adm)
        {
            _adm = adm;
        }

        //getting all records in Admin
        [HttpGet]
        public async Task<IEnumerable<Admin>> GetAdminAsync()
        {
            return await _adm.GetAllAdminAsync();
        }

        //geting Admin_role using id
        [HttpGet("{id}")]
        public async Task<ActionResult<string>> GetAdminById(int id)
        {
            var admin = await _adm.GetAdminByIdAsync(id);
            if (admin != null)
            {
                return Ok(admin.FirstOrDefault());
            }
            return NotFound();
        }
        [HttpPost]
        public async Task<IActionResult> AddAsync(Admin admin)
        {
            if (await _adm.AddAsync(admin))
            {
                return Ok();
            }
            else
            {
                return BadRequest("Check the Input Values");
            }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateExisting(int id, Admin admin)
        {
            if (id != admin.AdminID)
            {
                return BadRequest();
            }
            await _adm.UpdateExisting(admin);
            return Ok();

        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Remove(int id)
        {
            await _adm.Remove(id);
            return Ok();
        }
    }
}
