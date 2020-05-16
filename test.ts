@modifyProps('2020')
export default class Greeter {
    static greeting = '';

    static username = '';
}

function modifyProp(target: any, propertyKey: string) {
    target[propertyKey] = Math.random().toString();
}

function modifyProps(prefix: string) {
    return (constructor: any) => {
        Object.keys(constructor).forEach(
            item => constructor[item] = prefix + item)
        return constructor;
    }
}

console.log(Greeter.greeting);
console.log(Greeter.username);
