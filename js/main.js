lookiehere.options({ activateByTab: false });
lookiehere.init();

shunts = undefined;

document.querySelector('div.frame#frame-home a.link.in-text#my-work').addEventListener('click', function() { shunts.introduce('frame-work'); });
document.querySelector('div.frame#frame-home a.link.in-text#my-journey-in-design').addEventListener('click', function() { shunts.introduce('frame-about'); });

shunts = new ShuntDiv(document.getElementById('main-container'), [

], {
    default: 'frame-home',
    saveWithHash: true,
});

INTRODUCTION_FRAMES = ["home", "about", "work"];
INTRODUCTION_FRAMES.forEach(function(frame) {
    shunts.addShunt(new ShuntDiv.Introduction('frame-' + frame, 'dualAnimateCss', {
        exit_animation_name:  'fadeOut',
        exit_animation_function: 'ease',
        exit_animation_time: 400,
        enter_animation_name: 'fadeIn',
        enter_animation_function: 'ease',
        enter_animation_time: 400,
    }));

    document.querySelector('div#topbar a.link#' + frame).addEventListener('click', function() { shunts.introduce('frame-' + frame); });
});

shunts.addShunt(new ShuntDiv.Transition('frame-about', 'frame-about-page-1', 'dualAnimateCss', 'keypress', {
    key: 38,
    exit_animation_name:  'fadeOutDown',
    exit_animation_function: 'ease',
    enter_animation_name: 'fadeInDown',
    enter_animation_function: 'ease',
}));
shunts.addShunt(new ShuntDiv.Transition('frame-about', 'frame-about-page-1', 'dualAnimateCss', 'keypress', {
    key: 40,
    exit_animation_name:  'fadeOutUp',
    exit_animation_function: 'ease',
    enter_animation_name: 'fadeInUp',
    enter_animation_function: 'ease',
}));
shunts.addShunt(new ShuntDiv.Transition('frame-about', 'frame-about-page-1', 'dualAnimateCss', 'touchSwipe', {
    swipe: 'up',
    exit_animation_name:  'fadeOutUp',
    exit_animation_function: 'ease',
    enter_animation_name: 'fadeInUp',
    enter_animation_function: 'ease',
}));
shunts.addShunt(new ShuntDiv.Transition('frame-about', 'frame-about-page-1', 'dualAnimateCss', 'wheel', {
    deltaY: 20,
    exit_animation_name:  'fadeOutUp',
    exit_animation_function: 'ease',
    enter_animation_name: 'fadeOutUp',
    enter_animation_function: 'ease',
}));
shunts.addShunt(new ShuntDiv.Transition('frame-about', 'frame-about-page-1', 'dualAnimateCss', 'click', {
    id: 'down',
    exit_animation_name:  'fadeOutUp',
    exit_animation_function: 'ease',
    enter_animation_name: 'fadeOutUp',
    enter_animation_function: 'ease',
}));

ABOUT_PAGE_FRAMES = ["frame-about-page-1", "frame-about-page-2", "frame-about-page-3", "frame-about-page-4", "frame-about-page-5", "frame-about-page-6"];
ABOUT_PAGE_FRAMES_WRAPPED = ABOUT_PAGE_FRAMES.concat([ABOUT_PAGE_FRAMES[0]]);

for (i = 0; i < ABOUT_PAGE_FRAMES.length; ++i) {
    (function(frame) {
        shunts.addShunt(new ShuntDiv.Transition(frame, 'frame-about', 'dualAnimateCss', 'keypress', {
            key: 38,
            exit_animation_name:  'fadeOutDown',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInDown',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition(frame, 'frame-about', 'dualAnimateCss', 'touchSwipe', {
            swipe: 'down',
            exit_animation_name:  'fadeOutDown',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInDown',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition(frame, 'frame-about', 'dualAnimateCss', 'click', {
            id: 'up',
            exit_animation_name:  'fadeOutDown',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInDown',
            enter_animation_function: 'ease',
        }));
    })(ABOUT_PAGE_FRAMES[i]);
}

