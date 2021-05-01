describe("pow", function() {
    it("1)()(())2(()", function() {
      assert.equal(checkBrackets('1)()(())2(()'), 2);
    });
    it("))))))0)", function() {
        assert.equal(checkBrackets('))))))0)'), 7);
    });
    it("kgkgk()", function() {
        assert.equal(checkBrackets('((sd(()fgh))af)'), 0);
    });
    it("((()))", function() {
        assert.equal(checkBrackets('((()))'), 0);
    });
    it("kek()(((((", function() {
        assert.equal(checkBrackets('kek()((((('), 5);
    });
    it(")))((()))", function() {
        assert.equal(checkBrackets(')))((()))'), 3);
    });
    it(")0))0000))00))", function() {
        assert.equal(checkBrackets(')0))0000))00))'), 7);
    });
    it("(meow))", function() {
        assert.equal(checkBrackets('(meow))'), 1);
    });
    it(")0 ))()()", function() {
        assert.equal(checkBrackets('(( ))('), 1);
    });
    it("((     )waf)", function() {
        assert.equal(checkBrackets('((     )waf)'), 0);
    });
    it("((s--------)))))))sd))waf)", function() {
        assert.equal(checkBrackets('((s--------)))))))sd))waf)'), 8);
    });
    it(")", function() {
        assert.equal(checkBrackets(')'), 1);
    });
    it("null", function() {
        assert.equal(checkBrackets(null), -1);
    });
    it("true", function() {
        assert.equal(checkBrackets(true), -1);
    });
    it("6767667", function() {
        assert.equal(checkBrackets(6767667), -1);
    });
    it("hhh", function() {
        assert.equal(checkBrackets("hhh"), 0);
    });
    it("true", function() {
        assert.equal(checkBrackets(true), -1);
    });

});

