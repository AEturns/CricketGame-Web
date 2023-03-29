export const animateCSS = (element, animation, isEnd, duration, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);
      
        // When the animation ends, we clean the classes and resolve the Promise
        if (isEnd) {
            function handleAnimationEnd(event) {
                event.stopPropagation();
                setTimeout(
                    () => {
                        node.classList.remove(`${prefix}animated`, animationName);
                        resolve('Animation ended');
                    },
                    duration
                );

            }

            node.addEventListener('animationend', handleAnimationEnd, { once: true });
        }
    });