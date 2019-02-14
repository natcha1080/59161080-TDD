const greet = require('./greet');

//1
test('Write a method greet(name)', () => {
    expect(greet("Bob"));
});

test('when name is "Bob", the method should return a string "Hello, Bob."', () => {
    expect(greet("Bob")).toBe("Hello, Bob.");
});

//2
test('when name is null, then the method should return the string "Hello, my friend."', () => {
    expect(greet(null)).toBe("Hello, my friend.");
});

//3
test('when name is "JERRY" then the method should return the string "HELLO JERRY!"', () => {
    expect(greet("JERRY")).toBe("HELLO JERRY!");
});

test('when name is "FANG" then the method should return the string "HELLO FANG!"', () => {
    expect(greet("FANG")).toBe("HELLO FANG!");
});

//4
test('when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."', () => {
    expect(greet(['Jill', 'Jane'])).toBe("Hello, Jill and Jane.");
});

//5
test('when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."' , () => {
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.")
});




