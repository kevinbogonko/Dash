// DOM FOR SIDEBAR MENU FULL SCREEN
const sidebarMenu = document.getElementById('sidebar-menu');
const hamburger = document.querySelector('.hamburger');

// DOM FOR MOBILE MENU
const mobileHamburger = document.querySelector('.hamburger-mobile');
const mobileMenu = document.querySelector('.mobile-sidebar-menu');

// DOM FOR SUBLIST MENU
const studentTag = document.getElementById('student-tag');
const subListStudent = document.getElementById('sub-list-student');

const studentMobileTag = document.getElementById('mobile-student-tag');
const subListMobileStudent = document.getElementById('mobile-sub-list-student');

const teacherTag = document.getElementById('teacher-tag');
const subListTeacher = document.getElementById('sub-list-teacher');

const teacherMobileTag = document.getElementById('mobile-teacher-tag');
const subListMobileTeacher = document.getElementById('mobile-sub-list-teacher');

const examTag = document.getElementById('exam-tag');
const subListExam = document.getElementById('sub-list-exam');

const examMobileTag = document.getElementById('mobile-exam-tag');
const subListMobileExam = document.getElementById('mobile-sub-list-exam');

const reportTag = document.getElementById('report-tag');
const subListReport = document.getElementById('sub-list-report');

const reportMobileTag = document.getElementById('mobile-report-tag');
const subListMobileReport = document.getElementById('mobile-sub-list-report');

const informationTag = document.getElementById('information-tag');
const subListInformation = document.getElementById('sub-list-information');

const informationMobileTag = document.getElementById('mobile-information-tag');
const subListMobileInformation = document.getElementById('mobile-sub-list-information');

// DOM FOR USER PROFILE
const user = document.getElementById('user-icon');
const userDropdownMenu = document.querySelector('.user-dropdown-menu');

// FUNCTION FOR TOGGLING MOBILE MENU
function toggleMobileMenu() {
    mobileMenu.classList.toggle("showMenu");
}
  
function toggleMenu() {

    sidebarMenu.classList.toggle("close");

    Array.from(sidebarMenu.getElementsByClassName('open')).forEach(ul => {
        ul.classList.remove('open');
    });

    Array.from(sidebarMenu.getElementsByClassName('rotate')).forEach(ul => {
        ul.classList.remove('rotate');
    });

}

function toggleSideStudentMenuOptions(){

    subListStudent.classList.toggle('open');
    studentTag.childNodes[0].classList.toggle('rotate');

    if(sidebarMenu.classList.contains('close')){
        sidebarMenu.classList.toggle('close');
    }

}

function toggleSideMobileStudentMenuOptions(){
    subListMobileStudent.classList.toggle('open');
    studentMobileTag.childNodes[0].classList.toggle('rotate');
}

function toggleSideTeacherMenuOptions(){

    subListTeacher.classList.toggle('open');
    teacherTag.childNodes[0].classList.toggle('rotate');

    if(sidebarMenu.classList.contains('close')){
        sidebarMenu.classList.toggle('close');
    }

}

function toggleSideMobileTeacherMenuOptions(){
    subListMobileTeacher.classList.toggle('open');
    teacherMobileTag.childNodes[0].classList.toggle('rotate');


}

function toggleSideExamMenuOptions(){
    subListExam.classList.toggle('open');
    examTag.childNodes[0].classList.toggle('rotate');

    if(sidebarMenu.classList.contains('close')){
        sidebarMenu.classList.toggle('close');
    }

}

function toggleSideMobileExamMenuOptions(){
    subListMobileExam.classList.toggle('open');
    examMobileTag.childNodes[0].classList.toggle('rotate');


}

function toggleSideInformationMenuOptions(){
    subListInformation.classList.toggle('open');
    informationTag.childNodes[0].classList.toggle('rotate');

    if(sidebarMenu.classList.contains('close')){
        sidebarMenu.classList.toggle('close');
    }

}

function toggleSideMobileInformationMenuOptions(){
    subListMobileInformation.classList.toggle('open');
    informationMobileTag.childNodes[0].classList.toggle('rotate');
}

function toggleSideReportMenuOptions(){
    subListReport.classList.toggle('open');
    reportTag.childNodes[0].classList.toggle('rotate');

    if(sidebarMenu.classList.contains('close')){
        sidebarMenu.classList.toggle('close');
    }
}

function toggleSideMobileReportMenuOptions(){
    subListMobileReport.classList.toggle('open');
    reportMobileTag.childNodes[0].classList.toggle('rotate');
}

function toggleUserInfo(){
    userDropdownMenu.classList.toggle('open')
}

mobileHamburger.addEventListener("click", toggleMobileMenu);
hamburger.addEventListener('click', toggleMenu);
studentTag.addEventListener('click', toggleSideStudentMenuOptions);
studentMobileTag.addEventListener('click', toggleSideMobileStudentMenuOptions);
teacherTag.addEventListener('click', toggleSideTeacherMenuOptions);
teacherMobileTag.addEventListener('click', toggleSideMobileTeacherMenuOptions);
examTag.addEventListener('click', toggleSideExamMenuOptions);
examMobileTag.addEventListener('click', toggleSideMobileExamMenuOptions);
informationTag.addEventListener('click', toggleSideInformationMenuOptions);
informationMobileTag.addEventListener('click', toggleSideMobileInformationMenuOptions);
reportTag.addEventListener('click', toggleSideReportMenuOptions);
reportMobileTag.addEventListener('click', toggleSideMobileReportMenuOptions);
user.addEventListener('click', toggleUserInfo);


