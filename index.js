const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 1707
canvas.height = 811
var audioObject = 0
var fanfare = false

class Sprite {
  constructor({
    position,
    imageSrc,
    scale = 0.2,
    framesMax = 1,
    }) {
    this.position = position
    this.rotation = 0
    this.width = 50
    this.height = 150
    this.image = new Image()
    this.image.src = imageSrc
    this.scale = scale
    this.framesMax = framesMax
    this.framesCurrent = 0
    this.framesElapsed = 0
    this.framesHold = 5
  }

  

  draw() {
    c.save()
    c.drawImage(
      this.image,
      this.framesCurrent * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,
      this.position.x,
      this.position.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale,
      c.translate(this.position.x, this.position.y),
      c.rotate(this.rotation),
      c.translate(-this.position.x, -this.position.y),
      // c.fillRect(this.position.x - 10, this.position.y - 10, this.width, this.height,)
    )

    c.translate(this.position.x, this.position.y)
    c.rotate(this.rotation)
    c.translate(-this.position.x, -this.position.y)

    c.beginPath()
   // c.arc(this.position.x, this.position.y, 5, 0, Math.PI * 2, false)
   // c.fillStyle = 'red'
    c.fill()
    c.closePath()

 //   c.fillStyle = 'red'
 //   c.fillRect(this.position.x, this.position.y, 100, 100)
    c.beginPath()
    c.moveTo(this.position.x + 30, this.position.y)
   // c.lineTo(this.position.x - 10, this.position.y - 10)
   // c.lineTo(this.position.x - 10, this.position.y + 10)
    c.closePath()

  // c.strokeStyle = 'white'
 c.stroke()
c.restore()

  }

  animateFrames() {

  
    this.framesElapsed++

    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++
      } else {
        this.framesCurrent = 0
      }
    }
  }

  update() {
    this.draw()
    this.animateFrames()
  }
}

class CollisionBlock {
  constructor({position, strength}) {
    this.position = position
    this.width = 32
    this.height = 32
    this.image = new Image()
    this.image.src = "./pic/block1.png"
    this.strength = strength
  }

  draw() {
    if (!this.image) return
    c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    c.translate(this.position.x, this.position.y),
    c.rotate(this.rotation),
    c.translate(-this.position.x, -this.position.y)
    
  }
  update() {
    this.draw()
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
stage = (getRandomInt(4));
console.log(stage)



const floorCollision = []
if (stage === 0) {for (let i =0; i < tileCollision1.length; i+=54)
{floorCollision.push(tileCollision1.slice(i, i + 54))}}
if (stage === 1) {for (let i =0; i < tileCollision0.length; i+=54)
  {floorCollision.push(tileCollision0.slice(i, i + 54))}}
if (stage === 2) {for (let i =0; i < tileCollision2.length; i+=54)
  {floorCollision.push(tileCollision2.slice(i, i + 54))}}
if (stage === 3) {for (let i =0; i < tileCollision3.length; i+=54)
  {floorCollision.push(tileCollision3.slice(i, i + 54))}}

const collisionBlocks = []
floorCollision.forEach((row, y) => {
  row.forEach((symbol, x) => {if (symbol === 50)
  collisionBlocks.push(new CollisionBlock({
    position: {x: x * 32, y: y * 32}, strength: 5
  }))
  })
})


  




class Player {
  constructor({ position, velocity, imageSrc, scale, framesMax, offset = { x: 0, y: 0 }, sprites, attackBox, collisionBlocks}) {
    this.position = position // {x, y}
    this.velocity = velocity
    this.rotation = 0
    imageSrc,
    scale = 0.2,
    framesMax = 1,
    offset = { x: 20, y: 20 },
    sprites,
    attackBox = { offset: {}, width: undefined, height: undefined }
      this.position = position
      this.width = 40
      this.height = 30
      this.image = new Image()
      this.image.src = imageSrc
      this.scale = scale
      this.framesMax = framesMax
      this.framesCurrent = 0
      this.framesElapsed = 0
      this.framesHold = 5
      this.offset = offset
      this.collisionBlocks = collisionBlocks

  }
  

  draw() {
    c.save()
    c.drawImage(
      this.image,
      this.framesCurrent * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale,
      c.translate(this.position.x, this.position.y),
      c.rotate(this.rotation),
      c.translate(-this.position.x, -this.position.y),
    )

    c.translate(this.position.x, this.position.y)
    c.rotate(this.rotation)
    c.translate(-this.position.x, -this.position.y)

    c.beginPath()
   // c.arc(this.position.x, this.position.y, 5, 0, Math.PI * 2, false)
   // c.fillStyle = 'red'
    c.fill()
    c.closePath()

 //   c.fillStyle = 'red'
 //   c.fillRect(this.position.x, this.position.y, 100, 100)
    c.beginPath()
    c.moveTo(this.position.x + 30, this.position.y)
   // c.lineTo(this.position.x - 10, this.position.y - 10)
   // c.lineTo(this.position.x - 10, this.position.y + 10)
    c.closePath()

  // c.strokeStyle = 'white'
 c.stroke()
c.restore()
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    this.checkForVerticalCollisions()
    this.checkForVerticalCollisionsE()
    muzzle.position.y = turret.position.y + Math.sin(turret.rotation) * 30
    muzzle.rotation = turret.rotation
    muzzleflash.position.x = turret.position.x + Math.cos(turret.rotation) * 30 - 20,
    muzzleflash.position.y = turret.position.y + Math.sin(turret.rotation) * 30 - 140
    muzzleE.position.x = turretE.position.x + Math.cos(turretE.rotation) * 30
    muzzleE.position.y = turretE.position.y + Math.sin(turretE.rotation) * 30
    muzzleE.rotation = turretE.rotation
    muzzleflashE.position.x = turretE.position.x + Math.cos(turretE.rotation) * 30 - 20
    muzzleflashE.position.y = turretE.position.y + Math.sin(turretE.rotation) * 30 - 140
    muzzle.position.x = turret.position.x + Math.cos(turret.rotation) * 30
    turret.position.x = player.position.x 
    turret.position.y = player.position.y
    turretE.position.x = playerE.position.x 
    turretE.position.y = playerE.position.y


    
  }

  checkForVerticalCollisions() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
        const collisionBlocko = this.collisionBlocks[i];
          if (player.position.y  >= collisionBlocko.position.y
            && player.position.y <= collisionBlocko.position.y + collisionBlocko.height
            && player.position.x <= collisionBlocko.position.x + collisionBlocko.width
            && player.position.x >= collisionBlocko.position.x) 
            
            {
              if (player.position.y >= collisionBlocko.position.y + collisionBlocko.height) {player.velocity.y = player.velocity.y * -1; 
              } // top collision
              if (collisionBlocko.position.y + player.height + 80 >= player.position.y) {player.velocity.y = player.velocity.y * -1;  
              } // down collision
              if (player.position.x - player.radius >= collisionBlocko.position.x) {player.velocity.x = player.velocity.x * -1; player.velocity.y * -1;  
               } // left collision
              if (collisionBlocko.position.x + collisionBlocko.width >= player.position.x) {player.velocity.x = player.velocity.x * -1; player.velocity.y * -1;
               } // rightcollision
  
            
        }
    }




}

