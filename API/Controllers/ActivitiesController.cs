using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly ILogger<ActivitiesController> _logger;
        private readonly DataContext _context;

        public ActivitiesController(ILogger<ActivitiesController> logger, DataContext context)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet] //api/activities
        public async Task<ActionResult<List<Activity>>> Get()
        {
            return await _context.Activities.ToListAsync();
        }
        [HttpGet("{id}")]//api/activites/32
        public async Task<ActionResult<Activity>> Get(Guid id)
        {
            return await _context.Activities.FindAsync(id);
        }
    }
}