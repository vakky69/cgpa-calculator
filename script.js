function calculateCGPA() {
    const percentage = parseFloat(document.getElementById('percentage').value);
    let cgpa;

    if (percentage >= 0 && percentage <= 100) {
        cgpa = (percentage / 10).toFixed(2);
        document.getElementById('result').innerText = `Your CGPA is: ${cgpa}`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid percentage (0-100).';
    }
}

function calculatePercentage() {
    const cgpa = parseFloat(document.getElementById('cgpa').value);
    let percentage;

    if (cgpa >= 0 && cgpa <= 10) {
        percentage = (cgpa * 10).toFixed(2);
        document.getElementById('result').innerText = `Your Percentage is: ${percentage}%`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid CGPA (0-10).';
    }
}
