        let history = [];

        function convertTemperature() {
            const inputTemp = parseFloat(document.getElementById("inputTemp").value);
            const inputUnit = document.getElementById("inputUnit").value;
            const outputUnit = document.getElementById("outputUnit").value;

            if (!isNaN(inputTemp)) {
                let result;
                if (inputUnit === "celsius") {
                    if (outputUnit === "fahrenheit") {
                        result = (inputTemp * 9/5) + 32;
                    } else if (outputUnit === "kelvin") {
                        result = inputTemp + 273.15;
                    } else {
                        result = inputTemp;
                    }
                } else if (inputUnit === "fahrenheit") {
                    if (outputUnit === "celsius") {
                        result = (inputTemp - 32) * 5/9;
                    } else if (outputUnit === "kelvin") {
                        result = (inputTemp - 32) * 5/9 + 273.15;
                    } else {
                        result = inputTemp;
                    }
                } else if (inputUnit === "kelvin") {
                    if (outputUnit === "celsius") {
                        result = inputTemp - 273.15;
                    } else if (outputUnit === "fahrenheit") {
                        result = (inputTemp - 273.15) * 9/5 + 32;
                    } else {
                        result = inputTemp;
                    }
                }

                const conversionString = `${inputTemp.toFixed(2)}° ${inputUnit.toUpperCase()} is equal to ${result.toFixed(2)}° ${outputUnit.toUpperCase()}`;
                document.getElementById("result").innerHTML = conversionString;
                addToHistory(conversionString);
            } else {
                document.getElementById("result").innerHTML = "Please enter a valid temperature.";
            }
        }

        function switchUnits() {
            const inputUnit = document.getElementById("inputUnit").value;
            const outputUnit = document.getElementById("outputUnit").value;

            document.getElementById("inputUnit").value = outputUnit;
            document.getElementById("outputUnit").value = inputUnit;
        }

        function resetForm() {
            document.getElementById("inputTemp").value = "";
            document.getElementById("result").innerHTML = "";
        }

        function addToHistory(conversionString) {
            history.push({ conversion: conversionString, timestamp: new Date().toLocaleString() });
            updateHistoryList();
        }

        function updateHistoryList() {
            const historyList = document.getElementById("history-list");
            historyList.innerHTML = "";
            history.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = `${item.timestamp}: ${item.conversion}`;
                historyList.appendChild(listItem);
            });
        }
        function clearHistory() {
            history = [];
            updateHistoryList();
        }
