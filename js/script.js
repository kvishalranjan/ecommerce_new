document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener('scroll',function()
    {
        if(window.scrollY > 50)
        {
            document.getElementById('navbar').classList.add('fixed-top');

            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        }
        else
        {
            document.getElementById('navbar').classList.remove('fixed-top');
            document.body.style.paddingTop = '0';
        }
    });
    // for smaller screens
    if (window.innerWidth > 992) {
        // for every .nav-item inside .navbar(all descendants)
        document.querySelectorAll('.navbar .nav-item').forEach(function (each_listitem) {
            each_listitem.addEventListener('mouseover', function (e) {
                var drop_link = this.querySelector('a[data-toggle]');  //this refers to list item
                if (drop_link != null) {
               
var next_link = drop_link.nextElementSibling;
                    drop_link.classList.add('show');
                    next_link.classList.add('show');
                }
            }); //mouseover ends
 //    mouseleave
            each_listitem.addEventListener('mouseleave', function (e) {
                var drop_link = this.querySelector('a[data-toggle]');  //this refers to list item
                if (drop_link != null) {
                    var next_link = drop_link.nextElementSibling;
                    drop_link.classList.remove('show');
                    next_link.classList.remove('show');
                } 
            }); //mouseleave ends
        });
    }  //innerWidth ends
});