using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ProjectAPI1.Models;

namespace ProjectAPI1.Controllers
{
    public class TransactionHistoriesController : Controller
    {
        private readonly GladiatorProjectContext _context;

        public TransactionHistoriesController(GladiatorProjectContext context)
        {
            _context = context;
        }

        // GET: TransactionHistories
        public async Task<IActionResult> Index()
        {
            var gladiatorProjectContext = _context.TransactionHistories.Include(t => t.Product).Include(t => t.User);
            return View(await gladiatorProjectContext.ToListAsync());
        }

        // GET: TransactionHistories/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var transactionHistory = await _context.TransactionHistories
                .Include(t => t.Product)
                .Include(t => t.User)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (transactionHistory == null)
            {
                return NotFound();
            }

            return View(transactionHistory);
        }

        // GET: TransactionHistories/Create
        public IActionResult Create()
        {
            ViewData["ProductId"] = new SelectList(_context.Products, "Id", "Description");
            ViewData["UserId"] = new SelectList(_context.Users, "Id", "EmailId");
            return View();
        }

        // POST: TransactionHistories/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,UserId,ProductId,Tenure,AmountPaid,IsInstallment,NextDate")] TransactionHistory transactionHistory)
        {
            if (ModelState.IsValid)
            {
                _context.Add(transactionHistory);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["ProductId"] = new SelectList(_context.Products, "Id", "Description", transactionHistory.ProductId);
            ViewData["UserId"] = new SelectList(_context.Users, "Id", "EmailId", transactionHistory.UserId);
            return View(transactionHistory);
        }

        // GET: TransactionHistories/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var transactionHistory = await _context.TransactionHistories.FindAsync(id);
            if (transactionHistory == null)
            {
                return NotFound();
            }
            ViewData["ProductId"] = new SelectList(_context.Products, "Id", "Description", transactionHistory.ProductId);
            ViewData["UserId"] = new SelectList(_context.Users, "Id", "EmailId", transactionHistory.UserId);
            return View(transactionHistory);
        }

        // POST: TransactionHistories/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,UserId,ProductId,Tenure,AmountPaid,IsInstallment,NextDate")] TransactionHistory transactionHistory)
        {
            if (id != transactionHistory.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(transactionHistory);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!TransactionHistoryExists(transactionHistory.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["ProductId"] = new SelectList(_context.Products, "Id", "Description", transactionHistory.ProductId);
            ViewData["UserId"] = new SelectList(_context.Users, "Id", "EmailId", transactionHistory.UserId);
            return View(transactionHistory);
        }

        // GET: TransactionHistories/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var transactionHistory = await _context.TransactionHistories
                .Include(t => t.Product)
                .Include(t => t.User)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (transactionHistory == null)
            {
                return NotFound();
            }

            return View(transactionHistory);
        }

        // POST: TransactionHistories/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var transactionHistory = await _context.TransactionHistories.FindAsync(id);
            _context.TransactionHistories.Remove(transactionHistory);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool TransactionHistoryExists(int id)
        {
            return _context.TransactionHistories.Any(e => e.Id == id);
        }
    }
}
