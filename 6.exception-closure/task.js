// Задача 1
function parseCount(value) {
    const number = Number.parseInt(value, 10);
    if (number) {
        return number;
    }
    throw new Error("Невалидное значение");
}

function validateCount(value) {
    try {
        return parseCount(value);
    }
    catch(err) {
        return err;
    }
}