  checkForVerticalCollisionsE() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
        const collisionBlocko = this.collisionBlocks[i];
          if (playerE.position.y  >= collisionBlocko.position.y
            && playerE.position.y <= collisionBlocko.position.y + collisionBlocko.height
            && playerE.position.x <= collisionBlocko.position.x + collisionBlocko.width
            && playerE.position.x >= collisionBlocko.position.x) 
            
            {
              if (playerE.position.y >= collisionBlocko.position.y + collisionBlocko.height) {playerE.velocity.y = playerE.velocity.y * -1; 
              } // top collision
              if (collisionBlocko.position.y + playerE.height + 80 >= playerE.position.y) {playerE.velocity.y = playerE.velocity.y * -1;  
              } // down collision
              if (playerE.position.x - playerE.radius >= collisionBlocko.position.x) {playerE.velocity.x = playerE.velocity.x * -1; playerE.velocity.y * -1;  
              } // left collision
              if (collisionBlocko.position.x + collisionBlocko.width >= playerE.position.x) {playerE.velocity.x = playerE.velocity.x * -1; playerE.velocity.y * -1;
              } // rightcollision
  
            
        }
    }




}


  getVertices() {
    const cos = Math.cos(this.rotation)
    const sin = Math.sin(this.rotation)

    return [
      {
        x: this.position.x + cos * 30 - sin * 0,
        y: this.position.y + sin * 30 + cos * 0,
      },
      {
        x: this.position.x + cos * -10 - sin * 10,
        y: this.position.y + sin * -10 + cos * 10,
      },
      {
        x: this.position.x + cos * -10 - sin * -10,
        y: this.position.y + sin * -10 + cos * -10,
      },
    ]
  }
}

class Projectile {
  constructor({ position, velocity }) {
    this.position = position
    this.velocity = velocity
    this.radius = 5
  }

  draw() {
    c.beginPath()
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false)
    c.closePath()
    c.fillStyle = 'grey'
    c.fill()
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  }
}

class Asteroid {
  constructor({ position, velocity, radius }) {
    this.position = position
    this.velocity = velocity
    this.radius = radius
  } 

  draw() {
    c.beginPath()
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false)
    c.closePath()
    c.strokeStyle = 'red'
    c.stroke()
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  }
}

// const collisionBlock = new CollisionBlock

const PlayerHealthDisplay = new Sprite({          position: {
  x: 100,
  y: 20},
  velocity: { x: 0, y: 0 },
  offset: { x: 0, y: 0},
  scale: 0.2,
  imageSrc: "./pic/8player1.png",
  framesCurrent: 0,
  framesMax: 1,
})

