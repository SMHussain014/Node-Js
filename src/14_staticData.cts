let data = {
    userName: "Ali",
    x: 10,
    y: 20,
    z: function (a: number, b: number): number {
        let c: number = a + b;
        return c;
    },
    myHobbies: ['Reading Books', 'Playing Computer Games', 'Nature'],
};
module.exports = data;