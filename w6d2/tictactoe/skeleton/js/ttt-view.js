class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    debugger;
    let $listItems = $('li.square');
    $listItems.on("click", event => {
      // alert("this is working");
      const currentTarget = event.currentTarget;
      const $currentTarget = $(currentTarget);
      let $pos = $currentTarget.data('pos');
      this.game.playMove($pos);
      this.makeMove($currentTarget);
      if (this.game.isOver()) {
        if (this.game.winner() === 'o') {
          $('h2').text('X is HOT! O is NOT!');
        } else if (this.game.winner() === 'x') {
          $('h2').text('O is HOT! X is NOT!');
        } else {
          $('h2').text('You are both losers!');
        }
      }

    });
  }

  makeMove($square) {
    let mark = this.game.currentPlayer;
    $square.text(mark);
  }

  setupBoard() {
    this.$el.append($('<ul></ul>'));
    $("ul").addClass('board');
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        $('ul.board').append($('<li></li>').addClass('square').data("pos", [i, j]));
      }
    }
  }
}

module.exports = View;
