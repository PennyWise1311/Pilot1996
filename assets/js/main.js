/*===== Hiện menu của quán  =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist 
    if(toggle && nav){
        // Add vào cả show-menu class to the div tag with the nav__menu class 
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')


/*====== Xóa menu trên điện thoại =======  */ 
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Mỗi lần click vào một phần trên thanh Nav__Link thì sẽ tự động xóa đi trên thanh menu 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*======== Scroll sections active link ========*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){ 
    const scrolly = window.pageYOffset

    sections.forEach(current => { 
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop -50;
        sectionId = current.getAttribute('id')

        if(scrolly > sectionTop && scrolly <= sectionTop + sectionHeight){ 
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



/* ========= Thay đổi màu nền background  ==========*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scoll is greater then 200 viewport height , add the scroll header class 
    if(this.scrolly >= 200 ) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)



/*===== Show scroll top ( hiện ra các con lăn ) =====*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    //  when the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class 
    if(this.scrolly >= 560 ) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}

window.addEventListener('scroll', scrollTop)