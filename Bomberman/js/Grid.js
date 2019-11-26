export default class Grid {

    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.draw();
    }

    draw = function () {
        let context = this.context;
        let canvas = this.canvas;
        context.strokeStyle = 'dimgrey';
        for (let i = 0; i < canvas.width; i += 10) {
            context.beginPath();
            context.lineWidth = .5;
            if (i % 50 === 0) {
                context.lineWidth = 2;
            }
            context.moveTo(i, 0);
            context.lineTo(i, canvas.height);
            context.stroke();
        }
        // Draw Y-axises
        for (let i = 0; i < canvas.height; i += 10) {
            context.lineWidth = .5;
            context.beginPath();
            if (i % 50 === 0) {
                context.lineWidth = 2;
            }
            context.moveTo(0, i);
            context.lineTo(canvas.width, i);
            context.stroke();
        }
        context.stroke();
    };

}