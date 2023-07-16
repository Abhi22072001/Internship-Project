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
    public class ResponseController : ControllerBase
    {
        private readonly IResponseManager _rm;
        public ResponseController(IResponseManager rm)
        {
            _rm = rm;
        }

        //getting all records in Response
        [HttpGet]
        public async Task<IEnumerable<Response>> GetResponseAsync()
        {
            return await _rm.GetAllResponseAsync();
        }


        //geting Response_info using id
        [HttpGet("{id}")]
        public async Task<ActionResult<string>> GetResponseById(int id)
        {
            var response = await _rm.GetResponseByIdAsync(id);
            if (response != null)
            {
                return Ok(response.FirstOrDefault());
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> AddAsync(Response response)
        {
            await _rm.AddResponseAsync(response);
            
                return Ok();  
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateExisting(int id, Response response)
        {
            if (id != response.ResponseID)
            {
                return BadRequest();
            }
            await _rm.UpdateExisting(response);
            return Ok();


        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Remove(int id)
        {
            await _rm.Remove(id);
            return Ok();
        }
    }
}
