export default class Greeter {
    @modifyProp
    static greeting: string;

    @modifyProp
    static username: string;
}

function modifyProp(target: any, propertyKey: string) {
    target[propertyKey] = Math.random().toString();
}

console.log(Greeter.greeting);
console.log(Greeter.username);
