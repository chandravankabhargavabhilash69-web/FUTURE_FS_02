<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Chandravanka Bhargav Abhilash CRM</title>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --bg: #080b14;
      --card: #0f1320;
      --border: #1e2540;
      --accent: #4f8ef7;
      --green: #22d07a;
      --yellow: #f7b94f;
      --red: #f75a5a;
      --text: #dce4f5;
      --muted: #5a6580;
    }
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Outfit',sans-serif; background:var(--bg); color:var(--text); min-height:100vh; }

    /* Header */
    header {
      background: var(--card);
      border-bottom: 1px solid var(--border);
      padding: 18px 32px;
      display: flex; align-items:center; justify-content:space-between;
    }
    .logo { font-family:'Syne',sans-serif; font-size:22px; font-weight:800; }
    .logo span { color: var(--accent); }

    /* Stats */
    .stats { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; padding:28px 32px 0; }
    .stat {
      background:var(--card); border:1px solid var(--border);
      border-radius:14px; padding:20px 22px; position:relative; overflow:hidden;
    }
    .stat::after {
      content:''; position:absolute; top:0; left:0; right:0; height:3px;
    }
    .stat.s-total::after { background: var(--accent); }
    .stat.s-new::after   { background: var(--accent); }
    .stat.s-cont::after  { background: var(--yellow); }
    .stat.s-conv::after  { background: var(--green); }
    .stat-lbl { font-size:11px; text-transform:uppercase; letter-spacing:1px; color:var(--muted); margin-bottom:8px; }
    .stat-num { font-family:'Syne',sans-serif; font-size:32px; font-weight:800; }
    .s-total .stat-num { color:var(--accent); }
    .s-new .stat-num    { color:var(--accent); }
    .s-cont .stat-num   { color:var(--yellow); }
    .s-conv .stat-num   { color:var(--green); }

    /* Controls */
    .controls { display:flex; gap:12px; padding:24px 32px; flex-wrap:wrap; align-items:center; }
    .search {
      flex:1; min-width:220px;
      background:var(--card); border:1px solid var(--border);
      border-radius:10px; padding:10px 16px;
      color:var(--text); font-family:'Outfit',sans-serif; font-size:14px; outline:none;
    }
    .search:focus { border-color:var(--accent); }
    .search::placeholder { color:var(--muted); }
    .filters { display:flex; gap:6px; }
    .fbtn {
      padding:8px 18px; border-radius:8px; border:1px solid var(--border);
      background:var(--card); color:var(--muted);
      cursor:pointer; font-family:'Outfit',sans-serif; font-size:13px; font-weight:500;
      transition:all .15s;
    }
    .fbtn.on { background:var(--accent); color:#fff; border-color:var(--accent); }
    .btn-add {
      padding:10px 22px; border-radius:10px; border:none;
      background:var(--accent); color:#fff;
      cursor:pointer; font-family:'Outfit',sans-serif; font-size:14px; font-weight:600;
      transition:all .15s;
    }
    .btn-add:hover { opacity:.88; transform:translateY(-1px); }

    /* Table */
    .table-wrap { margin:0 32px 32px; background:var(--card); border:1px solid var(--border); border-radius:14px; overflow:hidden; }
    table { width:100%; border-collapse:collapse; }
    thead { background:#0a0e1a; border-bottom:1px solid var(--border); }
    th { padding:13px 18px; text-align:left; font-size:11px; text-transform:uppercase; letter-spacing:.8px; color:var(--muted); font-weight:600; }
    td { padding:14px 18px; border-bottom:1px solid rgba(30,37,64,.5); font-size:14px; vertical-align:middle; }
    tr:last-child td { border-bottom:none; }
    tr:hover td { background:rgba(79,142,247,.04); }
    .name-cell .nm { font-weight:600; }
    .name-cell .em { color:var(--muted); font-size:12px; margin-top:2px; }
    .badge {
      display:inline-flex; align-items:center; gap:5px;
      padding:4px 11px; border-radius:20px; font-size:12px; font-weight:600;
    }
    .badge::before { content:''; width:5px; height:5px; border-radius:50%; }
    .b-new      { background:rgba(79,142,247,.1); color:var(--accent); border:1px solid rgba(79,142,247,.2); }
    .b-new::before { background:var(--accent); }
    .b-contacted{ background:rgba(247,185,79,.1); color:var(--yellow); border:1px solid rgba(247,185,79,.2); }
    .b-contacted::before { background:var(--yellow); }
    .b-converted{ background:rgba(34,208,122,.1); color:var(--green); border:1px solid rgba(34,208,122,.2); }
    .b-converted::before { background:var(--green); }
    .src-tag { background:rgba(79,142,247,.08); color:var(--accent); border:1px solid rgba(79,142,247,.15); padding:3px 9px; border-radius:20px; font-size:12px; }
    .act { display:flex; gap:7px; }
    .ic-btn {
      width:30px; height:30px; border-radius:7px; border:1px solid var(--border);
      background:var(--bg); cursor:pointer; display:flex; align-items:center; justify-content:center;
      font-size:14px; color:var(--muted); transition:all .15s;
    }
    .ic-btn:hover { border-color:var(--accent); color:var(--accent); }
    .ic-btn.del:hover { border-color:var(--red); color:var(--red); }
    .empty { text-align:center; padding:50px; color:var(--muted); font-size:15px; }

    /* Modal */
    .overlay {
      display:none; position:fixed; inset:0;
      background:rgba(0,0,0,.75); backdrop-filter:blur(5px);
      z-index:999; align-items:center; justify-content:center;
    }
    .overlay.open { display:flex; }
    .modal {
      background:var(--card); border:1px solid var(--border);
      border-radius:18px; width:100%; max-width:460px;
      padding:30px; animation:up .2s ease;
    }
    @keyframes up { from{transform:translateY(24px);opacity:0} to{transform:translateY(0);opacity:1} }
    .mhead { display:flex; justify-content:space-between; align-items:center; margin-bottom:22px; }
    .mtitle { font-family:'Syne',sans-serif; font-size:18px; font-weight:800; }
    .xbtn {
      width:30px; height:30px; border-radius:7px; border:1px solid var(--border);
      background:var(--bg); cursor:pointer; color:var(--muted); font-size:16px;
      display:flex; align-items:center; justify-content:center;
    }
    .row2 { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
    .fg { margin-bottom:14px; }
    .fg label { display:block; font-size:11px; text-transform:uppercase; letter-spacing:.6px; color:var(--muted); margin-bottom:6px; font-weight:600; }
    .fg input, .fg select, .fg textarea {
      width:100%; background:var(--bg); border:1px solid var(--border);
      border-radius:9px; padding:10px 13px; color:var(--text);
      font-family:'Outfit',sans-serif; font-size:14px; outline:none; transition:border .15s;
    }
    .fg input:focus, .fg select:focus, .fg textarea:focus { border-color:var(--accent); }
    .fg textarea { resize:vertical; min-height:80px; }
    .mfoot { display:flex; gap:10px; justify-content:flex-end; margin-top:20px; }
    .btn-cancel {
      padding:9px 20px; border-radius:9px; border:1px solid var(--border);
      background:var(--bg); color:var(--text); cursor:pointer;
      font-family:'Outfit',sans-serif; font-size:14px;
    }
    .btn-save {
      padding:9px 22px; border-radius:9px; border:none;
      background:var(--accent); color:#fff; cursor:pointer;
      font-family:'Outfit',sans-serif; font-size:14px; font-weight:600;
    }

    /* Toast */
    #toast {
      position:fixed; bottom:24px; right:24px;
      background:var(--card); border:1px solid var(--border);
      border-radius:10px; padding:12px 18px;
      font-size:13px; font-weight:500;
      opacity:0; transform:translateY(20px);
      transition:all .3s cubic-bezier(.34,1.56,.64,1);
      z-index:9999;
    }
    #toast.show { opacity:1; transform:translateY(0); }
    #toast.ok { border-color:var(--green); }
    #toast.err { border-color:var(--red); }

    @media(max-width:700px){
      .stats{grid-template-columns:repeat(2,1fr); padding:16px;}
      .controls{padding:16px;}
      .table-wrap{margin:0 16px 24px;}
      header{padding:14px 16px;}
      th:nth-child(3),td:nth-child(3),
      th:nth-child(5),td:nth-child(5){ display:none; }
    }
  
body.light {
  --bg:#f5f7fb;
  --card:#ffffff;
  --text:#1a1a1a;
  --border:#ddd;
}
</style>

</head>
<body>

<!-- HEADER -->
<header>
  <div class="logo">Chandravanka <span>Bhargav Abhilash</span> CRM</div>
  <button class="btn-add" onclick="exportCSV()">Export</button>
  <button class="btn-add" onclick="toggleTheme()">🌙</button>
  <button class="btn-add" onclick="openForm()">+ Add Lead</button>
</header>

<!-- STATS -->
<div class="stats">
  <div class="stat s-total"><div class="stat-lbl">Total Leads</div><div class="stat-num" id="s0">0</div></div>
  <div class="stat s-new"> <div class="stat-lbl">New</div>         <div class="stat-num" id="s1">0</div></div>
  <div class="stat s-cont"><div class="stat-lbl">Contacted</div>   <div class="stat-num" id="s2">0</div></div>
  <div class="stat s-conv"><div class="stat-lbl">Converted</div>   <div class="stat-num" id="s3">0</div></div>
</div>

<!-- CONTROLS -->
<div class="controls">
  <input class="search" id="q" placeholder="🔍  Search name, email or source…" oninput="render()"/>
  <div class="filters">
    <button class="fbtn on" onclick="setF('all',this)">All</button>
    <button class="fbtn" onclick="setF('new',this)">New</button>
    <button class="fbtn" onclick="setF('contacted',this)">Contacted</button>
    <button class="fbtn" onclick="setF('converted',this)">Converted</button>
  </div>
</div>

<!-- TABLE -->
<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th>Lead</th><th>Phone</th><th>Source</th>
        <th>Status</th><th>Date</th><th>Notes</th><th>Actions</th>
      </tr>
    </thead>
    <tbody id="tbody"></tbody>
  </table>
</div>

<!-- MODAL -->
<div class="overlay" id="ov" onclick="bgClose(event)">
  <div class="modal">
    <div class="mhead">
      <div class="mtitle" id="mtitle">Add Lead</div>
      <div class="xbtn" onclick="closeForm()">✕</div>
    </div>
    <div class="row2">
      <div class="fg"><label>Name *</label><input id="fn" placeholder="Rahul Kumar"/></div>
      <div class="fg"><label>Email *</label><input id="fe" type="email" placeholder="rahul@email.com"/></div>
    </div>
    <div class="row2">
      <div class="fg"><label>Phone</label><input id="fp" placeholder="9876543210"/></div>
      <div class="fg"><label>Source</label>
        <select id="fs">
          <option>Website</option><option>Referral</option>
          <option>Social Media</option><option>Cold Call</option>
          <option>Email Campaign</option><option>Other</option>
        </select>
      </div>
    </div>
    <div class="fg"><label>Priority</label>
      <select id="fpriority">
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
    </div>
    <div class="fg"><label>Status</label>
      <select id="fst">
        <option value="new">New</option>
        <option value="contacted">Contacted</option>
        <option value="converted">Converted</option>
      </select>
    </div>
    <div class="fg"><label>Notes</label><textarea id="fnotes" placeholder="Follow-up details…"></textarea></div>
    <div class="mfoot">
      <button class="btn-cancel" onclick="closeForm()">Cancel</button>
      <button class="btn-save" onclick="save()">Save Lead</button>
    </div>
  </div>
</div>

<!-- TOAST -->
<div id="toast"></div>

<script>
  // ── Data stored in localStorage so it persists after refresh ─────────────
  let leads = JSON.parse(localStorage.getItem('crm_leads') || '[]');
  let filter = 'all';
  let editId = null;

  // Sample data on first visit
  if (!leads.length) {
    leads = [
      { id: uid(), name:'Priya Sharma',  email:'priya@example.com',  phone:'9876543210', source:'Website',      status:'new',       notes:'Interested in web services.',      date: today() },
      { id: uid(), name:'Rahul Mehta',   email:'rahul@startup.io',   phone:'9123456780', source:'Referral',     status:'contacted', notes:'Call back by Friday.',             date: today() },
      { id: uid(), name:'Anjali Verma',  email:'anjali@corp.com',     phone:'9988776655', source:'Social Media', status:'converted', notes:'Signed contract for CRM project.', date: today() },
    ];
    saveData();
  }

  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2); }
  function today() { return new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}); }
  function saveData() { localStorage.setItem('crm_leads', JSON.stringify(leads)); }
  function esc(s) { return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  // ── Stats ─────────────────────────────────────────────────────────────────
  function updateStats() {
    document.getElementById('s0').textContent = leads.length;
    document.getElementById('s1').textContent = leads.filter(l=>l.status==='new').length;
    document.getElementById('s2').textContent = leads.filter(l=>l.status==='contacted').length;
    document.getElementById('s3').textContent = leads.filter(l=>l.status==='converted').length;
  }

  // ── Render Table ─────────────────────────────────────────────────────────
  function render() {
    updateStats();
    const q = document.getElementById('q').value.toLowerCase();
    let list = leads.filter(l => {
      const matchF = filter === 'all' || l.status === filter;
      const matchQ = !q || l.name.toLowerCase().includes(q) || l.email.toLowerCase().includes(q) || l.source.toLowerCase().includes(q);
      return matchF && matchQ;
    });
    const tbody = document.getElementById('tbody');
    if (!list.length) {
      tbody.innerHTML = `<tr><td colspan="7"><div class="empty">😶 No leads found</div></td></tr>`;
      return;
    }
    tbody.innerHTML = list.map(l => `
      <tr>
        <td><div class="name-cell"><div class="nm">${esc(l.name)}</div><div class="em">${esc(l.email)}</div></div></td>
        <td>${esc(l.phone||'—')}</td>
        <td><span class="src-tag">${esc(l.source)}</span></td>
        <td><span class="badge b-${l.status}">${l.status.charAt(0).toUpperCase()+l.status.slice(1)}</span></td>
        <td style="color:var(--muted);font-size:13px">${esc(l.date)}</td>
        <td style="color:var(--muted);font-size:13px;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${esc(l.notes)}">${esc(l.notes)||'—'}</td>
        <td><div class="act">
          <div class="ic-btn" onclick="edit('${l.id}')" title="Edit">✏️</div>
          <div class="ic-btn del" onclick="del('${l.id}')" title="Delete">🗑️</div>
        </div></td>
      </tr>`).join('');
  }

  // ── Filter ────────────────────────────────────────────────────────────────
  function setF(f, btn) {
    filter = f;
    document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    render();
  }

  // ── Modal ─────────────────────────────────────────────────────────────────
  function openForm(lead=null) {
    editId = lead ? lead.id : null;
    document.getElementById('mtitle').textContent = lead ? 'Edit Lead' : 'Add Lead';
    document.getElementById('fn').value    = lead?.name   || '';
    document.getElementById('fe').value    = lead?.email  || '';
    document.getElementById('fp').value    = lead?.phone  || '';
    document.getElementById('fs').value    = lead?.source || 'Website';
    document.getElementById('fst').value   = lead?.status || 'new';
    document.getElementById('fnotes').value= lead?.notes  || '';
    document.getElementById('ov').classList.add('open');
    document.getElementById('fn').focus();
  }
  function closeForm() { document.getElementById('ov').classList.remove('open'); editId=null; }
  function bgClose(e) { if(e.target===document.getElementById('ov')) closeForm(); }

  // ── Save ──────────────────────────────────────────────────────────────────
  function save() {
    const name  = document.getElementById('fn').value.trim();
    const email = document.getElementById('fe').value.trim();
    if (!name || !email) { toast('Name & email are required!','err'); return; }

    const data = {
      name, email,
      phone:  document.getElementById('fp').value.trim(),
      source: document.getElementById('fs').value,
      status: document.getElementById('fst').value,
      notes:  document.getElementById('fnotes').value.trim(),
      date:   today(),
    };

    if (editId) {
      const i = leads.findIndex(l=>l.id===editId);
      leads[i] = { ...leads[i], ...data };
      toast('Lead updated ✅','ok');
    } else {
      leads.unshift({ id:uid(), ...data });
      toast('Lead added ✅','ok');
    }
    saveData(); closeForm(); render();
  }

  // ── Edit / Delete ─────────────────────────────────────────────────────────
  function edit(id) { openForm(leads.find(l=>l.id===id)); }
  function del(id) {
    if (!confirm('Delete this lead?')) return;
    leads = leads.filter(l=>l.id!==id);
    saveData(); render(); toast('Lead deleted','ok');
  }

  // ── Toast ─────────────────────────────────────────────────────────────────
  function toast(msg, type='ok') {
    const t = document.getElementById('toast');
    t.textContent = msg; t.className = `show ${type}`;
    setTimeout(()=>t.classList.remove('show'), 2800);
  }

  // ── Init ──────────────────────────────────────────────────────────────────
  render();

function toggleTheme() {
  document.body.classList.toggle("light");
}

function exportCSV() {
  let csv = "Name,Email,Phone,Source,Status,Date\n";
  leads.forEach(l => {
    csv += `${l.name},${l.email},${l.phone},${l.source},${l.status},${l.date}\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = "crm_data.csv";
  a.click();
}

</script>
</body>
</html>
