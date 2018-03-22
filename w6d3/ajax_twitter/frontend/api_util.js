const APIUtil = {
  followUser: id => APIUtil.changeFollowStatus(id, 'Post'),
  unfollowUser: id => APIUtil.changeFollowStatus(id, 'DELETE'),

  changeFollowStatus: (id, method) => (
    $.ajax({
      url: `/users/${id}/follow`,
      dataType: 'json',
      method: method
    })
  )

};

module.exports = APIUtil;
