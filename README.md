<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FUTURE_FS_02 | Professional CRM</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Montserrat:wght@700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body { font-family: 'Inter', sans-serif; }
        .heading-font { font-family: 'Montserrat', sans-serif; }
        .glass { 
            background: rgba(30, 41, 59, 0.7); 
            backdrop-filter: blur(12px); 
            border: 1px solid rgba(255, 255, 255, 0.1); 
        }
        .gradient-bg {
            background: radial-gradient(circle at top left, #1e293b, #0f172a, #020617);
        }
        .active-link { background: #3b82f6; box-shadow: 0 0 15px rgba(59, 130, 246, 0.5); }
    </style>
</head>
<body class="gradient-bg text-slate-100 min-h-screen overflow-x-hidden">

    <div id="loginSection" class="flex items-center justify-center min-h-screen p-4">
        <div class="glass p-10 rounded-3xl shadow-2xl w-full max-w-md text-center">
            <h1 class="heading-font text-3xl font-bold text-blue-400 mb-2 uppercase tracking-tighter">Admin Portal</h1>
            <p class="text-slate-400 mb-8 text-sm">Secure Management System</p>
            <div class="space-y-5">
                <input type="text" id="userIn" placeholder="Username" class="w-full p-4 rounded-xl bg-slate-900/50 border border-slate-700 focus:border-blue-500 outline-none transition-all">
                <input type="password" id="passIn" placeholder="Password" class="w-full p-4 rounded-xl bg-slate-900/50 border border-slate-700 focus:border-blue-500 outline-none transition-all">
                <button onclick="handleLogin()" class="w-full bg-blue-600 hover:bg-blue-500 p-4 rounded-xl font-bold uppercase tracking-widest shadow-lg transition-all">Authenticate</button>
            </div>
            <div class="mt-10 pt-6 border-t border-slate-800">
                <p class="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em]">Master Credentials</p>
                <p class="text-sm font-mono text-blue-400/80 mt-2">Admin@69 | 123456789</p>
            </div>
        </div>
    </div>

    <div id="mainApp" class="hidden flex h-screen">
        <aside class="w-72 glass border-r border-white/5 p-8 flex flex-col">
            <div class="mb-12">
                <h2 class="heading-font text-xl font-bold text-blue-500">FUTURE <span class="text-white">CRM</span></h2>
                <div class="h-1 w-12 bg-blue-500 mt-1 rounded-full"></div>
            </div>
            
            <nav class="space-y-4 flex-1">
                <button onclick="showPage('analytics')" id="btn-analytics" class="w-full text-left p-4 rounded-xl hover:bg-white/5 transition active-link">Analytics</button>
                <button onclick="showPage('leads')" id="btn-leads" class="w-full text-left p-4 rounded-xl hover:bg-white/5 transition">Lead List</button>
                <button onclick="showPage('contact')" id="btn-contact" class="w-full text-left p-4 rounded-xl hover:bg-white/5 transition">Add New Lead</button>
            </nav>

            <button onclick="location.reload()" class="p-4 text-slate-500 hover:text-red-400 transition text-sm font-semibold flex items-center">
                <span>Sign Out</span>
            </button>
        </aside>

        <main class="flex-1 overflow-y-auto p-12 bg-transparent">
            
            <section id="page-analytics" class="page-content">
                <div class="mb-10">
                    <h1 class="heading-font text-4xl font-bold mb-2">Lead Intelligence</h1>
                    <p class="text-slate-400">Real-time conversion tracking and metrics[cite: 107].</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div class="glass p-8 rounded-2xl border-l-4 border-blue-500">
                        <p class="text-slate-500 font-bold text-xs uppercase tracking-widest">Total Active Leads</p>
                        <h3 class="text-5xl font-bold mt-2 counter">2,481</h3>
                    </div>
                    <div class="glass p-8 rounded-2xl border-l-4 border-green-500">
                        <p class="text-slate-500 font-bold text-xs uppercase tracking-widest">Conversion Rate</p>
                        <h3 class="text-5xl font-bold mt-2 text-green-400">42%</h3>
                    </div>
                    <div class="glass p-8 rounded-2xl border-l-4 border-purple-500">
                        <p class="text-slate-500 font-bold text-xs uppercase tracking-widest">Revenue Impact</p>
                        <h3 class="text-5xl font-bold mt-2 text-purple-400">$48k</h3>
                    </div>
                </div>

                <div class="glass p-8 rounded-3xl">
                    <h4 class="heading-font text-lg font-bold mb-8">Quarterly Growth Analysis</h4>
                    <canvas id="mainChart" height="100"></canvas>
                </div>
            </section>

            <section id="page-leads" class="page-content hidden">
                <h1 class="heading-font text-4xl font-bold mb-8">Database Management</h1>
                <div class="glass rounded-3xl overflow-hidden">
                    <table class="w-full text-left">
                        <thead class="bg-white/5 text-slate-400 text-xs uppercase tracking-widest">
                            <tr>
                                <th class="p-6">Client Name</th>
                                <th class="p-6">Email Address</th>
                                <th class="p-6">Status</th>
                                <th class="p-6">Action</th>
                            </tr>
                        </thead>
                        <tbody id="leadTableBody" class="divide-y divide-white/5">
                            </tbody>
                    </table>
                </div>
            </section>

            <section id="page-contact" class="page-content hidden">
                <div class="max-w-2xl mx-auto">
                    <h1 class="heading-font text-4xl font-bold mb-4">Inbound Lead Entry</h1>
                    <p class="text-slate-400 mb-10">Manually add a client lead to the system[cite: 83, 88].</p>
                    
                    <div class="glass p-10 rounded-3xl space-y-6">
                        <div class="grid grid-cols-2 gap-6">
                            <div>
                                <label class="text-xs font-bold text-slate-500 uppercase mb-2 block">Full Name</label>
                                <input type="text" id="newLeadName" class="w-full p-4 rounded-xl bg-slate-900/50 border border-slate-700 focus:border-blue-500 outline-none">
                            </div>
                            <div>
                                <label class="text-xs font-bold text-slate-500 uppercase mb-2 block">Email</label>
                                <input type="email" id="newLeadEmail" class="w-full p-4 rounded-xl bg-slate-900/50 border border-slate-700 focus:border-blue-500 outline-none">
                            </div>
                        </div>
                        <div>
                            <label class="text-xs font-bold text-slate-500 uppercase mb-2 block">Lead Status</label>
                            <select id="newLeadStatus" class="w-full p-4 rounded-xl bg-slate-900/50 border border-slate-700 outline-none appearance-none">
                                <option>New</option>
                                <option>Contacted</option>
                                <option>Converted</option>
                            </select>
                        </div>
                        <button onclick="addNewLead()" class="w-full bg-green-600 hover:bg-green-500 p-4 rounded-xl font-bold uppercase tracking-widest transition-all">Commit to Database</button>
                    </div>
                </div>
            </section>

        </main>
    </div>

    <script>
        // Data Store (cite: 86, 92)
        let leads = [
            { name: "John Doe", email: "john@example.com", status: "Converted" },
            { name: "Sarah Smith", email: "sarah.s@tech.io", status: "New" },
            { name: "Robert Fox", email: "rfox@global.net", status: "Contacted" }
        ];

        function handleLogin() {
            const u = document.getElementById('userIn').value;
            const p = document.getElementById('passIn').value;
            if(u === 'Admin@69' && p === '123456789') {
                document.getElementById('loginSection').classList.add('hidden');
                document.getElementById('mainApp').classList.remove('hidden');
                initMainChart();
                renderLeads();
            } else {
                alert("Unauthorized Access Attempt");
            }
        }

        function showPage(pageId) {
            document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
            document.getElementById('page-' + pageId).classList.remove('hidden');
            
            document.querySelectorAll('nav button').forEach(b => b.classList.remove('active-link'));
            document.getElementById('btn-' + pageId).classList.add('active-link');
        }

        function renderLeads() {
            const container = document.getElementById('leadTableBody');
            container.innerHTML = leads.map(l => `
                <tr class="hover:bg-white/5 transition">
                    <td class="p-6 font-semibold">${l.name}</td>
                    <td class="p-6 text-slate-400 text-sm">${l.email}</td>
                    <td class="p-6">
                        <span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase ${getStatusClass(l.status)}">
                            ${l.status}
                        </span>
                    </td>
                    <td class="p-6"><button class="text-blue-400 hover:text-white text-sm">View</button></td>
                </tr>
            `).join('');
        }

        function getStatusClass(status) {
            if(status === 'Converted') return 'bg-green-500/20 text-green-400';
            if(status === 'Contacted') return 'bg-blue-500/20 text-blue-400';
            return 'bg-yellow-500/20 text-yellow-400';
        }

        function addNewLead() {
            const name = document.getElementById('newLeadName').value;
            const email = document.getElementById('newLeadEmail').value;
            const status = document.getElementById('newLeadStatus').value;
            
            if(name && email) {
                leads.push({ name, email, status });
                renderLeads();
                alert("Lead Successfully Ingested");
                showPage('leads');
                // Reset form
                document.getElementById('newLeadName').value = '';
                document.getElementById('newLeadEmail').value = '';
            }
        }

        function initMainChart() {
            const ctx = document.getElementById('mainChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Acquisition',
                        data: [45, 59, 80, 81, 56, 95],
                        borderColor: '#3b82f6',
                        borderWidth: 4,
                        pointBackgroundColor: '#3b82f6',
                        tension: 0.4,
                        fill: true,
                        backgroundColor: 'rgba(59, 130, 246, 0.05)'
                    }]
                },
                options: {
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { grid: { color: 'rgba(255,255,255,0.05)' } },
                        x: { grid: { display: false } }
                    }
                }
            });
        }
    </script>
</body>
</html>
