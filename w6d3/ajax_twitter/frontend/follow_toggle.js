const APIUtil = require('./api_util');

class FollowToggle {
  constructor($el) {
    this.$el = $el;
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    debugger;
    this.render();
    this.$el.on("click", this.handleClick.bind(this));

  }

  render() {
    if (this.followState) {
      this.$el.text("Unfollow!");
    } else {
      this.$el.text("Follow!");
    }
  }

  handleClick(e) {
      const followToggle = this;
      e.preventDefault();

      if (this.followState === true) {
        this.$el.prop('disabled', true);
        this.$el.text("unfollowing");
        // this.render();
        console.log(followToggle);
        APIUtil.unfollowUser(followToggle.userId).then(() => {
          this.$el.prop('disabled', false);
          followToggle.followState = false;
          followToggle.render();
        });

        // $.ajax({
        //   url: `/users/${this.userId}/follow`,
        //   type: 'DELETE',
        //   dataType: "json"
        // }).then(() => {
        //   this.followState = false;
        //   this.render();
        // });

      } else {
        this.$el.prop('disabled', true);
        this.$el.text("following");
        // this.render();
        console.log(followToggle);
        APIUtil.followUser(followToggle.userId).then(() => {
          this.$el.prop('disabled', false);
          followToggle.followState = true;
          followToggle.render();
        });

        // $.ajax({
        //   url: `/users/${this.userId}/follow`,
        //   type: 'POST',
        //   dataType: "json"
        // }).then(() => {
        //   this.followState = true;
        //   this.render();
      }
  }

}

module.exports = FollowToggle;
