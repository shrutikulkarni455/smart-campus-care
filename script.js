let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

if (complaints.length === 0) {
    complaints = [
        {
            id: "CMP001",
            student: "Rahul Sharma",
            category: "Wi-Fi",
            location: "Computer Lab 2",
            priority: "High",
            description: "Wi-Fi is not working.",
            status: "Pending"
        },
        {
            id: "CMP002",
            student: "Ayesha Khan",
            category: "Cleaning",
            location: "Room 101",
            priority: "Medium",
            description: "Classroom needs cleaning.",
            status: "Resolved"
        }
    ];

    saveComplaints();
}

function saveComplaints() {
    localStorage.setItem("complaints", JSON.stringify(complaints));
}


/* LOGIN */

document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (email === "student@gmail.com" && password === "1234") {
        showStudentPage();
    }

    else if (email === "admin@gmail.com" && password === "1234") {
        showAdminPage();
    }

    else {
        document.getElementById("loginError").innerText =
            "Invalid email or password.";
    }
});


/* STUDENT PAGE */

function showStudentPage() {

    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("studentPage").classList.remove("hidden");
    document.getElementById("adminPage").classList.add("hidden");

    displayStudentComplaints();
}


/* ADMIN PAGE */

function showAdminPage() {

    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("studentPage").classList.add("hidden");
    document.getElementById("adminPage").classList.remove("hidden");

    displayAdminComplaints();
}


/* LOGOUT */

function logout() {

    document.getElementById("loginPage").classList.remove("hidden");
    document.getElementById("studentPage").classList.add("hidden");
    document.getElementById("adminPage").classList.add("hidden");

    document.getElementById("loginForm").reset();
}


/* SUBMIT COMPLAINT */

document.getElementById("complaintForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const complaint = {
        id: "CMP" + String(complaints.length + 1).padStart(3, "0"),

        student: document.getElementById("studentName").value,

        category: document.getElementById("category").value,

        location: document.getElementById("location").value,

        priority: document.getElementById("priority").value,

        description: document.getElementById("description").value,

        status: "Pending"
    };

    complaints.push(complaint);

    saveComplaints();

    document.getElementById("successMessage").innerText =
        "Complaint submitted successfully! ID: " + complaint.id;

    document.getElementById("complaintForm").reset();

    displayStudentComplaints();
});


/* STUDENT COMPLAINTS */

function displayStudentComplaints() {

    const container = document.getElementById("studentComplaints");

    container.innerHTML = "";

    complaints.forEach(function(complaint) {

        const card = document.createElement("div");

        card.className = "complaint-card";

        card.innerHTML = `
            <h3>${complaint.id}</h3>

            <p><strong>Category:</strong> ${complaint.category}</p>

            <p><strong>Location:</strong> ${complaint.location}</p>

            <p><strong>Priority:</strong> ${complaint.priority}</p>

            <p><strong>Description:</strong> ${complaint.description}</p>

            <p>
                <strong>Status:</strong>
                <span class="${
                    complaint.status === "Pending"
                    ? "status-pending"
                    : "status-resolved"
                }">
                    ${complaint.status}
                </span>
            </p>
        `;

        container.appendChild(card);
    });

    updateStudentStats();
}


/* STUDENT STATISTICS */

function updateStudentStats() {

    const total = complaints.length;

    const pending = complaints.filter(
        c => c.status === "Pending"
    ).length;

    const resolved = complaints.filter(
        c => c.status === "Resolved"
    ).length;

    document.getElementById("studentTotal").innerText = total;

    document.getElementById("studentPending").innerText = pending;

    document.getElementById("studentResolved").innerText = resolved;
}


/* ADMIN TABLE */

function displayAdminComplaints() {

    const table = document.getElementById("adminTable");

    table.innerHTML = "";

    const search = document.getElementById("search").value.toLowerCase();

    const statusFilter = document.getElementById("statusFilter").value;

    const categoryFilter = document.getElementById("categoryFilter").value;

    const filtered = complaints.filter(function(complaint) {

        const searchMatch =
            complaint.id.toLowerCase().includes(search) ||
            complaint.student.toLowerCase().includes(search) ||
            complaint.location.toLowerCase().includes(search) ||
            complaint.category.toLowerCase().includes(search);

        const statusMatch =
            statusFilter === "All" ||
            complaint.status === statusFilter;

        const categoryMatch =
            categoryFilter === "All" ||
            complaint.category === categoryFilter;

        return searchMatch && statusMatch && categoryMatch;
    });


    filtered.forEach(function(complaint) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${complaint.id}</td>

            <td>${complaint.student}</td>

            <td>${complaint.category}</td>

            <td>${complaint.location}</td>

            <td>${complaint.priority}</td>

            <td>${complaint.description}</td>

            <td class="${
                complaint.status === "Pending"
                ? "status-pending"
                : "status-resolved"
            }">
                ${complaint.status}
            </td>

            <td>
                ${
                    complaint.status === "Pending"
                    ?
                    `<button
                        class="resolve-btn"
                        onclick="resolveComplaint('${complaint.id}')">
                        Resolve
                    </button>`
                    :
                    "✓ Done"
                }
            </td>
        `;

        table.appendChild(row);
    });

    updateAdminStats();
}


/* RESOLVE COMPLAINT */

function resolveComplaint(id) {

    const complaint = complaints.find(
        c => c.id === id
    );

    if (complaint) {

        complaint.status = "Resolved";

        saveComplaints();

        displayAdminComplaints();
    }
}


/* ADMIN STATISTICS */

function updateAdminStats() {

    const total = complaints.length;

    const pending = complaints.filter(
        c => c.status === "Pending"
    ).length;

    const resolved = complaints.filter(
        c => c.status === "Resolved"
    ).length;

    const high = complaints.filter(
        c => c.priority === "High"
    ).length;

    document.getElementById("adminTotal").innerText = total;

    document.getElementById("adminPending").innerText = pending;

    document.getElementById("adminResolved").innerText = resolved;

    document.getElementById("adminHigh").innerText = high;
}
