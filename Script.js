$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('#toTop:hidden').stop(true, true).fadeIn();
    } else {
        $('#toTop').stop(true, true).fadeOut();
    }
});

window.onload = function () {
    let links = "";
    let linkArr = [];
    let tempArr = [];
    let certNo = "";
    let schoolName = "";
    let className = "";
    let stringy = "";
    let fileNames = [];
    //$("#test").load("links.txt");
    /*
    var request = new XMLHttpRequest();
    request.open('GET', '/Certs/', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var resp = request.responseText;
        }
    };

    request.send();
    var directory_listing = resp;
    var regexp = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/i;
    var match, files = [];

    while ((match = regexp.exec(resp)) != null) {
        files.push(match.index);
    }*/
    $.get('links.txt', function (data1) {
        
        fileNames = files.split("^");
        let testString = "";
        testString = fileNames[3];
        console.log(fileNames);
        fileNames.shift();
        fileNames.shift();
        console.log(testString);
        //list of file names, I want to automate this to load an array with filenames from the /Certs folder on my website!
        /*fileNames = ["001_Coursera - John Hopkin's University_The Data Scientist's Toolbox.png",
            "002_Coursera - University of Michigan_Python, Programming for Everybody.png",
            "003_edX - ETH Zurich_CAMSx - Computing Art, Magic, Science.png",
            "004_edX - Microsoft_C Sharp Programming DEV204x.png",
            "005_edX - Universidad Carlos III de Madrid_Java, Introduction to Programming with.png",
            "006_Codecademy_SQL.png",
            "007_Codecademy_Java.png",
            "008_Codecademy_Git and GitHub.png",
            "009_Codecademy_SQL Analyze Business Metrics.png",
            "010_Codecademy_Command Line.png",
            "011_SoloLearn_SQL.png",
            "012_SoloLearn_Swift.png",
            "013_SoloLearn_C++.png",
            "014_SoloLearn_C Sharp.png",
            "015_SoloLearn_Python Core.png",
            "016_SoloLearn_PHP.png",
            "017_SoloLearn_Java.png",
            "018_SoloLearn_HTML.png",
            "019_SoloLearn_JavaScript.jpg",
            "020_SoloLearn_CSS.png",
            "021_Codecademy_SQL, How to Transform Tables.png",
            "022_Udemy_C Sharp API Database Testing With Specflow.jpg",
            "023_SoloLearn_jQuery.png",
            "024_SoloLearn_Ruby.png",
            "025_SoloLearn_C.png",
            "026_SoloLearn_Python for Beginners.png",
            "027_Udemy_Unity Basics.jpg",
            "028_SoloLearn_Python for Finance.png",
            "029_SoloLearn_Python Data Structures.png",
            "030_SoloLearn_Python Intermediate.png",
            "031_Mammoth Interactive_Python Coding Bootcamp.png",
            "032_SoloLearn_Web Coding for Marketers.png",
            "033_StackSkills_Git Started with GitHub.png",
            "034_SoloLearn_Web Development Fundamentals.png",
            "035_SoloLearn_Web Design, Responsive.png",
            "036_SoloLearn_React+Redux.png"
        ]*/
        //assignment of data from get into links string
        links = data1;
        //my txt file of links is actually comma seperated, making array from previous string
        linkArr = links.split(",");
        for (let link in fileNames) { //go through all links
            console.log(String(fileNames[link]))
            tempArr = String(fileNames[link]).split("."); //make temp array of element from fileNames with file extention seperated
            tempArr = tempArr[0].split("_"); //split filename for table elements
            certNo = tempArr[0]; //get cert # for id of certificate, helps sort certs
            schoolName = tempArr[1]; //school name
            className = tempArr[2]; //class name
            $('#myTable tbody') //my table
                .append($('<tr><td class="certs" id="cert' + certNo +
                    '"><a href="' + linkArr[link] + '" target="_blank" rel="noreferrer noopener"><img src="Certs/'
                    + fileNames[link] + '" alt="Certificate from ' + schoolName + ' for ' + className + '." /></a></td><td class ="schools">'
                    + schoolName + '</td><td class="classes">' + className + '</td></tr>'
                )); //append table based on given arrays
        }
        
    });
    
}

function sortTable(n) {
    // Code from https://www.w3schools.com/howto/howto_js_sort_table.asp
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        if (n == 0) {
            /* This sorts the certificates by the date I recieved them,
            this is my own modification of the table sorting code! */
            for (i = 1; i < (rows.length - 1); i++) {
                // Start by saying there should be no switching:
                shouldSwitch = false;
                /* Get the two elements you want to compare,
                one from current row and one from the next: */
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                /* Check if the two rows should switch place,
                based on the direction, asc or desc: */
                if (dir == "asc") {
                    if (x.id > y.id) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (x.id < y.id) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }
        else {
            for (i = 1; i < (rows.length - 1); i++) {
                // Start by saying there should be no switching:
                shouldSwitch = false;
                /* Get the two elements you want to compare,
                one from current row and one from the next: */
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                /* Check if the two rows should switch place,
                based on the direction, asc or desc: */
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }
        
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
