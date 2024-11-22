async function analyzeResume() {
    const response = await fetch('https://api.resumake.io/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({
            resumeText: "Resume content here..."
        })
    });
    const result = await response.json();
    // Process result and display analysis on the page
}
