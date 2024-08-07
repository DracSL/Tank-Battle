const tileCollision0 = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
    50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50,
    50, 50, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50,
    50, 50, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 0, 0, 0, 50, 50, 50, 50, 50, 50, 0, 50, 0, 0, 0, 50, 50, 50, 50, 50, 0, 50, 50,
    50, 50, 0, 50, 50, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50, 50, 50, 50, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 50,
    50, 50, 0, 50, 50, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50,
    50, 50, 0, 50, 0, 0, 0, 0, 50, 50, 0, 50, 50, 50, 50, 0, 0, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50,
    50, 50, 0, 50, 0, 0, 0, 0, 50, 50, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50, 0, 50, 50, 0, 50, 0, 0, 50, 0, 50, 0, 0, 50, 50, 50, 50, 50, 50, 0, 0, 50, 0, 0, 0, 0, 0, 50, 50,
    50, 50, 0, 50, 50, 50, 50, 50, 50, 50, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 50,
    50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 50, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 0, 50, 50,
    50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50,
    50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 50, 50, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 50, 50,
    50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 50, 0, 50, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 50, 50,
    50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 50, 50,
    50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50,
    50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 0, 50, 50,
    50, 50, 0, 50, 50, 50, 50, 50, 50, 0, 0, 50, 50, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 50,
    50, 50, 0, 50, 50, 0, 0, 0, 50, 0, 0, 50, 50, 0, 0, 0, 0, 50, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 0, 50, 50, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50,
    50, 50, 0, 50, 50, 0, 0, 0, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50,
    50, 50, 0, 50, 50, 0, 0, 0, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 50, 0, 0, 0, 0, 0, 50, 50,
    50, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 50, 50, 50, 50, 0, 0, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 0, 50, 50, 50, 50, 50, 50, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 50,
    50, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 50, 50, 50, 50, 0, 50, 50,
    50, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50,
    50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
    50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]

