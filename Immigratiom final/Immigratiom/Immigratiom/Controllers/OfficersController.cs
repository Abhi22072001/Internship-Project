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
    public class OfficersController : ControllerBase
    {
        private readonly IOfficersManager _om;
        public OfficersController(IOfficersManager om)
        {
            _om = om;
        }

        //getting all records in Officers
        [HttpGet]
        public async Task<IEnumerable<Officers>> GetOfficersAsync()
        {
            return await _om.GetAllOfficersAsync();
        }

        //geting Officers_role using id
        
        [HttpGet("{id}")]
        public async Task<ActionResult<string>> GetOfficersById(int id)
        {
            var officers = await _om.GetOfficersByIdAsync(id);
            if (officers != null)
            {
                return Ok(officers.FirstOrDefault());
            }
            return NotFound();
        }
        [HttpPost]
        public async Task<IActionResult> AddAsync(Officers officers)
        {
            if (await _om.AddAsync(officers))
            {
                return Ok();
            }
            else
            {
                return BadRequest("Check the Input Values");
            }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateExisting(int id, Officers officers)
        {
            if (id != officers.OfficerID)
            {
                return BadRequest();
            }
            await _om.UpdateExisting(officers);
            return Ok();



        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Remove(int id)
        {
            await _om.Remove(id);
            return Ok();
        }



    }
}
