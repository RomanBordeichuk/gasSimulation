let cont = document.querySelector('.cont');

const count = 100;
const speed = 10;

for(let i = 0; i < count; i++){
    setObj(i, 1, 1, Math.random() * 360, speed);
}

function setObj(index, x, y, direction, speed){
    circle = document.createElement('div');
    circle.classList.add('circle');
    
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    circle.setAttribute('direction', direction);
    circle.setAttribute('speed', speed);
    circle.id = index;

    cont.append(circle);
}

document.addEventListener('mousedown', function(event){
    if(event){
        setInterval(run, 16);
    }
});

function run(){
    for(let i = 0; i < count; i++){
        let circle = document.getElementById(i);

        x = +circle.style.left.slice(0, (circle.style.left.length - 2));
        y = +circle.style.top.slice(0, (circle.style.top.length - 2));
        direction = circle.getAttribute('direction');
        v = circle.getAttribute('speed');

        if(x < 0 || x > 780){ 
            direction = +direction + (90 - +direction) * 2;   
        };
        if(y < 0 || y > 480){
            direction = +direction + (0 - +direction) * 2;
        };

        let vx = v * Math.cos(direction * Math.PI / 180);
        let vy = v * Math.sin(direction * Math.PI / 180);

        circle.setAttribute('direction', direction);

        x += vx;
        y += vy;

        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
    };
};