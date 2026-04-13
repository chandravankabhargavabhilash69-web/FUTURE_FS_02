<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Future CRM - Admin Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .glass { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); }
    </style>
</head>
<body class="bg-slate-900 text-slate-100 min-h-screen">

    <div id="loginPage" class="flex items-center justify-center min-h-screen">
        <div class="bg-slate-800 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-slate-700">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-blue-500">CRM Login</h1>
                <p class="text-slate-400 mt-2">Enter your admin credentials</p>
            </div>
            <div class="space-y-4">
                <input type="text" id="username" placeholder="Username" class="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:border-blue-500">
                <input type="password" id="password" placeholder="Password" class="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:border-blue-500">
                <button onclick="checkLogin()" class="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-bold transition duration-300">Sign In</button>
            </div>
            <div class="mt-8 pt-6 border-t border-slate-700 text-center">
                <p class="text-xs text-slate-500 uppercase tracking-widest">Master Access Credentials</p>
                <p class="text-sm font-mono text-blue-400 mt-2">User: Admin@69 | Pass: 123456789</p>
            </div>
        </div>
    </div>

    <div id="dashboard" class="hidden flex h-screen">
        <aside class="w-64 bg-slate-800 border-r border-slate-700 p-6 flex flex-col">
            <h2 class="text-xl font-bold text-blue-500 mb-10">Future Interns CRM</h2>
            <nav class="space-y-4 flex-1">
                <a href="#" class="block p-3 bg-blue-600 rounded-lg">Overview</a>
                <a href="#" class="block p-3 hover:bg-slate-700 rounded-lg transition">Leads List</a>
                <a href="#" class="block p-3 hover:bg-slate-700 rounded-lg transition">Analytics</a>
            </nav>
            <button onclick="location.reload()" class="text-slate-400 hover:text-red-400 text-left p-3">Logout</button>
        </aside>

        <main class="flex-1 overflow-y-auto p-8">
            <div class="flex justify-between items-end mb-8">
                <div>
                    <h1 class="text-3xl font-bold">Business Intelligence</h1>
                    <p class="text-slate-400">Welcome back, Admin</p>
                </div>
                <div class="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
                    <span class="text-green-500 text-sm font-bold">● System Live</span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div class="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <p class="text-slate-400 text-sm">Total Leads</p>
                    <h3 class="text-4xl font-bold mt-2">1,284</h3>
                </div>
                <div class="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <p class="text-slate-400 text-sm">Conversion Rate</p>
                    <h3 class="text-4xl font-bold mt-2 text-blue-400">32.4%</h3>
                </div>
                <div class="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <p class="text-slate-400 text-sm">Revenue Forecast</p>
                    <h3 class="text-4xl font-bold mt-2 text-green-400">$12.5k</h3>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h4 class="font-bold mb-6">Monthly Lead Traffic</h4>
                    <canvas id="lineChart"></canvas>
                </div>
                <div class="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h4 class="font-bold mb-6">Source Performance</h4>
                    <canvas id="barChart"></canvas>
                </div>
            </div>
        </main>
    </div>

    <script>
        function checkLogin() {
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;
            
            if(user === 'Admin@69' && pass === '123456789') {
                document.getElementById('loginPage').classList.add('hidden');
                document.getElementById('dashboard').classList.remove('hidden');
                initCharts();
            } else {
                alert('Invalid Credentials!');
            }
        }

        function initCharts() {
            const ctx1 = document.getElementById('lineChart').getContext('2d');
            const ctx2 = document.getElementById('barChart').getContext('2d');

            new Chart(ctx1, {
                type: 'line',
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: 'Inbound Leads',
                        data: [65, 82, 70, 95],
                        borderColor: '#3b82f6',
                        tension: 0.4,
                        fill: true,
                        backgroundColor: 'rgba(59, 130, 246, 0.1)'
                    }]
                },
                options: { plugins: { legend: { display: false } } }
            });

            new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: ['Google', 'LinkedIn', 'Referral', 'Email'],
                    datasets: [{
                        label: 'Leads',
                        data: [450, 310, 120, 205],
                        backgroundColor: '#3b82f6',
                        borderRadius: 8
                    }]
                },
                options: { plugins: { legend: { display: false } } }
            });
        }
    </script>
</body>
</html>