const PlayerSprite = new Sprite({          position: {
  x: 1,
  y: 20},
  velocity: { x: 0, y: 0 },
  offset: { x: 0, y: 0},
  scale: 1,
  imageSrc: "./pic/playerStance1.png",
  framesCurrent: 0,
  framesMax: 4,
})

const PlayerSpriteE = new Sprite({          position: {
  x: 1600,
  y: 20},
  velocity: { x: 0, y: 0 },
  offset: { x: 0, y: 0},
  scale: 1,
  imageSrc: "./pic/playerStance1E.png",
  framesCurrent: 0,
  framesMax: 4,
})

const PlayerMenu = new Sprite({          position: {
  x: 90,
  y: 21},
  velocity: { x: 0, y: 0 },
  offset: { x: 0, y: 0},
  scale: 0.2,
  imageSrc: "./pic/Menu4.png",
  framesCurrent: 0,
  framesMax: 1,
})

const PlayerMenuE = new Sprite({          position: {
  x: 1376,
  y: 21},
  velocity: { x: 0, y: 0 },
  offset: { x: 0, y: 0},
  scale: 0.2,
  imageSrc: "./pic/Menu4.png",
  framesCurrent: 0,
  framesMax: 1,
})

const PlayerHealthDisplayE = new Sprite({          position: {
  x: 1380,
  y: 20},
  velocity: { x: 0, y: 0 },
  offset: { x: 0, y: 0},
  scale: 0.2,
  imageSrc: "./pic/8player2.png",
  framesCurrent: 0,
  framesMax: 1,
})

const background = new Player({
  position: { x: 0 / 2, y: 0},
  velocity: { x: 0, y: 0 },
  imageSrc: "./pic/map.png",
  collisionBlocks
})


const player = new Player({
  position: { x: canvas.width / 3, y: canvas.height / 2 },
  velocity: { x: 0, y: 0 },
  imageSrc: "./pic/panz14.png",
  collisionBlocks
})

const turret = new Player({
  position: { x: canvas.width / 3, y: canvas.height / 2 },
  velocity: { x: 0, y: 0 },
  offset: { x: 20, y: -25 },
  scale: 1,
  imageSrc: "./pic/panz6.png",
  collisionBlocks,
})

const playerE = new Player({
  position: { x: 1170, y: canvas.height / 2 },
  velocity: { x: 0, y: 0 },
  imageSrc: "./pic/panz14E.png",
  collisionBlocks
})

const turretE = new Player({
  position: { x: 1170, y: canvas.height / 2 },
  velocity: { x: 0, y: 0 },
  offset: { x: 20, y: -25 },
  scale: 1,
  imageSrc: "./pic/panz6E.png",
  collisionBlocks,
})

const muzzle = new Sprite({          position: {
  x: turret.position.x + Math.cos(turret.rotation) * 30,
  y: turret.position.y + Math.sin(turret.rotation) * 30,},
  velocity: { x: 0, y: 0 },
  offset: { x: 20, y: -25 },
  scale: 0.2,
  imageSrc: "./pic/muzzle4.png",
  framesCurrent: 0,
  framesMax: 1,
})

const muzzleE = new Sprite({          position: {
  x: turretE.position.x + Math.cos(turretE.rotation) * 30,
  y: turretE.position.y + Math.sin(turretE.rotation) * 30,},
  velocity: { x: 0, y: 0 },
  offset: { x: 20, y: -25 },
  scale: 0.2,
  imageSrc: "./pic/muzzle4.png",
  framesCurrent: 0,
  framesMax: 1,
})

const muzzleflash = new Sprite({          position: {
  x: turret.position.x + Math.cos(turret.rotation) * 30,
  y: turret.position.y + Math.sin(turret.rotation) * 30,},
  velocity: { x: 0, y: 0 },
  offset: { x: 20, y: -25 },
  scale: 0.7,
  imageSrc: "./pic/muzzle2.png",
  framesCurrent: 0,
  framesMax: 6,
})

const muzzleflashE = new Sprite({          position: {
  x: turretE.position.x + Math.cos(turretE.rotation) * 30,
  y: turretE.position.y + Math.sin(turretE.rotation) * 30,},
  velocity: { x: 0, y: 0 },
  offset: { x: 20, y: -25 },
  scale: 0.7,
  imageSrc: "./pic/muzzle2.png",
  framesCurrent: 0,
  framesMax: 6,
})


const explosion = new Sprite({          position: {
  x: player.position.x - 50,
  y: player.position.y - 30,},
  velocity: { x: 0, y: 0 },
  offset: { x: 0, y: 0 },
  scale: 0.7,
  imageSrc: "./pic/muzzle2.png",
  framesCurrent: 0,
  framesMax: 14,
})


