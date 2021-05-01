
//The animated functionality behind this specific navbar style
function bubbleNav() {
    //grab some elements from DOM and store them in constants
    const bubble = document.querySelector('.nav-bubble');
    const expandedBubble = document.querySelector('.nav-bubble-expanded');
    const bubbleMenu = document.querySelector('.nav-bubble #menu');
//  When a mouseenters the bubble div, the div will expand and icons will appear
    bubble.addEventListener('mouseover', function () {
        //hide the menu bars 
        bubbleMenu.style.display = 'none';
        //make th expanded bubble exist in the DOM
        expandedBubble.style.display = 'block';

        //create a timeline for animations
        let timeline = anime.timeline({});

        timeline
        //  expand the bubble
            .add({
                targets: '.nav-bubble',
                duration: 150,
                width: 400,
                borderRadius: '300px',
                easing: 'linear'
            })
        //  bring the expanded menu above the bubble menu
            .add({
                targets: '.nav-bubble-expanded',
                zIndex: 2, //bring expanded menu above bubble menu
                opacity: [0, 1],
                duration: 10,
                easing: 'linear'
            })
        //  fade in the icons of the expanded menu in a uniform motion
            .add({
                targets: '.nav-bubble-expanded .fas',
                duration: 150,
                opacity: [0, 1],
                delay: function (el, i) {
                    return (i * 10);
                },
                easing: 'linear'
            });


    });

    expandedBubble.addEventListener('mouseleave', function (){
        let timeline = anime.timeline({});
        timeline
            .add({
            //  fade the icons out 
                targets: ['#brain', '#breath', '#info', '#home'],
                duration: 150,
                opacity: [1, 0],
                delay: function (el, i) {
                    return (i * 10);
                },
                easing: 'linear'
            })
            // place expanded menu below bubble menu
            .add({
                targets: '.nav-bubble-expanded',
                zIndex: 0, 
                opacity: [1, 0],
                duration: 10,
                easing: 'linear'
            })
            // retract nav bubble back to original size
            .add({
                targets: '.nav-bubble',
                duration: 150,
                width: [400, 75],
                easing: 'linear'
            });
// after the menu returns to original state, the expanded menu is hidden from DOM
// and the menu bars are displayed in the originally sized bubble
        setTimeout(function () {
            expandedBubble.style.display = 'none';
            bubbleMenu.style.display = 'block';
        }, 340);

    });

}

bubbleNav();
