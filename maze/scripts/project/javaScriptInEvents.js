

const scriptsInEvents = {

	async EventSheet1_Event7(runtime, localVars)
	{
try {
    const TILE = 64;
    const MIN_SIZE = 320;
    const MAX_SIZE = 640;
    const NUM_ROOMS = 8;

    const roomType = runtime.objects.RoomCreator;
    const wallType = runtime.objects.WallObject;
    const doorLeftType = runtime.objects.DoorLeft;
    const doorRightType = runtime.objects.DoorRight;
    const playerType = runtime.objects.Player;
    const layerIndex = 0;

    if (!roomType || !wallType || !doorLeftType || !doorRightType || !playerType)
        throw new Error("Missing RoomCreator, WallObject, DoorLeft, DoorRight or Player");

    const occ = new Map();
    function key(tx, ty) { return `${tx},${ty}`; }
    function isOcc(tx, ty) { return occ.has(key(tx, ty)); }
    function setOcc(tx, ty, v) { occ.set(key(tx, ty), v); }

    function createWallAtTile(tx, ty) {
        const k = key(tx, ty);
        if (occ.get(k) === "door") return;
        if (!occ.has(k)) {
            wallType.createInstance(layerIndex, tx * TILE + TILE/2, ty * TILE + TILE/2);
            setOcc(tx, ty, "wall");
        }
    }

    function randRoomSizeTiles() {
        const minTiles = Math.max(3, Math.floor(MIN_SIZE / TILE));
        const maxTiles = Math.max(minTiles, Math.floor(MAX_SIZE / TILE));
        const wTiles = Math.floor(Math.random() * (maxTiles - minTiles + 1)) + minTiles;
        const hTiles = Math.floor(Math.random() * (maxTiles - minTiles + 1)) + minTiles;
        return { wTiles, hTiles, width: wTiles * TILE, height: hTiles * TILE };
    }

    function makeRoomAtTileRect(leftTile, topTile, wTiles, hTiles) {
        const cx = (leftTile + (wTiles / 2)) * TILE;
        const cy = (topTile + (hTiles / 2)) * TILE;
        const inst = roomType.createInstance(layerIndex, cx, cy);
        inst.width = wTiles * TILE;
        inst.height = hTiles * TILE;
        return {
            instance: inst,
            left: leftTile,
            top: topTile,
            right: leftTile + wTiles - 1,
            bottom: topTile + hTiles - 1,
            wTiles, hTiles
        };
    }

    const rooms = [];

    const firstSize = randRoomSizeTiles();
    const firstLeft = 0;
    const firstTop = 0;
    rooms.push(makeRoomAtTileRect(firstLeft, firstTop, firstSize.wTiles, firstSize.hTiles));

    const firstRoom = rooms[0];
    const px = (firstRoom.left + firstRoom.wTiles / 2) * TILE;
    const py = (firstRoom.top + firstRoom.hTiles / 2) * TILE;
    const p = playerType.getFirstInstance();
    if (p) {
        p.setPosition(px, py);
    }

    while (rooms.length < NUM_ROOMS) {
        const base = rooms[Math.floor(Math.random() * rooms.length)];
        const size = randRoomSizeTiles();
        const dir = Math.floor(Math.random() * 4);

        let newLeft, newTop;
        if (dir === 1) {
            newLeft = base.right + 2;
            newTop = base.top;
        } else if (dir === 3) {
            newLeft = base.left - 2 - (size.wTiles - 1);
            newTop = base.top;
        } else if (dir === 0) {
            newTop = base.top - 2 - (size.hTiles - 1);
            newLeft = base.left;
        } else {
            newTop = base.bottom + 2;
            newLeft = base.left;
        }

        const newRect = {
            left: newLeft,
            top: newTop,
            right: newLeft + size.wTiles - 1,
            bottom: newTop + size.hTiles - 1
        };

        let conflict = false;
        for (const r of rooms) {
            if (!(newRect.right < r.left || newRect.left > r.right ||
                  newRect.bottom < r.top || newRect.top > r.bottom)) {
                conflict = true;
                break;
            }
        }
        if (conflict) continue;

        rooms.push(makeRoomAtTileRect(newRect.left, newRect.top, size.wTiles, size.hTiles));
    }

    const sharedWallTiles = new Set();
    const doorTiles = new Set();

    function addShared(tx, ty) { sharedWallTiles.add(key(tx, ty)); }
    function addDoor(tx, ty) { doorTiles.add(key(tx, ty)); }

    for (let i = 0; i < rooms.length; i++) {
        for (let j = 0; j < rooms.length; j++) {
            if (i === j) continue;
            const A = rooms[i];
            const B = rooms[j];

            if (B.left === A.right + 2) {
                const sharedX = A.right + 1;
                const overlapTop = Math.max(A.top, B.top);
                const overlapBottom = Math.min(A.bottom, B.bottom);
                const overlapLen = overlapBottom - overlapTop + 1;
                if (overlapLen >= 1) {
                    for (let y = overlapTop; y <= overlapBottom; y++)
                        addShared(sharedX, y);
                    if (overlapLen >= 2) {
                        const cy = Math.floor((overlapTop + overlapBottom) / 2);
                        addDoor(sharedX, cy);
                        addDoor(sharedX, cy + 1);
                    }
                }
            }

            if (B.right === A.left - 2) {
                const sharedX = A.left - 1;
                const overlapTop = Math.max(A.top, B.top);
                const overlapBottom = Math.min(A.bottom, B.bottom);
                const overlapLen = overlapBottom - overlapTop + 1;
                if (overlapLen >= 1) {
                    for (let y = overlapTop; y <= overlapBottom; y++)
                        addShared(sharedX, y);
                    if (overlapLen >= 2) {
                        const cy = Math.floor((overlapTop + overlapBottom) / 2);
                        addDoor(sharedX, cy);
                        addDoor(sharedX, cy + 1);
                    }
                }
            }

            if (B.top === A.bottom + 2) {
                const sharedY = A.bottom + 1;
                const overlapLeft = Math.max(A.left, B.left);
                const overlapRight = Math.min(A.right, B.right);
                const overlapLen = overlapRight - overlapLeft + 1;
                if (overlapLen >= 1) {
                    for (let x = overlapLeft; x <= overlapRight; x++)
                        addShared(x, sharedY);
                    if (overlapLen >= 2) {
                        const cx = Math.floor((overlapLeft + overlapRight) / 2);
                        addDoor(cx, sharedY);
                        addDoor(cx + 1, sharedY);
                    }
                }
            }

            if (B.bottom === A.top - 2) {
                const sharedY = A.top - 1;
                const overlapLeft = Math.max(A.left, B.left);
                const overlapRight = Math.min(A.right, B.right);
                const overlapLen = overlapRight - overlapLeft + 1;
                if (overlapLen >= 1) {
                    for (let x = overlapLeft; x <= overlapRight; x++)
                        addShared(x, sharedY);
                    if (overlapLen >= 2) {
                        const cx = Math.floor((overlapLeft + overlapRight) / 2);
                        addDoor(cx, sharedY);
                        addDoor(cx + 1, sharedY);
                    }
                }
            }
        }
    }

    for (const r of rooms) {
        const yTop = r.top - 1;
        for (let x = r.left; x <= r.right; x++) {
            if (!doorTiles.has(key(x, yTop)) && !sharedWallTiles.has(key(x, yTop)))
                createWallAtTile(x, yTop);
        }
        const yBottom = r.bottom + 1;
        for (let x = r.left; x <= r.right; x++) {
            if (!doorTiles.has(key(x, yBottom)) && !sharedWallTiles.has(key(x, yBottom)))
                createWallAtTile(x, yBottom);
        }
        const xLeft = r.left - 1;
        for (let y = r.top; y <= r.bottom; y++) {
            if (!doorTiles.has(key(xLeft, y)) && !sharedWallTiles.has(key(xLeft, y)))
                createWallAtTile(xLeft, y);
        }
        const xRight = r.right + 1;
        for (let y = r.top; y <= r.bottom; y++) {
            if (!doorTiles.has(key(xRight, y)) && !sharedWallTiles.has(key(xRight, y)))
                createWallAtTile(xRight, y);
        }
    }

    for (const s of sharedWallTiles) {
        if (doorTiles.has(s)) continue;
        const [txStr, tyStr] = s.split(",");
        createWallAtTile(parseInt(txStr, 10), parseInt(tyStr, 10));
    }

    for (const d of doorTiles) {
        const [txStr, tyStr] = d.split(",");
        const tx = parseInt(txStr, 10);
        const ty = parseInt(tyStr, 10);

        const up = key(tx, ty - 1);
        const down = key(tx, ty + 1);
        const left = key(tx - 1, ty);
        const right = key(tx + 1, ty);

    if (doorTiles.has(up) || doorTiles.has(down)) {
        // Vertical corridor (stacked)
        if (doorTiles.has(down)) {
            const inst = doorLeftType.createInstance(layerIndex, tx * TILE + TILE/2, ty * TILE + TILE/2);
            inst.angle = Math.PI / 2; // ✅ rotate for left-right corridor
        }
        if (doorTiles.has(up)) {
            const inst = doorRightType.createInstance(layerIndex, tx * TILE + TILE/2, ty * TILE + TILE/2);
            inst.angle = Math.PI / 2; // ✅ rotate for left-right corridor
        }
    } else {
        // Horizontal corridor (side by side)
        if (doorTiles.has(right)) {
            const inst = doorLeftType.createInstance(layerIndex, tx * TILE + TILE/2, ty * TILE + TILE/2);
            inst.angle = 0;
        }
        if (doorTiles.has(left)) {
            const inst = doorRightType.createInstance(layerIndex, tx * TILE + TILE/2, ty * TILE + TILE/2);
            inst.angle = 0;
        }
    }

        setOcc(tx, ty, "door");
    }

    runtime.signal("RoomGenerated");

} catch (err) {
    console.error("Generation error:", err);
}

	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
