var a = 1,
    b = `a
    multiline
    string`,
    slowFunction = function() {
        let list = [];
        for (var i = 0; i < 100000; i++)
            list.unshift(Math.random());

        let sum = list.reduce((acc, value) => acc + value, 0);
        return sum / list.length;
    };

function slowFunction2() {
    let list = [];
    for (var i = 0; i < 100000; i++)
        list.unshift(Math.random());

    let sum = list.reduce((acc, value) => acc + value, 0);
    return sum / list.length;
}

var foo = function() {
    return slowFunction2();
};

var App = {
    bar: function() {
        return slowFunction2();
    }
};


class AppClass {
    constructor() {
        this.x = 1;
    }

    blah() {
        this.x = slowFunction2();
        return this.x;
    }
}


App.aClass = class aClass {
    constructor()
    {
        this.x = 1;
    }

    blah()
    {
        this.x = slowFunction2();
        return this.x;
    }
};


console.log(slowFunction());
console.log(foo());
console.log(App.bar());
console.log(new AppClass());
console.log(new AppClass().blah());
console.log(new App.aClass().blah());
