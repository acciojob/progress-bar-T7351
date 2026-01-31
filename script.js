    const circles = document.querySelectorAll('.circle');
    const progress = document.getElementById('progress');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    let current = 1;
    next.addEventListener('click',() => {
        current++;
        if(current > circles.length) {
            current = circles.length;
        }
        update();
    });
    prev.addEventListener('click',() => {
        current--;
        if(current < 1){
            current = 1;
        }
        update();
    })
    function update(){
        circles.forEach((circle, index) =>{
            if(index < current){
                circle.classList.add('active');
            }else{
                circle.classList.remove('active');
            }
        })
        const activeCircles = document.querySelectorAll(".circle.active");
        progress.style.width = ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";
        prev.disabled = current === 1;
        next.disabled = current === circles.length;
    }
