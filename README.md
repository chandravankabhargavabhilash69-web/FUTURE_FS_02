<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enterprise CRM | FUTURE_FS_02</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Montserrat:wght@700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body { font-family: 'Inter', sans-serif; background: #020617; color: #f8fafc; }
        .heading-font { font-family: 'Montserrat', sans-serif; }
        .glass { background: rgba(30, 41, 59, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.1); }
        .active-link { background: #3b82f6; box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }
        .status-badge { font-size: 10px; font-weight: 800; text-transform: uppercase; padding: 4px 10px; border-radius: 99px; }
    </style>
</head>
<body class="min-h-screen">

    <div id="loginSection" class="flex items-center justify-center min-h-screen p-4">
        <div class="glass p-10 rounded-3xl shadow-2xl w-full max-w-md text-center">
            <h1 class="heading-font text-3xl font-bold text-blue-500 mb-2">CRM ACCESS</h1>
            <p class="text-slate-400 mb-8 text-sm">Secure Administrative Portal</p>
            <div class="space-y-4">
                <input type="text" id="userIn" placeholder="Username" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-blue-500 outline-none transition-all">
                <input type="password" id="passIn" placeholder="Password" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-blue-500 outline-none transition-all">
                <button onclick="handleLogin()" class="w-full bg-blue-600 hover:bg-blue-500 p-4 rounded-xl font-bold uppercase tracking-widest transition-all">Authenticate</button>
            </div>
            <div class="mt-8 pt-6 border-t border-slate-800">
                <p class="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-3">Master Credentials</p>
                <div class="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex flex-col items-center">
                    <p class="text-xs font-mono text-blue-400">Username: admin@69</p>
                    <p class="text-xs font-mono text-blue-400">Password: 12345678</p>
                </div>
            </div>
        </div>
    </div>

    <div id="mainApp" class="hidden flex h-screen">
        <aside class="w-72 glass border-r border-white/5 p-8 flex flex-col">
            <h2 class="heading-font text-xl font-bold text-blue-500 mb-12">FUTURE <span class="text-white">CRM</span></h2>
            <nav class="space-y-3 flex-1">
                <button onclick="showPage('analytics')" id="btn-analytics" class="w-full text-left p-4 rounded-xl transition active-link text-sm font-semibold">Dashboard</button>
                <button onclick="showPage('leads')" id="btn-leads" class="w-full text-left p-4 rounded-xl hover:bg-white/5 transition text-sm font-semibold">Client Leads</button>
                <button onclick="showPage('contact')" id="btn-contact" class="w-full text-left p-4 rounded-xl hover:bg-white/5 transition text-sm font-semibold">Add Lead</button>
            </nav>
            <button onclick="location.reload()" class="p-4 text-slate-500 hover:text-red-400 text-xs font-bold uppercase">Sign Out</button>
        </aside>

        <main class="flex-1 overflow-y-auto p-12">
            <section id="page-analytics" class="page-content">
                <h1 class="heading-font text-4xl font-bold mb-8">Performance Metrics</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <div class="glass p-8 rounded-2xl border-l-4 border-blue-500">
                        <p class="text-slate-500 text-xs font-bold uppercase tracking-widest">Total Active Leads</p>
                        <h3 id="statTotal" class="text-5xl font-bold mt-2 text-white">0</h3>
                    </div>
                    <div class="glass p-8 rounded-2xl border-l-4 border-green-500">
                        <p class="text-slate-500 text-xs font-bold uppercase tracking-widest">Conversion Rate</p>
                        <h3 class="text-5xl font-bold mt-2 text-green-400">38.4%</h3>
                    </div>
                    <div class="glass p-8 rounded-2xl border-l-4 border-purple-500">
                        <p class="text-slate-500 text-xs font-bold uppercase tracking-widest">Growth</p>
                        <h3 class="text-5xl font-bold mt-2 text-purple-400">+12%</h3>
                    </div>
                </div>
                <div class="glass p-8 rounded-3xl">
                    <canvas id="mainChart" height="100"></canvas>
                </div>
            </section>

            <section id="page-leads" class="page-content hidden">
                <div class="flex justify-between items-center mb-8">
                    <h1 class="heading-font text-4xl font-bold">Database</h1>
                    <input type="text" id="leadSearch" onkeyup="searchLeads()" placeholder="Quick Search..." class="bg-slate-900 border border-slate-700 p-3 rounded-xl text-sm outline-none focus:border-blue-500 w-64">
                </div>
                <div class="glass rounded-3xl overflow-hidden">
                    <table class="w-full text-left">
                        <thead class="bg-white/5 text-slate-400 text-xs uppercase tracking-widest">
                            <tr>
                                <th class="p-6">Client</th>
                                <th class="p-6">Email</th>
                                <th class="p-6">Status</th>
                                <th class="p-6">Priority</th>
                            </tr>
                        </thead>
                        <tbody id="leadTableBody" class="divide-y divide-white/5"></tbody>
                    </table>
                </div>
            </section>

            <section id="page-contact" class="page-content hidden">
                <div class="max-w-2xl mx-auto">
                    <h1 class="heading-font text-4xl font-bold mb-4 text-center">Inbound Entry</h1>
                    <p class="text-slate-400 mb-10 text-center">Add client details to the central repository.</p>
                    <div class="glass p-10 rounded-3xl space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Name</label>
                                <input type="text" id="newLeadName" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none">
                            </div>
                            <div>
                                <label class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Email</label>
                                <input type="email" id="newLeadEmail" class="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none">
                            </div>
                        </div>
                        <button onclick="addNewLead()" class="w-full bg-blue-600 hover:bg-blue-500 p-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-lg">Commit to Leads</button>
                    </div>
                </div>
            </section>
        </main>
    </div>

    <script>
        let leads = [
            { name: "Tony Stark", email: "tony@stark.com", status: "Converted", priority: "Hot" },
            { name: "Bruce Wayne", email: "bruce@wayne.co", status: "New", priority: "Cold" }
        ];

        function handleLogin() {
            const u = document.getElementById('userIn').value;
            const p = document.getElementById('passIn').value;
            if(u === 'admin@69' && p === '12345678') {
                document.getElementById('loginSection').classList.add('hidden');
                document.getElementById('mainApp').classList.remove('hidden');
                initMainChart();
                renderLeads();
            } else { alert("Invalid Credentials"); }
        }

        function showPage(pageId) {
            document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
            document.getElementById('page-' + pageId).classList.remove('hidden');
            document.querySelectorAll('nav button').forEach(b => b.classList.remove('active-link'));
            document.getElementById('btn-' + pageId).classList.add('active-link');
        }

        function renderLeads(list = leads) {
            const container = document.getElementById('leadTableBody');
            document.getElementById('statTotal').innerText = leads.length;
            container.innerHTML = list.map(l => `
                <tr class="hover:bg-white/5 transition">
                    <td class="p-6 font-semibold">${l.name}</td>
                    <td class="p-6 text-slate-400 text-sm">${l.email}</td>
                    <td class="p-6"><span class="status-badge ${l.status === 'Converted' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}">${l.status}</span></td>
                    <td class="p-6 text-xs ${l.priority === 'Hot' ? 'text-orange-500' : 'text-slate-500'} font-bold">${l.priority}</td>
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
            if(name && email) {
                leads.push({ name, email, status: 'New', priority: 'Cold' });
                renderLeads();
                showPage('leads');
                alert("Lead Created Successfully");
            }
        }

        function initMainChart() {
            const ctx = document.getElementById('mainChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['W1', 'W2', 'W3', 'W4'],
                    datasets: [{
                        label: 'Acquisition Rate',
                        data: [20, 35, 30, 50],
                        borderColor: '#3b82f6',
                        tension: 0.4,
                        fill: true,
                        backgroundColor: 'rgba(59, 130, 246, 0.05)'
                    }]
                },
                options: { plugins: { legend: { display: false } }, scales: { y: { grid: { color: 'rgba(255,255,255,0.05)' } }, x: { grid: { display: false } } } }
            });
        }
    </script>
</body>
</html>
