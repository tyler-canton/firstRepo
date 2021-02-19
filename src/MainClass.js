export default class MainClass {
    constructor(name) {
        this.person = name;
    }
    test() {
        console.log(`This name ${this.person}`);
    }
}
