class Rook {
    constructor(color, icon, player) {
        this.color = color;
        this.icon = icon;
        this.player = player;
    }
}
const rook = new Rook({color: "black", icon: "rook", player: 2});

const serializeObject = (obj) => {
    return JSON.parse(JSON.stringify(rook));
};

const deserializeObject = (obj) => {
    return new Rook(obj);
};

console.log("original object:", rook);
const serializedObj = serializeObject(rook);
console.log("serialized object:", serializedObj);
const deserializedObj = deserializeObject(serializedObj);
console.log("deserialized object:", deserializedObj);

