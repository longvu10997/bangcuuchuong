let i, j, bang;
bang = "<table border='1' width='800' cellspacing ='0' cellpadding='3'>";
for (let i = 2; i < 11; i++) {
    bang = bang + "<tr>";
    for (let j = 1; j < 10; j++) {
        bang = bang + "<td>" + i + "x" + j + " = " + i * j + "</td>";
    }
    bang = bang + "</tr>";
}
bang = bang + "</table>"
document.write(bang);