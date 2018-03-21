class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;

    this.setupTowers();

  }

  bindEvents() {

  }

  makeMove() {

  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {
        this.$el.append($(`<ul class=tower${i}></ul>`)).data("pos", i);
        // $('ul').toggleClass(`tower${i}`).data('num', i);
    }
    for (let j = 0; j < 3; j++) {
      $('ul.tower0').append($('<li></li>').addClass('disc').data("size", (j + 1)));
    }
  }
}

module.exports = View;
