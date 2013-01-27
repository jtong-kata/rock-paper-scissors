describe("Game", function() {

    var win_gesture, lose_gesture, draw_with_win_gesture;
    var winner, loser, drawer;
    var game;

    beforeEach(function() {
        win_gesture = new Gestures("paper");
        lose_gesture = new Gestures("rock");
        draw_with_win_gesture = new Gestures("paper");
        winner = new Player("Winner");
        loser = new Player("Loser");
        drawer = new Player("Drawer");
    });

    it("should output winner", function(){
        var game = new Game(winner, loser);
        winner.show(win_gesture);
        loser.show(lose_gesture);
        expect(game.result()).toBe("The winner is Winner");
    });

    it("should output draw result", function(){
        var game = new Game(winner, loser);
        winner.show(win_gesture);
        drawer.show(draw_with_win_gesture);
        expect(game.result()).toBe("It is a draw. Try again? 'Winner' & 'Drawer'.");
    });
});