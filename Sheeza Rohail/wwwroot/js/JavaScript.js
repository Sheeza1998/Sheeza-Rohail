﻿function grade() {
    var assignment = document.getElementById("assignment").value / 100;
    var group = document.getElementById("group").value / 100;
    var quiz = document.getElementById("quiz").value / 100;
    var exam = document.getElementById("exam").value / 100;
    var intex = document.getElementById("intex").value / 100;
    var Grade = '';

    assignment = assignment * (2000 * .5);
    group = group * (2000 * .1);
    quiz = quiz * (2000 * .1);
    exam = exam * (2000 * .2);
    intex = intex * (2000 * .1);

    var total = 0;
    var pct;

    total = assignment + group + quiz + exam + intex;
    pct = (total / 2000) * 100;

    if (pct >= 94) {
        Grade = 'A';
    }
    else if (pct < 94 && pct >= 90) {
        Grade = 'A-';
    }
    else if (pct < 90 && pct >= 87) {
        Grade = 'B+';
    }
    else if (pct < 87 && pct >= 84) {
        Grade = 'B';
    }
    else if (pct < 84 && pct >= 80) {
        Grade = 'B-';
    }
    else if (pct < 80 && pct >= 77) {
        Grade = 'C+';
    }
    else if (pct < 77 && pct >= 74) {
        Grade = 'C';
    }
    else if (pct < 74 && pct >= 70) {
        Grade = 'C-';
    }
    else if (pct < 70 && pct >= 67) {
        Grade = 'D+';
    }
    else if (pct < 67 && pct >= 63) {
        Grade = 'D';
    }
    else if (pct < 63 && pct >= 60) {
        Grade = 'D-';
    }
    else {
        Grade = 'E';
    }

   alert('Your grade is ' + Grade + ' and your percentage is ' + pct);
 }