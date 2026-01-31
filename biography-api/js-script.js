// 1. WELCOME PROMPT
function askName() {
    let person = prompt("Please enter your name:", "Guest");
    if (person != null && person != "") {
        document.getElementById("user-name").innerText = person;
    }
}
askName();

// 2. VALIDATE THE "COMMENT" FORM (The first one)
function validateCommentForm() {
    const name = document.forms["commentForm"]["username"].value;
    const comment = document.forms["commentForm"]["usercomment"].value;

    if (name == "" || comment == "") {
        alert("Username and Comment cannot be empty!");
        return false;
    }

    const resultBox = document.getElementById("comment-result-box");
    resultBox.className = "border border-white p-5 h-full font-mono text-sm leading-relaxed";
    resultBox.innerHTML = `
        <strong class="text-brand-yellow">New Comment Posted:</strong><br><br>
        <p><strong>User:</strong> ${name}</p>
        <p><strong>Says:</strong> "${comment}"</p>
    `;

    return false; 
}

// 3. VALIDATE THE "MESSAGE US" FORM (The new one with strict requirements)
function validateMessageForm() {
    // Get values from the new form
    const fullName = document.forms["messageForm"]["fullname"].value;
    const email = document.forms["messageForm"]["email"].value;
    const phone = document.forms["messageForm"]["phone"].value;
    const message = document.forms["messageForm"]["message"].value;

    // Strict Validation
    if (fullName == "" || email == "" || phone == "" || message == "") {
        alert("All fields (Name, Email, Phone, Message) are required!");
        return false;
    }

    // Display Data
    const resultBox = document.getElementById("message-result-box");
    resultBox.className = "border border-brand-yellow p-5 h-full font-mono text-sm leading-relaxed bg-black";
    resultBox.innerHTML = `
        <strong class="text-brand-yellow block mb-4">Message Sent Successfully!</strong>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p class="text-gray-500 text-xs mt-4">Received at: ${new Date().toUTCString()}</p>
    `;

    return false;
}