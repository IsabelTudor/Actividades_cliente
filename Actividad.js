

let romboStr = "";

            for (let i = 1; i <= 9; i += 2) {
                const espacios = " ".repeat((9 - i) / 2);
                const asteriscos = "*".repeat(i);
                romboStr += espacios + asteriscos + "\n";
            }

            for (let i = 9 - 2; i >= 1; i -= 2) {
                const espacios = " ".repeat((9 - i) / 2);
                const asteriscos = "*".repeat(i);
                romboStr += espacios + asteriscos + "\n";
            }