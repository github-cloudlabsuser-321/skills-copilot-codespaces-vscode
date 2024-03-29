const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
        { name: 'Bob', age: 35 }
    ],
    [
        { name: 'Alice', age: 28 },
        { name: 'Eve', age: 32 },
        { name: 'Charlie', age: 40 }
    ]
];

const names = data.flatMap(arr => arr.map(obj => obj.name));
console.log(names); // Output: ['John', 'Jane', 'Bob', 'Alice', 'Eve', 'Charlie']