const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  q: {
    pressed: false,
  },
  e: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowDown: {
    pressed: false,
  },
  Shift: {
    pressed: false,
  },
  End: {
    pressed: false,
  },

}

// Start conditions:
const SPEED = 3
const ROTATIONAL_SPEED = 0.05
const ROTATIONAL_SPEEDT = 0.02
const FRICTION = 0.97
const PROJECTILE_SPEED = 3
var acceleration = 0.1
var accelerationBackwards = -0.1
var accelerationE = 0.1
var accelerationBackwardsE = -0.1
var projectile_strength = 3
let start = true
let shoot = false
let shootE = false
var PlayerHealth = 8
var PlayerHealthE = 8
playerE.rotation = (180 * Math.PI / 180);
turretE.rotation = (180 * Math.PI / 180);

const projectiles = []
const asteroids = []
/*
const intervalId = window.setInterval(() => {
  const index = Math.floor(Math.random() * 4)
  let x, y
  let vx, vy
  let radius = 50 * Math.random() + 10

  switch (index) {
    case 0: // left side of the screen
      x = 0 - radius
      y = Math.random() * canvas.height
      vx = 1
      vy = 0
      break
    case 1: // bottom side of the screen
      x = Math.random() * canvas.width
      y = canvas.height + radius
      vx = 0
      vy = -1
      break
    case 2: // right side of the screen
      x = canvas.width + radius
      y = Math.random() * canvas.height
      vx = -1
      vy = 0
      break
    case 3: // top side of the screen
      x = Math.random() * canvas.width
      y = 0 - radius
      vx = 0
      vy = 1
      break
  }

 asteroids.push(
    new Asteroid({
      position: {
        x: x,
        y: y,
      },
      velocity: {
        x: vx,
        y: vy,
      },
      radius,
    })
  ) 

  console.log(asteroids)
}, 3000) */





function circleCollision(circle1, circle2) {
  const xDifference = circle2.position.x - circle1.position.x
  const yDifference = circle2.position.y - circle1.position.y

  const distance = Math.sqrt(
    xDifference * xDifference + yDifference * yDifference
  )

  if (distance <= circle1.radius + circle2.radius) {
    return true
  }

  return false
}

function circleTriangleCollision(circle, triangle) {
  // Check if the circle is colliding with any of the triangle's edges
  for (let i = 0; i < 3; i++) {
    let start = triangle[i]
    let end = triangle[(i + 1) % 3]

    let dx = end.x - start.x
    let dy = end.y - start.y
    let length = Math.sqrt(dx * dx + dy * dy)

    let dot =
      ((circle.position.x - start.x) * dx +
        (circle.position.y - start.y) * dy) /
      Math.pow(length, 2)

    let closestX = start.x + dot * dx
    let closestY = start.y + dot * dy

    if (!isPointOnLineSegment(closestX, closestY, start, end)) {
      closestX = closestX < start.x ? start.x : end.x
      closestY = closestY < start.y ? start.y : end.y
    }

    dx = closestX - circle.position.x
    dy = closestY - circle.position.y

    let distance = Math.sqrt(dx * dx + dy * dy)

    if (distance <= circle.radius) {
      setTimeout (() => {
      player.rotation += ROTATIONAL_SPEED * 1.9;
      turret.rotation += ROTATIONAL_SPEED * 1.9;
      player.velocity.x = SPEED * acceleration * -1
      player.velocity.y = SPEED * acceleration * -1
      acceleration += 0.0008
      if (acceleration > 1.2) {acceleration= 1.2}
  turret.velocity.x = SPEED * acceleration * -1
  turret.velocity.y =  SPEED * acceleration * -1

    }, 90)
      keys.w.pressed = true
      keys.e.pressed = true
      setTimeout (() => {keys.w.pressed = false, keys.e.pressed = false}, 1000)
      
      //true
      return true
    }
  }

  // No collision
  return false
}

function playerProjectileCollision() {
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const projectile = projectiles[i]
    projectile.update()


        if (projectile.position.y  >= player.position.y - 13
          && projectile.position.y <= player.position.y - 13 + player.height
          && projectile.position.x <= player.position.x - 15 + player.width
          && projectile.position.x >= player.position.x - 15) 

          
          
          { ///wenn Spieler getroffen wurde
            var explosionNum = Math.floor(Math.random() * 4)
            var audio = new Audio('./audio/explosion' + explosionNum + '.mp3');
            audio.play();
            explosion.position.x = player.position.x - 50
            explosion.position.y = player.position.y- 30
            explosion.image.src = "./pic/explosion.png"
            if (PlayerHealth > 0) {
            PlayerHealth -= 1
            PlayerHealthDisplay.image.src = "./pic/" + PlayerHealth + "player1.png"}
            explosionCountDown()
            changeSprite()
            projectiles.splice(i, 1)
            setTimeout (() => {
            player.rotation += ROTATIONAL_SPEED * 1.9;
            turret.rotation += ROTATIONAL_SPEED * 1.9;
            player.velocity.x = SPEED * acceleration * -1
            player.velocity.y = SPEED * acceleration * -1
            acceleration += 0.0008
            if (acceleration > 1.2) {acceleration= 1.2}
        turret.velocity.x = SPEED * acceleration * -1
        turret.velocity.y =  SPEED * acceleration * -1
      
          }, 90)
            keys.w.pressed = true
            keys.e.pressed = true
            setTimeout (() => {keys.w.pressed = false, keys.e.pressed = false}, 1000)
          }
}}


