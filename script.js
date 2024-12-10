function calculateShare() {
    const totalShelfSpace = document.getElementById('totalShelfSpace').value;
    const brandSpace = document.getElementById('brandSpace').value;
    const targetShare = document.getElementById('targetShare').value;
    const resultElement = document.getElementById('result');

    if (totalShelfSpace <= 0 || brandSpace < 0 || targetShare < 0 || targetShare > 100) {
        resultElement.innerHTML = '<h2>Results:</h2>Please enter valid numbers.';
        return;
    }

    const currentShare = (brandSpace / totalShelfSpace) * 100;
    const difference = currentShare - targetShare;
    
    // Calculate how many units are needed to meet the target
    const targetUnits = (targetShare / 100) * totalShelfSpace;
    const unitsNeeded = targetUnits - brandSpace;
    
    let resultText = '<h2>Results:</h2>';
    resultText += `<p>Current Share: ${currentShare.toFixed(2)}%</p>`;
    resultText += `<p>Difference from Target: ${difference.toFixed(2)}%</p>`;
    resultText += `<p>Units Needed: ${unitsNeeded.toFixed(2)} units</p>`;

    resultElement.innerHTML = resultText;
}
