function convertTemperature() {
    let celsiusInput = parseFloat(document.getElementById('celsius').value);
    let fahrenheitInput = parseFloat(document.getElementById('fahrenheit').value);
    let kelvinInput = parseFloat(document.getElementById('kelvin').value);

    if (isNaN(celsiusInput) && isNaN(fahrenheitInput) && isNaN(kelvinInput)) {
        alert('Masukkan minimal satu nilai suhu!');
        return;
    }

    let resultText = '';

    if (!isNaN(celsiusInput)) {
        let fahrenheit = (celsiusInput * 9 / 5) + 32;
        let kelvin = celsiusInput + 273.15;

        resultText += `<h3>Hasil Konversi Celsius:</h3>`;
        resultText += `<p>Celsius: ${celsiusInput}°C</p>`;
        resultText += `<p>Fahrenheit: ((${celsiusInput} * 9 / 5) + 32) = ${fahrenheit.toFixed(2)}°F</p>`;
        resultText += `<p>Kelvin: (${celsiusInput} + 273.15) = ${kelvin.toFixed(2)}K</p>`;
        
        document.getElementById('result-celsius').textContent = `${celsiusInput}°C`;
        document.getElementById('result-fahrenheit').textContent = `${fahrenheit.toFixed(2)}°F`;
        document.getElementById('result-kelvin').textContent = `${kelvin.toFixed(2)}K`;
    }

    if (!isNaN(fahrenheitInput)) {
        let celsius = (fahrenheitInput - 32) * 5 / 9;
        let kelvin = celsius + 273.15;

        resultText += `<h3>Hasil Konversi Fahrenheit:</h3>`;
        resultText += `<p>Celsius: (${fahrenheitInput} - 32) * 5 / 9 = ${celsius.toFixed(2)}°C</p>`;
        resultText += `<p>Fahrenheit: ${fahrenheitInput}°F</p>`;
        resultText += `<p>Kelvin: (${celsius.toFixed(2)} + 273.15) = ${kelvin.toFixed(2)}K</p>`;
        
        document.getElementById('result-celsius').textContent = `${celsius.toFixed(2)}°C`;
        document.getElementById('result-fahrenheit').textContent = `${fahrenheitInput}°F`;
        document.getElementById('result-kelvin').textContent = `${kelvin.toFixed(2)}K`;
    }

    if (!isNaN(kelvinInput)) {
        let celsius = kelvinInput - 273.15;
        let fahrenheit = (celsius * 9 / 5) + 32;

        resultText += `<h3>Hasil Konversi Kelvin:</h3>`;
        resultText += `<p>Celsius: ${kelvinInput} - 273.15 = ${celsius.toFixed(2)}°C</p>`;
        resultText += `<p>Fahrenheit: (${celsius.toFixed(2)} * 9 / 5) + 32 = ${fahrenheit.toFixed(2)}°F</p>`;
        resultText += `<p>Kelvin: ${kelvinInput}K</p>`;
        
        document.getElementById('result-celsius').textContent = `${celsius.toFixed(2)}°C`;
        document.getElementById('result-fahrenheit').textContent = `${fahrenheit.toFixed(2)}°F`;
        document.getElementById('result-kelvin').textContent = `${kelvinInput}K`;
    }

    document.getElementById('conversion-details').innerHTML = resultText;
}

function resetFields() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('kelvin').value = '';
    document.getElementById('result-celsius').textContent = '-';
    document.getElementById('result-fahrenheit').textContent = '-';
    document.getElementById('result-kelvin').textContent = '-';
    document.getElementById('conversion-details').textContent = '';
}