function playerProjectileCollisionE() {
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const projectile = projectiles[i]
    projectile.update()


        if (projectile.position.y  >= playerE.position.y - 13
          && projectile.position.y <= playerE.position.y - 13 + playerE.height
          && projectile.position.x <= playerE.position.x - 15 + playerE.width
          && projectile.position.x >= playerE.position.x - 15) 

   
          
          { ///wenn Spieler getroffen wurde
            var explosionNum = Math.floor(Math.random() * 4)
            var audio = new Audio('./audio/explosion' + explosionNum + '.mp3');
            audio.play();
            explosion.position.x = playerE.position.x - 50
            explosion.position.y = playerE.position.y- 30
            explosion.image.src = "./pic/explosion.png"

            if (PlayerHealthE > 0) {PlayerHealthE -= 1
           
            PlayerHealthDisplayE.image.src = "./pic/" + PlayerHealthE + "player2.png"}
            changeSpriteE() 
            explosionCountDown()
            projectiles.splice(i, 1)
            setTimeout (() => {
            playerE.rotation += ROTATIONAL_SPEED * 1.9;
            turretE.rotation += ROTATIONAL_SPEED * 1.9;
            playerE.velocity.x = SPEED * acceleration * -1
            playerE.velocity.y = SPEED * acceleration * -1
            acceleration += 0.0008
            if (acceleration > 1.2) {acceleration= 1.2}
        turretE.velocity.x = SPEED * acceleration * -1
        turretE.velocity.y =  SPEED * acceleration * -1
      
          }, 90)
            keys.ArrowUp.pressed = true
            keys.End.pressed = true
            setTimeout (() => {keys.ArrowUp.pressed = false, keys.End.pressed = false}, 1000)
          }
}}



function isPointOnLineSegment(x, y, start, end) {
  return (
    x >= Math.min(start.x, end.x) &&
    x <= Math.max(start.x, end.x) &&
    y >= Math.min(start.y, end.y) &&
    y <= Math.max(start.y, end.y)
  )
}
let msPrev = window.performance.now()
const fps = 120
const msPerFrame = 1000 / fps

