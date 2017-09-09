using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dcs_api.Models;
using Microsoft.AspNetCore.Mvc;

namespace dcs_api.Controllers
{
    [Route("api/[controller]")]
    public class FormatsController : Controller
    {
        private static readonly List<Format> _formats = new List<Format>();

        static FormatsController()
        {
            _formats.Add(new Format() { Id = 1, Name = "Big Group" });
            _formats.Add(new Format() { Id = 2, Name = "Small Group" });
            _formats.Add(new Format() { Id = 3, Name = "Individual" });
            _formats.Add(new Format() { Id = 4, Name = "Solo" });
        }

        [HttpGet]
        public List<Format> Get()
        {
            return _formats;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Format value)
        {
            if (value == null)
                return BadRequest();
            if (value.Id <= 0)
            {
                var newFormat = new Format() { Id = _formats.Max(n => n.Id) + 1, Name = value.Name };
                _formats.Add(newFormat);
                return Ok(newFormat);
            }
            else
            {
                Format format = _formats.Single(n => n.Id == value.Id);
                format.Name = value.Name;
                return Ok(format);
            }
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _formats.RemoveAll(n => n.Id == id);
        }
    }
}