const tileCollision1 = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
    50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
    50, 50, 0, 50, 50, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
    50, 50, 0, 50, 50, 0, 50, 0, 50, 50, 0, 0, 0, 0, 50, 50, 50, 50, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 0, 50, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50,
    50, 50, 0, 50, 50, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 50, 50, 50, 50,
    50, 50, 0, 50, 50, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50,
    50, 50, 0, 50, 0, 0, 0, 0, 50, 50, 0, 50, 50, 50, 50, 0, 0, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50,
    50, 50, 0, 0, 50, 0, 0, 0, 50, 50, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 0, 0, 50, 0, 0, 0, 50, 50, 50, 50,
    50, 50, 0, 50, 0, 50, 50, 50, 50, 50, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 50, 50, 50,
    50, 50, 0, 50, 50, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50,
    50, 50, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50,
    50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 50, 50, 50, 50,
    50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50,
    50, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 50, 50, 50, 50,
    50, 50, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50,
    50, 50, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50,
    50, 50, 0, 50, 50, 50, 50, 50, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 50, 50, 50,
    50, 50, 0, 0, 50, 0, 0, 0, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50,
    50, 50, 0, 50, 0, 0, 0, 0, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 50, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50,
    50, 50, 0, 50, 50, 0, 0, 0, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 50, 0, 0, 0, 50, 50, 50, 50,
    50, 50, 0, 50, 0, 50, 0, 0, 50, 0, 0, 50, 50, 50, 50, 0, 0, 50, 50, 50, 50, 0, 0, 50, 50, 50, 50, 0, 0, 0, 50, 50, 50, 50, 0, 50, 50, 50, 50, 50, 50, 0, 50, 0, 0, 0, 50, 0, 0, 0, 50, 50, 50, 50,
    50, 50, 0, 50, 0, 0, 50, 0, 50, 0, 0, 0, 50, 50, 50, 50, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50,
    50, 50, 0, 50, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
    50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
    50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]

    const tileCollision2 = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
        50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50,
        50, 50, 0, 50, 50, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 0, 0, 50, 50,
        50, 50, 0, 50, 50, 0, 50, 0, 50, 50, 0, 0, 0, 0, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 0, 50, 0, 0, 50, 50, 50, 50, 50, 50, 0, 0, 50,
        50, 50, 0, 50, 50, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 50, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 50, 0, 0, 0, 50, 50, 0, 50,
        50, 50, 0, 50, 50, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 50, 0, 50,
        50, 50, 0, 50, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 50,
        50, 50, 0, 0, 50, 0, 0, 0, 50, 50, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 50, 50, 0, 50,
        50, 50, 0, 50, 0, 50, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 50, 0, 50, 0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 50, 0, 50,
        50, 50, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 50, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 50, 50, 50, 50, 50, 50, 0, 50,
        50, 50, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 50,
        50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 50, 0, 50, 50,
        50, 50, 50, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 50,
        50, 50, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 50, 0, 50, 50,
        50, 50, 0, 50, 50, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 50, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 50,
        50, 50, 0, 50, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 0, 50, 50,
        50, 50, 0, 50, 50, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 0, 50, 50,
        50, 50, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 50,
        50, 50, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 50,
        50, 50, 0, 50, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 50, 0, 0, 0, 50, 0, 50, 50,
        50, 50, 0, 50, 0, 50, 0, 0, 50, 0, 0, 0, 50, 0, 0, 50, 0, 0, 50, 50, 0, 0, 0, 50, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 50, 0, 50, 50,
        50, 50, 0, 50, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50, 50, 50, 50, 50, 0, 50, 50,
        50, 50, 0, 50, 0, 0, 0, 50, 50, 50, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 50, 0, 50, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 0, 50, 50,
        50, 50, 50, 50, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50,
        50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]

    const tileCollision3 = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
        50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50,
        50, 50, 0, 50, 50, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 0, 0, 0, 0, 0, 50, 0, 50, 0, 50, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 0, 0, 50, 50,
        50, 50, 0, 50, 50, 0, 50, 0, 50, 50, 0, 0, 0, 0, 50, 50, 50, 50, 0, 0, 50, 0, 0, 0, 0, 50, 0, 50, 0, 50, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 50, 50, 50, 50, 50, 50, 0, 0, 50,
        50, 50, 0, 50, 0, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 50, 50, 50, 0, 50, 0, 50, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 50,
        50, 50, 0, 50, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 50, 0, 50, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50,
        50, 50, 0, 50, 0, 0, 0, 0, 50, 50, 0, 0, 0, 50, 50, 50, 0, 0, 0, 0, 0, 0, 50, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50,
        50, 50, 0, 0, 50, 0, 0, 0, 50, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 50, 50, 50, 50, 50, 0, 0, 0, 0, 50,
        50, 50, 0, 50, 0, 50, 50, 50, 50, 50, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50,
        50, 50, 0, 50, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 50, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 50,
        50, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 50, 50, 0, 0, 50, 0, 50, 0, 50, 0, 50, 0, 0, 50, 0, 50, 0, 50, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 0, 50, 50, 0, 50, 50, 0, 0, 50, 0, 50,
        50, 50, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 50, 50, 0, 50, 50, 0, 0, 50, 0, 50,
        50, 50, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50,
        50, 50, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 50, 0, 50, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 50, 50, 0, 0, 0, 50, 50, 0, 50, 0, 50,
        50, 50, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 50, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 50, 50, 50, 50, 50, 50, 0, 50, 0, 50,
        50, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 50, 50, 50, 50, 50, 0, 0, 50, 0, 50,
        50, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 50, 50, 50, 0, 0, 50, 0, 0, 50,
        50, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 50, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 50, 50,
        50, 50, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 50, 50, 50, 50, 50, 0, 0, 0, 50, 50,
        50, 50, 0, 50, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 50, 0, 0, 0, 0, 0, 50, 50,
        50, 50, 0, 50, 0, 50, 0, 0, 50, 0, 0, 0, 50, 0, 0, 50, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 50, 0, 50, 50,
        50, 50, 0, 50, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 50, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50, 50, 50, 50, 50, 0, 50, 50,
        50, 50, 0, 50, 0, 0, 0, 50, 50, 50, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 50, 0, 50, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 0, 50, 50,
        50, 50, 50, 50, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50,
        50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]