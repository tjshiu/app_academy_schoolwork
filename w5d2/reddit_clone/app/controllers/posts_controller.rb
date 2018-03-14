class PostsController < ApplicationController
  before_action :require_login

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    @post.save
    flash[:errors] = @post.errors.full_messages
    redirect_to post_url(@post)
  end

  def edit
    @post = Post.find(params[:id])
    if @post
      render :edit
    else
      flash[:errors] = ["this is not yours!"]
    end
  end

  def update
    @post = current_user.posts.find(params[:id])

    if @post.update_attributes(post_params)
      redirect_to sub_url(@post.sub_reddit)
    else
      flash[:errors] = @post.errors.full_messages
      render :edit
    end
  end


  # def show
  # end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy!
    redirect_to sub_url(@post.sub_reddit)
  end

  def post_params
    params.require(:post).permit(:title, :url, :content, sub_ids: [])
  end
end
