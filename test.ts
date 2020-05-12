class Greeter {
    @modifyProp
    greeting = '';

    @modifyProp
    name = '';
}

function modifyProps<T extends { new(...args: any[]): {} }>(constructor: T) {
    let values: any;
    for (const p in new constructor()) {
        console.log(p);
    }
    return class extends constructor {
        greeting = "new property";
        name = 'new name';
    }
}

function modifyProp(target: any, propertyKey: string) {
    let value = target[propertyKey];
    const getter = function () {
        return Math.random();
    }
    const setter = function (newVal: string) {
        value = newVal;
    };
    if (delete target[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}

console.log(new Greeter().greeting);
console.log(new Greeter().name);
