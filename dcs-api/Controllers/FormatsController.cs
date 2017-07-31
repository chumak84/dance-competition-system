using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace dcs_api.Controllers
{
    [Route("api/[controller]")]
    public class FormatsController : Controller
    {
        private static readonly Dictionary<int, string> _formats = new Dictionary<int, string>
        {
            [1] = "Big Group",
            [2] = "Small Group",
            [3] = "Individual",
            [4] = "Solo"
        };

        [HttpGet]
        public IDictionary<int, string> Get()
        {
            return _formats;
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return _formats[id];
        }

        [HttpPost]
        public void Post([FromBody]string value)
        {
            _formats.Add(_formats.Keys.Max() + 1, value);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
            _formats[id] = value;
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _formats.Remove(id);
        }
    }
}
