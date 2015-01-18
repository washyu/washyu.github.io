var bio = {
    "name": "Shaun Jackson",
    "role": "Programmer, Web Developer",
    "contacts": {
        "mobile": "(253) 219-7502",
        "email": "washyu@hotmail.com",
        "github": "https://github.com/washyu",
        "location": "Puyallup, WA, US"
    },
    "biopic": "images/me-smaller.jpg",
    "skills": [
        "C#",
        "Javascript",
        "Powershell",
        "HTML",
        "CSS",
        "Windows",
        "SQL",
        "Visual Studio",
        "GIT"
    ],
    "welcomeMessage": "Over ten years’ experience in automation execution, with emphasis on refining and streamlining existing manual processes. Especially skilled in C#, writing tools to reduce errors and decrease deficiencies in automation framework. Analytical, detail-oriented and motivated, preferring to work in fast-paced environments which emphasize new skill sets with short lead time."
}

bio.display = function() {
    var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);

    $("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", this.name));
    $("#header").append(HTMLbioPic.replace("%data%", this.biopic));
    $("#header").append(HTMLWelcomeMsg.replace("%data%", this.welcomeMessage));
    
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);

    if(bio.skills.length > 0)
    {   
        $("#header").append(HTMLskillsStart);
        this.skills.forEach(function(skill){
            $("#skills").append(HTMLskills.replace("%data%", skill));
        });
    }
}

var work = {
    "jobs": [
        {
            "employer": "Microsoft",
            "title": "Service Ops",
            "location": "Redmond, WA, US",
            "dates": "2009-2014",
            "description": "Ran manual and automated tests against new builds to verify build quality. Worked with developers and testers to resolve any issues that arose during tests. <br> \
                            -  Created scripts to be executed before test content, to gather machine hardware specifications.<br> \
                            -  Created automation tool to replace time-intensive manual scheduling, drastically cutting the time, from 2-3 hours to 20 minuetes, it took to schedule runs, as well as reducing scheduling errors.<br> \
                            -  Worked with the tools team to incorporate auto scheduling in to main test scheduling tool."
        },
        {
            "employer": "Volt (Microsoft)",
            "title": "Software Test Engineer III",
            "location": "Redmond, WA, US",
            "dates": "2006-2009",
            "description": "Ran the performance test framework against new builds of Hyper-V. Verified performance numbers across builds.  Worked with the developers and testers to resolve any issue that arose during the tests. <br> \
                            -  Used C++ and batch scripts to automate the performance test harness that uploads tests results to a SQL database. <br> \
                            -  Created website that displayed the test run performance numbers across builds allowing users to see performance data across builds using ASP.NET, AJAX and C#. <br> \
                            -  Setup and maintained the SQL database that was used for the test runs results and the website."
        },
        {
            "employer": "Volt (Microsoft)",
            "title": "SDET I",
            "location": "Redmond, WA, US",
            "dates": "2004-2006",
            "description": "Ran the testing framework against new builds to verify build quality.  Wrote test plans and coded automation tests with in the automation framework. Worked with developers to verify the cause of test failures. In event failures were caused by specification changes, modified the test content. <br> \
                            -  Designed a tools to help automation, including an application that talks to NETTICA web service (DNS host for test domains) and updates MX records. <br> \
                            -  Wrote an application that took daily builds and pushed them to the test environment, signals another computer to run BVTs against the build, which generated email reports of test results."
        },
        {
            "employer": "Volt (Microsoft)",
            "title": "Software Test Engineer",
            "location": "Redmond, WA, US",
            "dates": "2004-2005",
            "description": "Ensured that third-party devices and systems passed all of Microsoft’s requirements before they received a “Build for Windows” logo. <br> \
                            -  Used C# to write a tool that would automatically verify submitted logs to speed up the process."
        }
    ]
}

work.display = function() {
        this.jobs.forEach(function(job) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedDate = HTMLworkDates.replace("%data%", job.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedDate);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    });
}

var education = {
    "schools": [
        {
            "name": "DeVry",
            "location": "Federal Way, WA, US",
            "degree": "BS",
            "majors": ["Computer Information Systems"],
            "dates": 2004,
            "url": "http://http://www.devry.edu"
        }
    ],
    "onlineCources": [
        {
            "title": "Javascript Syntax",
            "school": "Udacity",
            "dates": 2015,
            "url": "Http://www.udacity.com/course/ud804"
        }
    ]
}

education.display = function(){
    this.schools.forEach(function(school){
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors));
    });

    if(this.onlineCources.length > 0)
    {
        $("#education").append(HTMLonlineClasses);
        this.onlineCources.forEach(function(onlineCource){
            $("#education").append(HTMLonlineStart);
            $(".online-entry:last").append(HTMLonlineTitle.replace("%data%", onlineCource.title) + HTMLonlineSchool.replace("%data%", onlineCource.school));
            $(".online-entry:last").append(HTMLonlineDates.replace("%data%", onlineCource.dates));
            $(".online-entry:last").append(HTMLonlineURL.replace("%data%", onlineCource.url))
        });
    }
}

var projects = {
    "projects": [
        {
            "title": "An Arduino based joystick control board.",
            "dates": "2014",
            "description": "Wanted to create an Arduino powered, usb joystick for my MAME arcade to replace the Ultimarc keyboard emulator I was using.",
            "url" : "https://github.com/washyu/Arduino-Projects/tree/master/DualMameController",
            "images": [
                "images/DualMame/fullboard.png",
                "images/DualMame/Top.png",
                "images/DualMame/bottom.png"
            ]
        }
    ]
}


projects.display = function() {
    this.projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart)
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url)); // jsut doing a second replace on the string returned by the first replace.
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));

        project.images.forEach(function(image){
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", image)); 
        }); 
    });
};



if(!jQuery.isEmptyObject(bio))
{
    bio.display();
}

if(work.jobs.length > 0)
{
    work.display();
}

if(!jQuery.isEmptyObject(education)){
    education.display();
}

if(projects.projects.length > 0)
{
    projects.display(); 
}

$("#mapDiv").append(googleMap);