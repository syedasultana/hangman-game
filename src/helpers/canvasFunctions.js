export const firstMark = (ctx) => {
    ctx.moveTo(10,130);
    ctx.lineTo(40,130);
    ctx.stroke();
}

export const secondMark = (ctx) => {
    ctx.moveTo(25,40);
    ctx.lineTo(25,130);
    ctx.stroke();
}

export const thirdMark = (ctx) => {
     ctx.moveTo(25,40);
     ctx.lineTo(60,40);
     ctx.stroke();
}

export const fourthMark = (ctx) => {
    ctx.moveTo(60,40);
    ctx.lineTo(60,50);
    ctx.stroke();
}

export const fifthMark = (ctx) => {
    let centerX = 60;
    let centerY = 60;
    let radius = 10;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.stroke();
}

export const sixthMark = (ctx) => {
    ctx.moveTo(60,70);
    ctx.lineTo(60,100);
    ctx.stroke();
}

export const seventhMark = (ctx) => {
    ctx.moveTo(45,85);
    ctx.lineTo(75,85);
    ctx.stroke();
}

export const eighthMark = (ctx) => {
    ctx.moveTo(60,100);
    ctx.lineTo(50,120);
    ctx.stroke();
}

export const ninthMark = (ctx) => {
    ctx.moveTo(60,100);
    ctx.lineTo(70,120);
    ctx.stroke();
}