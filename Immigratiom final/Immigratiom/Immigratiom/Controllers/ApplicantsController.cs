using Immigratiom.BAL.Services;
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
    public class ApplicantsController : ControllerBase
    {
        private readonly IApplicantsManager _am;
        public ApplicantsController(IApplicantsManager am)
        {
            _am = am;
        }

        //getting all records in Applicants
        [HttpGet]
        public async Task<IEnumerable<Applicants>> GetApplicantsAsync()
        {
            return await _am.GetAllApplicantsAsync();
        }


        //geting applicants_info using id
        [HttpGet("{id}")]
        public async Task<ActionResult<string>> GetApplicantsById(int id)
        {
            var applicants = await _am.GetApplicantsByIdAsync(id);
            if (applicants != null)
            {
                return Ok(applicants.FirstOrDefault());
            }
            return NotFound();
        }
        [HttpPost]
        public async Task<IActionResult> AddAsync(Applicants applicants)
        {
            if (await _am.AddAsync(applicants)) 
            {
                return Ok();
            } 
            else
            {
                return BadRequest("Check the Input Values");
            }
        }
        
[HttpPut("{id}")]
        public async Task<IActionResult> UpdateExisting(int id, Applicants applicants)
        {
            if (id != applicants.ApplicantsID)
            {
                return BadRequest();
            }
            await _am.UpdateExisting(applicants);
            return Ok();


        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Remove(int id)
        {
            await _am.Remove(id);
            return Ok();
        }





    }
}

