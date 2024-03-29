$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    createPlatform(100, 400, 400, 20); // 3rd platform from the top short but wide platform located 100 pixels from the left of the screen and 400 pixels from the top of the screen
    createPlatform(700, 625, 600, 20); // 5th platform from the top lowest platform towards the bottom
    createPlatform(100, 200, 350, 20); // 1st platform from the top, almost the same as 2nd platform
    createPlatform(425, 500, 600, 20); // 4th platform from the top, right above lowest platform
    createPlatform(625, 300, 600, 20); // 2nd platform from the top, toward the right of the screen

    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCollectable("steve", 500, 300, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("grace", 500, 300); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    createCollectable("grace", 800, 300, 20, 0.5); // creates a "grace" collectible at the coordinates (800, 300), falling with default gravity and bouncing with default bounce %
    createCollectable("database", 150, 250);
    createCollectable("max", 1000, 150);
    createCollectable("database", 100, 100);


    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("left", 200, 2000); // cannon on left wall, 450px down, shooting once per second
    createCannon("top", 450, 2000); // cannon on left wall, 450px down, shooting once per second
    createCannon("top", 950, 2000); // cannon on left wall, 450px down, shooting once per second


    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