function animate() {
  window.requestAnimationFrame(animate)

  const msNow = window.performance.now()
  const msPassed = msNow - msPrev

  if (msPassed < msPerFrame) return

  const excessTime = msPassed % msPerFrame
  msPrev = msNow - excessTime


  const animationId = window.requestAnimationFrame(animate)
  
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)

  background.scale = 1.2
  background.update()
  collisionBlocks.forEach(CollisionBlock => {CollisionBlock.update()})
  player.update()
  turret.update()
  playerE.update()
  turretE.update()
  muzzle.update()
  muzzleflash.update()
  muzzleE.update()
  muzzleflashE.update()
  explosion.update()

  PlayerMenu.update()
  PlayerMenuE.update()
  PlayerHealthDisplay.update()
  PlayerHealthDisplayE.update()
  PlayerSprite.update()
  PlayerSpriteE.update()
 playerProjectileCollision()
 playerProjectileCollisionE()



  for (let i = projectiles.length - 1; i >= 0; i--) {
    const projectile = projectiles[i]
    projectile.update()

        for (let j = 0; j < collisionBlocks.length; j++)     {
        const collisionBlocko = collisionBlocks[j]
        if (projectile.position.y  >= collisionBlocko.position.y
          && projectile.position.y <= collisionBlocko.position.y + collisionBlocko.height
          && projectile.position.x <= collisionBlocko.position.x + collisionBlocko.width
          && projectile.position.x >= collisionBlocko.position.x) 
          
          {blockStrength(collisionBlocko)
           // var audio = new Audio('./audio/boink2a.mp3');
           // audio.play();
            if (projectile.position.y >= collisionBlocko.position.y + collisionBlocko.height) {projectile.velocity.y = projectile.velocity.y * -1.004;} // top collision
            if (collisionBlocko.position.y + collisionBlocko.height >= projectile.position.y + projectile.radius) {projectile.velocity.y = projectile.velocity.y * -1.004;} // down collision
            if (projectile.position.x - projectile.radius >= collisionBlocko.position.x) {projectile.velocity.x = projectile.velocity.x * -1.004;} // left collision
            if (collisionBlocko.position.x + collisionBlocko.width >= projectile.position.x + projectile.radius) {projectile.velocity.x = projectile.velocity.x * -1.006;} // rightcollision

          
          }
        function blockStrength(collisionBlocko) {
          collisionBlocko.strength = collisionBlocko.strength - 1;
          if (collisionBlocko.strength <= 2)
          {collisionBlocko.image.src = "./pic/block3.png"}
          else if (collisionBlocko.strength <= 4)
          {collisionBlocko.image.src = "./pic/block2.png"}
      
          if (collisionBlocko.strength <= -2) {
              const index = collisionBlocks.indexOf(collisionBlocko);
              if (index !== -1) {
                  collisionBlocks.splice(index, 1);
              }
          }
      }

        }

    // garbage collection for projectiles
    if (
      projectile.position.x + projectile.radius < 0 ||
      projectile.position.x - projectile.radius > canvas.width ||
      projectile.position.y - projectile.radius > canvas.height ||
      projectile.position.y + projectile.radius < 0
    ) {
      projectiles.splice(i, 1)
    }
  }

  if (
    player.position.x + player.width < 0 ||
    player.position.x - player.width  > canvas.width ||
    player.position.y - player.height > canvas.height ||
    player.position.y + player.height < 0
  ) {
    { player.position.x = canvas.width / 3
    player.position.y = canvas.height / 2 }
  }

  if (
    playerE.position.x + playerE.width < 0 ||
    playerE.position.x - playerE.width  > canvas.width ||
    playerE.position.y - playerE.height > canvas.height ||
    playerE.position.y + playerE.height < 0
  ) {
    { playerE.position.x = 1170
    playerE.position.y = canvas.height / 2 }
  }



  /* asteroid management 
  for (let i = asteroids.length - 1; i >= 0; i--) {
    const asteroid = asteroids[i]
    asteroid.update()  

    if (circleTriangleCollision(asteroid, player.getVertices())) {
      // console.log('GAME OVER')
      // window.cancelAnimationFrame(animationId)
      // clearInterval(intervalId)
    } 
    

    // garbage collection for projectiles
    if (
      asteroid.position.x + asteroid.radius < 0 ||
      asteroid.position.x - asteroid.radius > canvas.width ||
      asteroid.position.y - asteroid.radius > canvas.height ||
      asteroid.position.y + asteroid.radius < 0
    ) {
      asteroids.splice(i, 1)
    } */

    /*projectiles
    for (let j = projectiles.length - 1; j >= 0; j--) {
      const projectile = projectiles[j]
 
     // if (circleTriangleCollision(projectile, player.getVertices())) {projectiles.splice(j, 1)}
      if (circleCollision(asteroid, projectile)) {
        asteroids.splice(i, 1)
        projectiles.splice(j, 1)      
      }
    } */
  

  if (keys.w.pressed) {
    player.velocity.x = Math.cos(player.rotation) * SPEED * acceleration
    player.velocity.y = Math.sin(player.rotation) * SPEED * acceleration
    acceleration += 0.0008
    if (acceleration > 1.2) {acceleration= 1.2}
turret.velocity.x = Math.cos(player.rotation) * SPEED * acceleration
turret.velocity.y = Math.sin(player.rotation) * SPEED * acceleration
  } else if (!keys.w.pressed) {
    player.velocity.x *= FRICTION
    player.velocity.y *= FRICTION
    turret.velocity.x *= FRICTION
    turret.velocity.y *= FRICTION
  }

  if (keys.s.pressed) {
    player.velocity.x = Math.cos(player.rotation) * SPEED * -1 * 0.4 
    player.velocity.y = Math.sin(player.rotation) * SPEED * -1 * 0.4
turret.velocity.x = Math.cos(player.rotation) * SPEED * -1 * 0.4
turret.velocity.y = Math.sin(player.rotation) * SPEED * -1 * 0.4
  } else if (!keys.w.pressed) {
    player.velocity.x *= FRICTION
    player.velocity.y *= FRICTION
    turret.velocity.x *= FRICTION
    turret.velocity.y *= FRICTION
    acceleration -= 0.008
    if (acceleration < 0.0008) {acceleration = 0.0008}
  }
  

  if (keys.d.pressed) {player.rotation += ROTATIONAL_SPEED;
  turret.rotation += ROTATIONAL_SPEED}
                      
  else if (keys.a.pressed) {player.rotation -= ROTATIONAL_SPEED
    turret.rotation -= ROTATIONAL_SPEED}

  if (keys.q.pressed) {turret.rotation -= ROTATIONAL_SPEEDT;
      turret.rotation -= ROTATIONAL_SPEEDT}
  else  if (keys.e.pressed) {turret.rotation += ROTATIONAL_SPEEDT;
        turret.rotation += ROTATIONAL_SPEEDT}


// enemy movement key input functions

