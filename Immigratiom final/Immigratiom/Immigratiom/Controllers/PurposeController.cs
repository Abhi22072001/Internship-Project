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
    public class PurposeController : ControllerBase
    {
        private readonly IPurposeManager _pm;
        public PurposeController(IPurposeManager pm)
        {
            _pm = pm;
        }

        //getting all records in Purpose
        [HttpGet]
        public async Task<IEnumerable<Purpose>> GetPurposeAsync()
        {
            return await _pm.GetAllPurposeAsync();
        }


        //geting Purpose_info using id
        [HttpGet("{id}")]
        public async Task<ActionResult<string>> GetPurposeById(int id)
        {
            var purpose = await _pm.GetPurposeByIdAsync(id);
            if (purpose != null)
            {
                return Ok(purpose.FirstOrDefault());
            }
            return NotFound();
        }
        [HttpPost]
        public async Task<IActionResult> AddAsync(Purpose purpose)
        {
            await _pm.AddAsync(purpose);

            return Ok();
            
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Remove(int id)
        {
            await _pm.Remove(id);
            return Ok();
        }
    }
}
