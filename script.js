let subjects = [];

function showDetails(){

    document.getElementById(
        "landingPage"
    ).style.display="none";

    document.getElementById(
        "detailsPage"
    ).style.display="block";
}

function showSubjects(){

    document.getElementById(
        "detailsPage"
    ).style.display="none";

    document.getElementById(
        "subjectsPage"
    ).style.display="block";
}

function addSubject(){

    let name =
        document.getElementById(
            "subjectName"
        ).value;

    let count =
        parseInt(
            document.getElementById(
                "subjectCount"
            ).value
        );

    if(!name || !count){
        alert("Enter valid subject");
        return;
    }

    subjects.push({
        name:name,
        count:count
    });

    let li =
        document.createElement("li");

    li.innerText =
        `${name} (${count})`;

    document.getElementById(
        "subjectList"
    ).appendChild(li);

    document.getElementById(
        "subjectName"
    ).value="";

    document.getElementById(
        "subjectCount"
    ).value="";
}

function generateTimetable(){

    let days =
        parseInt(
            document.getElementById(
                "workingDays"
            ).value
        );

    let subjectPool=[];

    subjects.forEach(sub=>{

        for(let i=0;i<sub.count;i++){

            subjectPool.push(
                sub.name
            );
        }
    });

    subjectPool.sort(
        ()=>Math.random()-0.5
    );

    let html =
    `<table>
        <tr>
            <th>Day</th>
            <th>P1</th>
            <th>P2</th>
            <th>P3</th>
            <th>Lunch</th>
            <th>P4</th>
            <th>P5</th>
        </tr>`;

    let index=0;

    for(let d=1; d<=days; d++){

        html += `<tr>
            <td>Day ${d}</td>`;

        for(let p=1;p<=3;p++){

            html +=
            `<td>${
                subjectPool[index]
                || "Free"
            }</td>`;

            index++;
        }

        html +=
        `<td class="lunch">
            Lunch
        </td>`;

        for(let p=4;p<=5;p++){

            html +=
            `<td>${
                subjectPool[index]
                || "Free"
            }</td>`;

            index++;
        }

        html += `</tr>`;
    }

    html += `</table>`;

    document.getElementById(
        "subjectsPage"
    ).style.display="none";

    document.getElementById(
        "resultPage"
    ).style.display="block";

    document.getElementById(
        "timetableContainer"
    ).innerHTML=html;
}