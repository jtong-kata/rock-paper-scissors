describe("Gesture", function() {

    var rock, paper, scissors;

    beforeEach(function() {
        rock = new Gesture("rock");
        paper = new Gesture("paper");
        scissors = new Gesture("scissors");
    });

    it("should be win when rock fight scissors", function(){
        expect(rock.fight(scissors)).toBe("win");
    });

    it("should be win when paper fight rock", function(){
        expect(paper.fight(rock)).toBe("win");
    });

    it("should be win when scissors fight paper", function(){
        expect(scissors.fight(paper)).toBe("win");
    });

    it("should be lose when rock fight paper", function(){
        expect(rock.fight(paper)).toBe("lose");
    });

    it("should be lose when scissors fight rock", function(){
        expect(scissors.fight(rock)).toBe("lose");
    });

    it("should be lose when paper fight scissors", function(){
        expect(paper.fight(scissors)).toBe("lose");
    });

    it("should be draw when paper fight paper", function(){
        expect(paper.fight(new Gestures("paper"))).toBe("draw");
    });

    it("should be draw when rock fight rock", function(){
        expect(rock.fight(new Gestures("rock"))).toBe("draw");
    });

    it("should be draw when scissors fight scissors", function(){
        expect(scissors.fight(new Gestures("scissors"))).toBe("draw");
    });
});