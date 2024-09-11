//modal pop-up
document.addEventListener("DOMContentLoaded", function() {
    const cooldownDays = 1;
    const millisecondsInADay = 86400000;
    const lastShownDate = localStorage.getItem('modalLastShownDate');
    const now = new Date().getTime();
    if (!lastShownDate || now - parseInt(lastShownDate) > cooldownDays * millisecondsInADay) {
        setTimeout(function() {
            var myModal = new bootstrap.Modal(document.getElementById('newsletter-modal'));
            myModal.show();
            localStorage.setItem('modalLastShownDate', now.toString());
        }, 10000);
    }
});

//word animation
const words = ["INNOVATIVE", "EFFICIENT", "RESPONSIVE", "QUALITY", "CREATIVE", "SECURE"];
        let currentIndex = 0;
        let currentWord = 1;
        function changeWord() {
            const wordElement1 = document.getElementById('word1');
            const wordElement2 = document.getElementById('word2');
            
            if (currentWord === 1) {
                wordElement2.classList.remove('show');
                setTimeout(() => {
                    wordElement1.textContent = words[currentIndex];
                    wordElement1.classList.add('show');
                }, 500);
                currentWord = 2;
            } else {
                wordElement1.classList.remove('show');
                setTimeout(() => {
                    wordElement2.textContent = words[currentIndex];
                    wordElement2.classList.add('show');
                }, 500);
                currentWord = 1;
            }
            currentIndex = (currentIndex + 1) % words.length;
        }
        setInterval(changeWord, 1000);
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('word1').textContent = words[currentIndex];
            document.getElementById('word1').classList.add('show');
            currentIndex++;
});
//numbers
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.number');
    const animationDuration = 2000;

    // Function to animate the count
    function animateCount(element, target, duration) {
        let startTimestamp = null;
        const isDecimal = target % 1 !== 0;
        const decimals = isDecimal ? target.toString().split('.')[1].length : 0;

        function step(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;
            const progressRatio = Math.min(progress / duration, 1);
            const currentValue = progressRatio * target;

            element.textContent = isDecimal
                ? currentValue.toFixed(decimals)
                : Math.floor(currentValue);

            if (progress < duration) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = isDecimal
                    ? target.toFixed(decimals)
                    : target;
            }
        }

        window.requestAnimationFrame(step);
    }

    // Function to start animation when element is in view
    function startAnimation(entry) {
        const target = parseFloat(entry.target.getAttribute('data-target'));
        animateCount(entry.target, target, animationDuration);
        observer.unobserve(entry.target); // Stop observing after animation starts
    }

    // Intersection Observer to detect when elements are in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startAnimation(entry);
            }
        });
    }, {
        threshold: 0.5 // Adjust as needed (0.5 means 50% of the element must be in view)
    });

    // Observe all counter elements
    counters.forEach(counter => observer.observe(counter));
});

//services
document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.service-item');
    const descriptions = document.querySelectorAll('.service-description');
    const selectElement = document.querySelector('#serviceSelect');

    function setActive(targetId) {
        items.forEach(item => {
            if (item.getAttribute('data-target') === targetId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        descriptions.forEach(description => {
            if (description.id === targetId) {
                description.classList.add('active');
            } else {
                description.classList.remove('active');
            }
        });
        if (selectElement) {
            selectElement.value = targetId;
        }
    }
    items.forEach(item => {
        item.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            setActive(targetId);
        });
    });
    selectElement.addEventListener ('change', function () {
        const targetId = this.value;
        setActive(targetId);
    });
    setActive('service1');
});
  


