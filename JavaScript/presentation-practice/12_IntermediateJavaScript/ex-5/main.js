function test(val) {
    try {
        if (isNaN(val)) {
            throw "Not a number"
        } else {
            console.log("its a Number");
        }
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Done " + val);
    }
}

test("d");
test(2);