for (i = 0, j = 1; j < ABOUT_PAGE_FRAMES_WRAPPED.length; ++i, ++j) {
    (function(frame_1, frame_2) {
        shunts.addShunt(new ShuntDiv.Transition(frame_1, frame_2, 'dualAnimateCss', 'keypress', {
            key: 32,
            exit_animation_name:  'fadeOutLeft',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInRight',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition(frame_1, frame_2, 'dualAnimateCss', 'keypress', {
            key: 39,
            exit_animation_name:  'fadeOutLeft',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInRight',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition(frame_2, frame_1, 'dualAnimateCss', 'keypress', {
            key: 37,
            exit_animation_name:  'fadeOutRight',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInLeft',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition(frame_1, frame_2, 'dualAnimateCss', 'touchSwipe', {
            swipe: 'left',
            exit_animation_name:  'fadeOutLeft',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInRight',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition(frame_2, frame_1, 'dualAnimateCss', 'touchSwipe', {
            swipe: 'right',
            exit_animation_name:  'fadeOutRight',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInLeft',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition(frame_1, frame_2, 'dualAnimateCss', 'wheel', {
            deltaY: 20,
            exit_animation_name:  'fadeOutLeft',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInRight',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition(frame_2, frame_1, 'dualAnimateCss', 'wheel', {
            deltaY: -20,
            exit_animation_name:  'fadeOutRight',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInLeft',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition(frame_1, frame_2, 'dualAnimateCss', 'click', {
            id: 'right',
            exit_animation_name:  'fadeOutLeft',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInRight',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition(frame_2, frame_1, 'dualAnimateCss', 'click', {
            id: 'left',
            exit_animation_name:  'fadeOutRight',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInLeft',
            enter_animation_function: 'ease',
        }));
    })(ABOUT_PAGE_FRAMES_WRAPPED[i], ABOUT_PAGE_FRAMES_WRAPPED[j])
};

WORK_PAGE_1_FRAMES = ["frame-work-paparazzi-page-1"];
WORK_PAGE_1_FRAMES.forEach(function(frame) {
    shunts.addShunt(new ShuntDiv.Transition('frame-work', frame, 'enterAnimateCss', 'click', {
        id: frame,
        animation_name:  'fadeInUp',
        animation_function: 'ease',
    }));
});

WORK_PAPARAZZI_FRAMES = ["frame-work-paparazzi-page-1", "frame-work-paparazzi-page-2", "frame-work-paparazzi-page-3", "frame-work-paparazzi-page-4", "frame-work-paparazzi-page-5", "frame-work-paparazzi-page-6", "frame-work-paparazzi-page-7", "frame-work-paparazzi-page-8", "frame-work-paparazzi-page-9", "frame-work-paparazzi-page-10"];
for (i = 0, j = 1; j < WORK_PAPARAZZI_FRAMES.length; ++i, ++j) {
    (function(frame_1, frame_2) {
        shunts.addShunt(new ShuntDiv.Transition(frame_1, frame_2, 'dualAnimateCss', 'keypress', {
            key: 32,
            exit_animation_name:  'fadeOutUp',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInUp',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition(frame_1, frame_2, 'dualAnimateCss', 'keypress', {
            key: 40,
            exit_animation_name:  'fadeOutUp',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInUp',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition(frame_2, frame_1, 'dualAnimateCss', 'keypress', {
            key: 38,
            exit_animation_name:  'fadeOutDown',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInDown',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition(frame_1, frame_2, 'dualAnimateCss', 'touchSwipe', {
            swipe: 'up',
            exit_animation_name:  'fadeOutUp',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInUp',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition(frame_2, frame_1, 'dualAnimateCss', 'touchSwipe', {
            swipe: 'down',
            exit_animation_name:  'fadeOutDown',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInDown',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition(frame_1, frame_2, 'dualAnimateCss', 'wheel', {
            deltaY: 20,
            exit_animation_name:  'fadeOutUp',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInUp',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition(frame_2, frame_1, 'dualAnimateCss', 'wheel', {
            deltaY: -20,
            exit_animation_name:  'fadeOutDown',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInDown',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition(frame_1, frame_2, 'dualAnimateCss', 'click', {
            id: 'down',
            exit_animation_name:  'fadeOutUp',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInUp',
            enter_animation_function: 'ease',
        }));
        shunts.addShunt(new ShuntDiv.Transition(frame_2, frame_1, 'dualAnimateCss', 'click', {
            id: 'up',
            exit_animation_name:  'fadeOutDown',
            exit_animation_function: 'ease',
            enter_animation_name: 'fadeInDown',
            enter_animation_function: 'ease',
        }));
    })(WORK_PAPARAZZI_FRAMES[i], WORK_PAPARAZZI_FRAMES[j])
};