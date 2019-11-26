function DrawMethod(ctx, minor, major, stroke, fill) {
    minor = minor || 10;
    major = major || minor * 5;
    stroke = stroke || "#00FF00";
    fill = fill || "009900";
    ctx.save();
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    let width = ctx.canvas.width;
    let height = ctx.canvas.height;

    // Draw X -axises
    for (let i = 0; i < width; i += minor) {
        ctx.beginPath();
        ctx.lineWidth = .5;
        if (i % major === 0) {
            ctx.lineWidth = 2;
        }
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
    }
    // Draw Y-axises
    for (let i = 0; i < height; i += minor) {
        ctx.beginPath();
        ctx.lineWidth = .5;
        ctx.beginPath();
        if (i % major === 0) {
            ctx.lineWidth = 2;
        }
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
    }
    ctx.restore();
}