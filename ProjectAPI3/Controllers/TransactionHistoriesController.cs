using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectAPI3.Model;
using ProjectAPI3.Models;

namespace ProjectAPI3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionHistoriesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TransactionHistoriesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/TransactionHistories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TransactionHistory>>> GetTransactionHistories()
        {
            return await _context.TransactionHistories.ToListAsync();
        }

        // GET: api/TransactionHistories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TransactionHistory>> GetTransactionHistory(int id)
        {
            var transactionHistory = await _context.TransactionHistories.FindAsync(id);

            if (transactionHistory == null)
            {
                return NotFound();
            }

            return transactionHistory;
        }

        // PUT: api/TransactionHistories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTransactionHistory(int id, TransactionHistory transactionHistory)
        {
            if (id != transactionHistory.Id)
            {
                return BadRequest();
            }

            _context.Entry(transactionHistory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TransactionHistoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TransactionHistories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TransactionHistory>> PostTransactionHistory(TransactionHistory transactionHistory)
        {
            _context.TransactionHistories.Add(transactionHistory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTransactionHistory", new { id = transactionHistory.Id }, transactionHistory);
        }

        // DELETE: api/TransactionHistories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTransactionHistory(int id)
        {
            var transactionHistory = await _context.TransactionHistories.FindAsync(id);
            if (transactionHistory == null)
            {
                return NotFound();
            }

            _context.TransactionHistories.Remove(transactionHistory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TransactionHistoryExists(int id)
        {
            return _context.TransactionHistories.Any(e => e.Id == id);
        }
    }
}