if (keys.ArrowUp.pressed) {
  playerE.velocity.x = Math.cos(playerE.rotation) * SPEED * accelerationE
  playerE.velocity.y = Math.sin(playerE.rotation) * SPEED * accelerationE
  accelerationE += 0.0008
  if (accelerationE > 1.2) {accelerationE = 1.2}
turretE.velocity.x = Math.cos(playerE.rotation) * SPEED * accelerationE
turretE.velocity.y = Math.sin(playerE.rotation) * SPEED * accelerationE
} else if (!keys.ArrowUp.pressed) {
  playerE.velocity.x *= FRICTION
  playerE.velocity.y *= FRICTION
  turretE.velocity.x *= FRICTION
  turretE.velocity.y *= FRICTION
}

if (keys.ArrowDown.pressed) {
  playerE.velocity.x = Math.cos(playerE.rotation) * SPEED * -1 * 0.4 
  playerE.velocity.y = Math.sin(playerE.rotation) * SPEED * -1 * 0.4
turretE.velocity.x = Math.cos(playerE.rotation) * SPEED * -1 * 0.4
turretE.velocity.y = Math.sin(playerE.rotation) * SPEED * -1 * 0.4
} else if (!keys.ArrowUp.pressed) {
  playerE.velocity.x *= FRICTION
  playerE.velocity.y *= FRICTION
  turretE.velocity.x *= FRICTION
  turretE.velocity.y *= FRICTION
  accelerationE -= 0.008
  if (accelerationE < 0.0008) {accelerationE = 0.0008}
}


if (keys.ArrowRight.pressed) {playerE.rotation += ROTATIONAL_SPEED;
turretE.rotation += ROTATIONAL_SPEED}
                    
else if (keys.ArrowLeft.pressed) {playerE.rotation -= ROTATIONAL_SPEED
  turretE.rotation -= ROTATIONAL_SPEED}

if (keys.Shift.pressed) {turretE.rotation -= ROTATIONAL_SPEEDT;
    turretE.rotation -= ROTATIONAL_SPEEDT}
else  if (keys.End.pressed) {turretE.rotation += ROTATIONAL_SPEEDT;
      turretE.rotation += ROTATIONAL_SPEEDT}


}

animate()

window.addEventListener('keydown', (event) => {
  if (start === true) { audioObject = new Audio('./audio/panzertheme.mp3');
  audioObject.play(); start = false
}
  switch (event.key) {
    
    case 'w':
      if (PlayerHealth >0){
      keys.w.pressed = true}
      break
      case 'W':
        if (PlayerHealth >0){
        keys.w.pressed = true}
        break
      case 'A':
        if (PlayerHealth >0){
        keys.a.pressed = true}
    case 'a':
      if (PlayerHealth >0){
      keys.a.pressed = true}
      break
    case 'd':
      if (PlayerHealth >0){
      keys.d.pressed = true}
      break
      case 'D':
        if (PlayerHealth >0){
        keys.d.pressed = true}
        break
    case 'q':
      if (PlayerHealth >0){
      keys.q.pressed = true}
      break
      case 'Q':
        if (PlayerHealth >0){
        keys.q.pressed = true}
        break
      case 'e':
        if (PlayerHealth >0){
        keys.e.pressed = true}
      break
      case 'E':
        if (PlayerHealth >0){
        keys.e.pressed = true}
      break
      case 's':
        if (PlayerHealth >0){
        keys.s.pressed = true}
      break
      case 'S':
        if (PlayerHealth >0){
        keys.s.pressed = true}
      break
    case ' ':
      if (PlayerHealth >0){
     if (shoot === false) {
        shoot = true
        shootTurnback()
      var audio = new Audio('./audio/shot2.mp3');
      audio.play();
      muzzleflash.image.src = "./pic/muzzle.png"
      muzzle.image.src = "./pic/muzzle5.png"
      imageTurnback()

      projectiles.push(
        new Projectile({
          position: {
            x: player.position.x + Math.cos(turret.rotation) * 30,
            y: player.position.y + Math.sin(turret.rotation) * 30,
          },
          velocity: {
            x: Math.cos(turret.rotation) * PROJECTILE_SPEED,
            y: Math.sin(turret.rotation) * PROJECTILE_SPEED,
          },
        })
      )}}

      break 
      // Enemy movement
      case 'ArrowUp':
        if (PlayerHealthE >0){
        keys.ArrowUp.pressed = true}
        break
      case 'ArrowLeft':
        if (PlayerHealthE >0){
        keys.ArrowLeft.pressed = true}
        break
      case 'ArrowRight':
        if (PlayerHealthE >0){
        keys.ArrowRight.pressed = true}
        break
        case 'Shift':
          if (PlayerHealthE >0){  
        keys.Shift.pressed = true;}
        break
        case 'End':
          if (PlayerHealthE >0){
          keys.End.pressed = true}
        break
        case 'ArrowDown':
          if (PlayerHealthE >0){
          keys.ArrowDown.pressed = true}
        break
      case 'Enter':
        if (PlayerHealthE >0){
        if (shootE === false) {
          shootE = true
          shootETurnback()
        var audio = new Audio('./audio/shot2.mp3');
        audio.play();
        muzzleflashE.image.src = "./pic/muzzle.png"
        muzzleE.image.src = "./pic/muzzle5.png"
        imageTurnback()
  
        projectiles.push(
          new Projectile({
            position: {
              x: playerE.position.x + Math.cos(turretE.rotation) * 30,
              y: playerE.position.y + Math.sin(turretE.rotation) * 30,
            },
            velocity: {
              x: Math.cos(turretE.rotation) * PROJECTILE_SPEED,
              y: Math.sin(turretE.rotation) * PROJECTILE_SPEED,
            },
          })
        )}}
  
        break
  }
})


