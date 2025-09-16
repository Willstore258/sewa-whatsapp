<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sewa WhatsApp - Login</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #128C7E 0%, #25D366 100%);
            color: #333;
            line-height: 1.6;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .container {
            width: 100%;
            max-width: 450px;
            background-color: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .header {
            background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
            color: white;
            padding: 25px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        
        .header p {
            font-size: 16px;
            opacity: 0.9;
        }
        
        .form-container {
            padding: 25px;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #128C7E;
        }
        
        .form-group input {
            width: 100%;
            padding: 14px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s;
        }
        
        .form-group input:focus {
            border-color: #25D366;
            outline: none;
        }
        
        .btn {
            background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
            color: white;
            border: none;
            padding: 15px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
            transition: all 0.3s ease;
            margin-top: 10px;
        }
        
        .btn:hover {
            opacity: 0.9;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .btn-register {
            background: white;
            color: #128C7E;
            border: 2px solid #128C7E;
        }
        
        .form-footer {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
        }
        
        .form-footer a {
            color: #128C7E;
            text-decoration: none;
            font-weight: 600;
        }
        
        .form-footer a:hover {
            text-decoration: underline;
        }
        
        .message {
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
            display: none;
        }
        
        .error {
            background-color: #ffebee;
            color: #d32f2f;
            border: 1px solid #ffcdd2;
        }
        
        .success {
            background-color: #e8f5e9;
            color: #388e3c;
            border: 1px solid #c8e6c9;
        }
        
        .hidden {
            display: none;
        }
        
        .whatsapp-icon {
            font-size: 40px;
            margin-bottom: 15px;
        }
        
        /* Dashboard Styles */
        .dashboard-container {
            width: 100%;
            max-width: 1200px;
            background-color: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            padding: 20px;
        }
        
        .dashboard-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
            color: white;
            border-radius: 10px;
            margin-bottom: 20px;
        }
        
        .user-welcome {
            font-size: 22px;
            font-weight: 600;
        }
        
        .username {
            background-color: rgba(255, 255, 255, 0.2);
            padding: 5px 15px;
            border-radius: 20px;
            font-weight: 700;
        }
        
        .logout-btn {
            background-color: white;
            color: #128C7E;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .logout-btn:hover {
            background-color: #f5f5f5;
            transform: translateY(-2px);
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .stat-card {
            background-color: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: transform 0.3s ease;
            border-top: 4px solid;
        }
        
        .stat-card:hover {
            transform: translateY(-5px);
        }
        
        .stat-title {
            font-size: 14px;
            color: #666;
            margin-bottom: 10px;
        }
        
        .stat-value {
            font-size: 24px;
            font-weight: 700;
        }
        
        .whatsapp-active {
            border-top-color: #25D366;
        }
        
        .whatsapp-active .stat-value {
            color: #25D366;
        }
        
        .whatsapp-disconnected {
            border-top-color: #FF4D4D;
        }
        
        .whatsapp-disconnected .stat-value {
            color: #FF4D4D;
        }
        
        .blast-today {
            border-top-color: #FFA500;
        }
        
        .blast-today .stat-value {
            color: #FFA500;
        }
        
        .reward-today {
            border-top-color: #FFD700;
        }
        
        .reward-today .stat-value {
            color: #FFD700;
        }
        
        .balance {
            border-top-color: #128C7E;
        }
        
        .balance .stat-value {
            color: #128C7E;
        }
        
        .action-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
        }
        
        .action-card {
            background-color: white;
            border-radius: 10px;
            padding: 25px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 150px;
            border-left: 4px solid #25D366;
        }
        
        .action-card:hover {
            background-color: #f0f8f4;
            transform: translateY(-3px);
        }
        
        .action-title {
            font-size: 18px;
            font-weight: 600;
            color: #128C7E;
            margin-bottom: 10px;
        }
        
        .action-description {
            font-size: 14px;
            color: #666;
        }
        
        .action-icon {
            font-size: 30px;
            margin-bottom: 15px;
            color: #25D366;
        }
        
        @media (max-width: 768px) {
            .stats-grid, .action-grid {
                grid-template-columns: 1fr;
            }
            
            .dashboard-header {
                flex-direction: column;
                text-align: center;
            }
            
            .user-welcome {
                margin-bottom: 15px;
            }
        }
    </style>
</head>
<body>
    <!-- Login/Register Form -->
    <div class="container" id="authContainer">
        <div class="header">
            <div class="whatsapp-icon">
                <i class="fab fa-whatsapp"></i>
            </div>
            <h1>Sewa WhatsApp</h1>
            <p>Masuk untuk mengelola akun Anda</p>
        </div>
        
        <div class="form-container">
            <div id="loginMessage" class="message error">Username atau password salah</div>
            <div id="registerMessage" class="message success">Pendaftaran berhasil! Silakan login</div>
            
            <!-- Login Form -->
            <form id="loginForm">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="Masukkan username" required>
                </div>
                
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Masukkan password" required>
                </div>
                
                <button type="submit" class="btn">Login</button>
                
                <div class="form-footer">
                    Belum punya akun? <a href="#" id="showRegister">Daftar di sini</a>
                </div>
            </form>
            
            <!-- Register Form -->
            <form id="registerForm" class="hidden">
                <div class="form-group">
                    <label for="newUsername">Username</label>
                    <input type="text" id="newUsername" placeholder="Buat username" required>
                </div>
                
                <div class="form-group">
                    <label for="newPassword">Password</label>
                    <input type="password" id="newPassword" placeholder="Buat password" required>
                </div>
                
                <div class="form-group">
                    <label for="confirmPassword">Konfirmasi Password</label>
                    <input type="password" id="confirmPassword" placeholder="Ulangi password" required>
                </div>
                
                <button type="submit" class="btn">Daftar</button>
                
                <div class="form-footer">
                    Sudah punya akun? <a href="#" id="showLogin">Login di sini</a>
                </div>
            </form>
        </div>
    </div>
    
    <!-- Dashboard (Awalnya disembunyikan) -->
    <div class="dashboard-container hidden" id="dashboard">
        <div class="dashboard-header">
            <div class="user-welcome">Selamat datang di portal user Anda, <span id="userDisplay" class="username">delta</span>!</div>
            <button class="logout-btn" onclick="logout()"><i class="fas fa-sign-out-alt"></i> Logout</button>
        </div>
        
        <div class="stats-grid">
            <div class="stat-card whatsapp-active">
                <div class="stat-title">WHATSAPP AKTIF</div>
                <div class="stat-value">0</div>
            </div>
            
            <div class="stat-card whatsapp-disconnected">
                <div class="stat-title">WHATSAPP TERPUTUS</div>
                <div class="stat-value">1</div>
            </div>
            
            <div class="stat-card blast-today">
                <div class="stat-title">BLAST HARI INI</div>
                <div class="stat-value">0</div>
            </div>
            
            <div class="stat-card reward-today">
                <div class="stat-title">REWARD HARI INI</div>
                <div class="stat-value">Rp0</div>
            </div>
            
            <div class="stat-card balance">
                <div class="stat-title">BALANCE</div>
                <div class="stat-value">Rp0</div>
            </div>
        </div>
        
        <div class="action-grid">
            <div class="action-card" onclick="alert('Fitur TAMBAH BOT diklik!')">
                <div class="action-icon">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="action-title">TAMBAH BOT</div>
                <div class="action-description">Kelola WhatsApp Bot</div>
            </div>
            
            <div class="action-card" onclick="alert('Fitur WITHDRAW diklik!')">
                <div class="action-icon">
                    <i class="fas fa-wallet"></i>
                </div>
                <div class="action-title">WITHDRAW</div>
                <div class="action-description">Tarik Saldo</div>
            </div>
        </div>
    </div>

    <script>
        // Data pengguna (disimulasikan database)
        let users = JSON.parse(localStorage.getItem('wa_users')) || {};
        
        // Elemen DOM
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const authContainer = document.getElementById('authContainer');
        const dashboard = document.getElementById('dashboard');
        const userDisplay = document.getElementById('userDisplay');
        const loginMessage = document.getElementById('loginMessage');
        const registerMessage = document.getElementById('registerMessage');
        const showRegister = document.getElementById('showRegister');
        const showLogin = document.getElementById('showLogin');
        
        // Toggle form login/register
        showRegister.addEventListener('click', function(e) {
            e.preventDefault();
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
            loginMessage.style.display = 'none';
            registerMessage.style.display = 'none';
        });
        
        showLogin.addEventListener('click', function(e) {
            e.preventDefault();
            registerForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
            loginMessage.style.display = 'none';
            registerMessage.style.display = 'none';
        });
        
        // Proses login
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (users[username] && users[username] === password) {
                // Login berhasil
                localStorage.setItem('wa_current_user', username);
                showDashboard(username);
            } else {
                // Login gagal
                loginMessage.style.display = 'block';
                registerMessage.style.display = 'none';
            }
        });
        
        // Proses pendaftaran
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('newUsername').value;
            const password = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                registerMessage.textContent = 'Password tidak cocok!';
                registerMessage.classList.remove('success');
                registerMessage.classList.add('error');
                registerMessage.style.display = 'block';
                return;
            }
            
            if (users[username]) {
                registerMessage.textContent = 'Username sudah digunakan!';
                registerMessage.classList.remove('success');
                registerMessage.classList.add('error');
                registerMessage.style.display = 'block';
                return;
            }
            
            // Simpan pengguna baru
            users[username] = password;
            localStorage.setItem('wa_users', JSON.stringify(users));
            
            // Tampilkan pesan sukses
            registerMessage.textContent = 'Pendaftaran berhasil! Silakan login';
            registerMessage.classList.remove('error');
            registerMessage.classList.add('success');
            registerMessage.style.display = 'block';
            
            // Reset form
            registerForm.reset();
            
            // Kembali ke form login setelah 2 detik
            setTimeout(() => {
                registerForm.classList.add('hidden');
                loginForm.classList.remove('hidden');
            }, 2000);
        });
        
        // Tampilkan dashboard
        function showDashboard(username) {
            authContainer.classList.add('hidden');
            dashboard.classList.remove('hidden');
            userDisplay.textContent = username;
        }
        
        // Logout
        function logout() {
            localStorage.removeItem('wa_current_user');
            dashboard.classList.add('hidden');
            authContainer.classList.remove('hidden');
            loginForm.reset();
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
            loginMessage.style.display = 'none';
            registerMessage.style.display = 'none';
        }
        
        // Cek status login saat halaman dimuat
        window.onload = function() {
            const currentUser = localStorage.getItem('wa_current_user');
            
            if (currentUser) {
                showDashboard(currentUser);
            }
        };
    </script>
</body>
</html>
