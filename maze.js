const canvas = document.getElementById("maze");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
//ctx.fillRect(10, 10, 150, 100);

maze_walls = [];

const mazewidth = 5;
const mazeheight = 5;
for (var x = 0; x < mazewidth; x++) {
	maze_walls[x] = [];
	for (var y = 0; y < mazeheight; y++) {
		maze_walls[x][y] = {
			top: false,
			left: x==1,
		};
	}
}

function draw() {
	const cellWidth = 10;
	ctx.reset();
	for (var y = 0; y < mazeheight; y++) {
		for (var x = 0; x < mazewidth; x++) {
			drawX = x * cellWidth;
			drawY = y * cellWidth;
			if (maze_walls[x][y].top) {
				ctx.moveTo(drawX, drawY);
				ctx.lineTo(drawX + cellWidth, drawY);
			}
			if (maze_walls[x][y].left) {
				ctx.moveTo(drawX, drawY);
				ctx.lineTo(drawX, drawY + cellWidth);
			}
		}
	}
	ctx.stroke();
}
draw();