window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'w':
      keys.w.pressed = false

      break
      case 'W':
        keys.w.pressed = false
  
        break
      case 'A':
        keys.a.pressed = false
        break
    case 'a':
      keys.a.pressed = false
      break
      case 'D':
        keys.d.pressed = false
        break
    case 'd':
      keys.d.pressed = false
      break
    case 'q':
        keys.q.pressed = false
      break
      case 'Q':
        keys.q.pressed = false
      break
      case 'e':
        keys.e.pressed = false
      break
      case 'E':
        keys.e.pressed = false
      break
      case 's':
        keys.s.pressed = false
      break
      case 'S':
        keys.s.pressed = false
      break
      case 'ArrowUp':
        keys.ArrowUp.pressed = false
        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = false
        break
      case 'ArrowRight':
        keys.ArrowRight.pressed = false
        break
        case 'Shift':
          keys.Shift.pressed = false
        break
        case 'End':
          keys.End.pressed = false
        break
        case 'ArrowDown':
          keys.ArrowDown.pressed = false
        break
  }
})


function imageTurnback()
{
  setTimeout (() => {
    muzzleflash.image.src = "./pic/muzzle2.png"
    muzzle.image.src = "./pic/muzzle4.png"
    muzzleflashE.image.src = "./pic/muzzle2.png"
    muzzleE.image.src = "./pic/muzzle4.png"

  }, 90)


}

function explosionCountDown()
{
  setTimeout (() => {
    explosion.image.src = "./pic/muzzle2.png"
  }, 290)


}

function shootETurnback()
{
  setTimeout (() => {
    shootE = false
  }, 800)


}

function shootTurnback()
{
  setTimeout (() => {
    shoot = false
  }, 800)


}


function changeSprite() {
  if (PlayerHealth === 0) {player.image.src = "./pic/panz14kaputt.png"
  turret.image.src = "./pic/panz6kaputt.png"
  PlayerSprite.image.src = "./pic/pandadead.png"
  PlayerSprite.framesCurrent = 0 
  PlayerSprite.framesMax = 8
  PlayerSprite.framesCurrent = 0 
  PlayerSprite.image.src = "./pic/pandadead.png"
  audioObject.pause()
  if (fanfare === false) {
  setTimeout (() => {
    var audio = new Audio('./audio/end.mp3');
    audio.play()
   }, 1300
   )
   fanfare = true}
   PlayerHealth = -20
;
}
  if (PlayerHealth > 0) {
  PlayerSprite.image.src = "./pic/playerHit.png"
  PlayerSprite.framesCurrent = 0 
  setTimeout (() => {
   if (PlayerHealth <= 3)  {PlayerSprite.image.src = "./pic/playerStance2.png"
   PlayerSprite.framesCurrent = 0 
   player.image.src =  "./pic/panz14b.png"}
   else {PlayerSprite.image.src = "./pic/playerStance1.png"
   PlayerSprite.framesCurrent = 0 }
  }, 260)
}}

function changeSpriteE() {
  if (PlayerHealthE === 0)  {playerE.image.src = "./pic/panz14Ekaputt.png"
                            turretE.image.src = "./pic/panz6Ekaputt.png"
                            PlayerSpriteE.image.src = "./pic/bintudead.png"
                            PlayerSpriteE.framesCurrent = 0 
                            PlayerSpriteE.framesMax = 4
                            PlayerSpriteE.image.src = "./pic/bintudead.png"

                            audioObject.pause()
                            if (fanfare === false) {
                            setTimeout (() => {
                              var audio = new Audio('./audio/end.mp3');
                              audio.play()
                             }, 1300)
                            fanfare = true}
                             PlayerHealthE = -20;
                            }
                            
  if (PlayerHealthE > 0) {PlayerSpriteE.image.src = "./pic/playerHitE.png"
  PlayerSpriteE.framesCurrent = 0 
  setTimeout (() => {
   if (PlayerHealthE <= 3)  {PlayerSpriteE.image.src = "./pic/playerStance2E.png"
                            PlayerSpriteE.framesCurrent = 0
                            playerE.image.src =  "./pic/panz14Eb.png"}
   else {PlayerSpriteE.image.src = "./pic/playerStance1E.png"
        PlayerSpriteE.framesCurrent = 0 }
  }, 260)
}}