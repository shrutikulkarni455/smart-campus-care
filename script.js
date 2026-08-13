* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    background: #f4f7fb;
    color: #263238;
}

.hidden {
    display: none !important;
}


/* LOGIN */

.login-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #1565c0, #42a5f5);
    padding: 20px;
}

.login-box {
    width: 100%;
    max-width: 430px;
    background: white;
    padding: 35px;
    border-radius: 18px;
    text-align: center;
    box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}

.logo {
    font-size: 55px;
}

.login-box h1 {
    margin: 10px 0;
    color: #1565c0;
}

.login-box p {
    margin-bottom: 20px;
    color: #666;
}

label {
    display: block;
    text-align: left;
    font-weight: bold;
    margin: 10px 0 6px;
}

input,
select,
textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #d0d7de;
    border-radius: 8px;
    font-size: 15px;
}

textarea {
    min-height: 110px;
    resize: vertical;
}

button {
    border: none;
    background: #1565c0;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
}

button:hover {
    background: #0d47a1;
}

.login-box button {
    width: 100%;
    margin-top: 15px;
}

.demo-login {
    margin-top: 20px;
    padding: 15px;
    background: #eef6ff;
    border-radius: 10px;
}

.demo-login p {
    margin: 6px 0;
    font-size: 13px;
}

.error {
    color: #d32f2f !important;
    margin-top: 15px;
}

.success {
    color: #2e7d32;
    font-weight: bold;
    margin-top: 15px;
}


/* HEADER */

header {
    background: #1565c0;
    color: white;
    padding: 20px 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header h1 {
    margin-bottom: 5px;
}

header p {
    opacity: 0.9;
}

.logout {
    background: white;
    color: #1565c0;
}

.logout:hover {
    background: #eeeeee;
}


/* CONTAINER */

.container {
    width: 90%;
    max-width: 1250px;
    margin: 30px auto;
}

.container > h2 {
    margin-bottom: 25px;
}


/* STATISTICS */

.stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 30px;
}

.stat-card {
    background: white;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

.stat-card span {
    font-size: 28px;
}

.stat-card h3 {
    color: #666;
    margin: 10px 0;
}

.stat-card h2 {
    color: #1565c0;
    font-size: 32px;
}


/* FORM */

.form-section {
    background: white;
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 30px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

.form-section h2 {
    margin-bottom: 20px;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}


/* FILTER */

.filter-area {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 15px;
}


/* TABLE */

.table-section {
    background: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

.table-wrapper {
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 14px;
    border-bottom: 1px solid #eee;
    text-align: left;
}

th {
    background: #1565c0;
    color: white;
}

tr:hover {
    background: #f5f9ff;
}

.status-pending {
    color: #ef6c00;
    font-weight: bold;
}

.status-resolved {
    color: #2e7d32;
    font-weight: bold;
}

.priority-high {
    color: #d32f2f;
    font-weight: bold;
}

.priority-medium {
    color: #ef6c00;
    font-weight: bold;
}

.priority-low {
    color: #2e7d32;
    font-weight: bold;
}

.resolve-btn {
    background: #2e7d32;
    padding: 8px 12px;
}

.resolve-btn:hover {
    background: #1b5e20;
}


/* STUDENT COMPLAINT CARD */

.complaint-card {
    background: white;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 15px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.07);
}

.complaint-card h3 {
    color: #1565c0;
    margin-bottom: 8px;
}

.complaint-card p {
    margin: 5px 0;
}


/* RESPONSIVE */

@media (max-width: 900px) {

    .stats {
        grid-template-columns: repeat(2, 1fr);
    }

    .form-grid {
        grid-template-columns: 1fr;
    }

    .filter-area {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 600px) {

    .stats {
        grid-template-columns: 1fr;
    }

    header {
        flex-direction: column;
        gap: 15px;
        text-align: center;
    }

    .container {
        width: 94%;
    }
}
