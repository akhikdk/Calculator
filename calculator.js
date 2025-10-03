 let value1 = null
        let value2 = null
        let operator = null



        function clean() {
            document.getElementById("output").innerHTML = 0
            value1 = null
            value2 = null
            operator = null

        }


        function calculate() {

            if (operator == "+") {
                document.getElementById("output").innerHTML = value1 + value2
            } else if (operator == "-") {
                document.getElementById("output").innerHTML = value1 - value2
            } else if (operator == "*") {
                document.getElementById("output").innerHTML = value1 * value2
            } else if (operator == "/") {
                document.getElementById("output").innerHTML = value1 / value2
            }

        }

        function appendToScreen(value) {
            let elem = document.getElementById("output").innerHTML = value

            if (value == "+") {
                document.getElementById("output").innerHTML = value
                operator = "+"
                return
            } else if (value == "-") {
                document.getElementById("output").innerHTML = value
                operator = "-"
                return
            } else if (value == "*") {
                document.getElementById("output").innerHTML = value
                operator = "*"
                return
            } else if (value == "/") {
                document.getElementById("output").innerHTML = value
                operator = "/"
                return
            }

            if (value1 == null) {
                value1 = parseInt(value)
                return
            }

            if (value2 == null) {
                value2 = parseInt(value)
            }

        }