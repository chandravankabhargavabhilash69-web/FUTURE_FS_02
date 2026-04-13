<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enterprise CRM | Future Interns</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Montserrat:wght@700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body { font-family: 'Inter', sans-serif; background: #020617; color: #f8fafc; }
        .heading-font { font-family: 'Montserrat', sans-serif; }
        .glass { background: rgba(30, 41, 59, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.1); }
        .active-link { background: #3b82f6; box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }
    </style>
</head>
<body class="min-h-screen overflow-x-hidden">

    <div id="loginSection" class="flex items-center justify-center min-h-screen p-4">
        <div class="glass p-10 rounded-3xl shadow-2xl w-full max-w-md text-center">
            <h1 class="heading-font text-3xl font-bold text-blue-500 mb-2">CRM ACCESS</h1>
            <p class="text-slate-400 mb-8 text-sm">Secure Administrative Portal</p>
            <div class="space-y-4">
                <input type="text" id="userIn" placeholder="Username" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-blue-500 outline-none">
                <input type="password" id="passIn" placeholder="Password" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-blue-500 outline-none">
                <button onclick="handleLogin()" class="w-full bg-blue-600 hover:bg-blue-500 p-4 rounded-xl font-bold uppercase tracking-widest transition-all">Login</button>
            </div>
            
            <div class="mt-8 pt-6 border-t border-slate-800">
                <p class="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2">Master Credentials</p>
                <div class="bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                    <p class="text-xs font-mono text-blue-400">Username: admin@69</p>
                    <p class="text-xs font-mono text-blue-400">Password: 12345678</p>
                </div>
            </div>
        </div>
    </div>

    <div id="mainApp" class="hidden flex h-screen">
        <aside class="w-72 glass border-r border-white/5 p-8 flex flex-col">
            <h2 class="heading-font text-xl font-bold text-blue-500 mb-12 italic">FUTURE <span class="text-white">CRM</span></h2>
            <nav class="space-y-3 flex-1">
                <button onclick="showPage('analytics')" id="btn-analytics" class="w-full text-left p-4 rounded-xl transition active-link text-sm font-semibold">Dashboard</button>
                <button onclick="showPage('leads')" id="btn-leads" class="w-full text-left p-4 rounded-xl hover:bg-white/5 transition text-sm font-semibold">Client Leads</button>
                <button onclick="showPage('contact')" id="btn-contact" class="w-full text-left p-4 rounded-xl hover:bg-white/5 transition text-sm font-semibold">New Contact</button>
            </nav>
            <button onclick="location.reload()" class="p-4 text-slate-500 hover:text-red-400 text-xs font-bold uppercase">Logout</button>
        </aside>

        <main class="flex-1 overflow-y-auto p-12 bg-slate-950/50">
            <section id="page-analytics" class="page-content">
                <h1 class="heading-font text-4xl font-bold mb-8">Performance Analytics</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div class="glass p-8 rounded-2xl border-l-4 border-blue-500">
                        <p class="text-slate-500 text-xs font-bold uppercase tracking-widest">Total Leads</p>
                        <h3 id="statTotal" class="text-5xl font-bold mt-2 text-white">0</h3>
                    </div>
                    <div class="glass p-8 rounded-2xl border-l-4 border-green-500">
                        <p class="text-slate-500 text-xs font-bold uppercase tracking-widest">Conversion</p>
                        <h3 class="text-5xl font-bold mt-2 text-green-400">38.4%</h3>
                    </div>
                    <div class="glass p-8 rounded-2xl border-l-4 border-purple-500">
                        <p class="text-slate-500 text-xs font-bold uppercase tracking-widest">Target Met</p>
                        <h3 class="text-5xl font-bold mt-2 text-purple-400">92%</h3>
                    </div>
                </div>
                <div class="glass p-8 rounded-3xl">
                    <canvas id="mainChart" height="100"></canvas>
                </div>
            </section>

            <section id="page-leads" class="page-content hidden">
                <div class="flex justify-between items-center mb-8">
                    <h1 class="heading-font text-4xl font-bold">Client Database</h1>
                    <input type="text" id="leadSearch" onkeyup="searchLeads()" placeholder="Search Leads..." class="bg-slate-900 border border-slate-700 p-2 rounded-lg text-sm outline-none focus:border-blue-500">
                </div>
                <div class="glass rounded-3xl overflow-hidden">
                    <table class="w-full text-left">
                        <thead class="bg-white/5 text-slate-400 text-xs uppercase tracking-widest font-bold">
                            <tr>
                                <th class="p-6">Client Name</th>
                                <th class="p-6">Email</th>
                                <th class="p-6">Status</th>
                                <th class="p-6">Action</th>
                            </tr>
                        </thead>
                        <tbody id="leadTableBody" class="divide-y divide-white/5"></tbody>
                    </table>
                </div>
            </section>

            <section id="page-contact" class="page-content hidden">
                <div class="max-w-2xl mx-auto">
                    <h1 class="heading-font text-4xl font-bold mb-4">Contact Entry</h1>
                    <p class="text-slate-400 mb-10">Use this portal to register new client leads immediately[cite: 83].</p>
                    <div class="glass p-10 rounded-3xl space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Client Full Name</label>
                                <input type="text" id="newLeadName" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none">
                            </div>
                            <div>
                                <label class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Email Address</label>
                                <input type="email" id="newLeadEmail" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none">
                            </div>
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Initial Status [cite: 89]</label>
                            <select id="newLeadStatus" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none">
                                <option value="New">New Lead</option>
                                <option value="Contacted">Already Contacted</option>
                                <option value="Converted">Converted Client</option>
                            </select>
                        </div>
                        <button onclick="addNewLead()" class="w-full bg-blue-600 hover:bg-blue-500 p-4 rounded-xl font-bold uppercase tracking-widest transition-all">Register Lead</button>
                    </div>
                </div>
            </section>
        </main>
    </div>

    <script>
        let leads = [
            { name: "John Wick", email: "babayaga@high_table.com", status: "Converted" },
            { name: "Tony Stark", email: "ironman@stark.com", status: "New" },
            { name: "Bruce Wayne", email: "batman@waynecorp.com", status: "Contacted" }
        ];

        function handleLogin() {
            const u = document.getElementById('userIn').value;
            const p = document.getElementById('passIn').value;
            if(u === 'admin@69' && p === '12345678') {
                document.getElementById('loginSection').classList.add('hidden');
                document.getElementById('mainApp').classList.remove('hidden');
                initMainChart();
                renderLeads();
            } else { alert("ACCESS DENIED"); }
        }

        function showPage(pageId) {
            document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
            document.getElementById('page-' + pageId).classList.remove('hidden');
            document.querySelectorAll('nav button').forEach(b => b.classList.remove('active-link'));
            document.getElementById('btn-' + pageId).classList.add('active-link');
        }

        function renderLeads(filteredLeads = leads) {
            const container = document.getElementById('leadTableBody');
            document.getElementById('statTotal').innerText = leads.length;
            container.innerHTML = filteredLeads.map(l => `
                <tr class="hover:bg-white/5 transition">
                    <td class="p-6 font-semibold">${l.name}</td>
                    <td class="p-6 text-slate-400 text-sm">${l.email}</td>
                    <td class="p-6"><span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase ${l.status === 'Converted' ? 'bg-green-500/20 text-green-400' : (l.status === 'New' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400')}">${l.status}</span></td>
                    <td class="p-6"><button class="text-xs font-bold text-red-400 hover:text-white transition">Delete</button></td>
                </tr>
            `).join('');
        }

        function searchLeads() {
            const term = document.getElementById('leadSearch').value.toLowerCase();
            const filtered = leads.filter(l => l.name.toLowerCase().includes(term) || l.email.toLowerCase().includes(term));
            renderLeads(filtered);
        }

        function addNewLead() {
            const name = document.getElementById('newLeadName').value;
            const email = document.getElementById('newLeadEmail').value;
            const status = document.getElementById('newLeadStatus').value;
            if(name && email) {
                leads.push({ name, email, status });
                renderLeads();
                showPage('leads');
                document.getElementById('newLeadName').value = '';
                document.getElementById('newLeadEmail').value = '';
                alert("Client Lead Registered [cite: 92]");
            }
        }

        function initMainChart() {
            const ctx = document.getElementById('mainChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: 'Acquisition Rate',
                        data: [15, 32, 28, 48],
                        borderColor: '#3b82f6',
                        tension: 0.4,
                        fill: true,
                        backgroundColor: 'rgba(59, 130, 246, 0.05)'
                    }]
                },
                options: { 
                    responsive: true,
                    plugins: { legend: { display: false } },
                    scales: { y: { grid: { color: 'rgba(255,255,255,0.05)' } }, x: { grid: { display: false } } }
                }
            });
        }
    </script>
</body>
</html>
