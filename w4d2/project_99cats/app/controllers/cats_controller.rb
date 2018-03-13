class CatsController < ApplicationController
  def index
    @cats = Cat.all
    render(:index)
  end

  def show
    @cat = Cat.find(params[:id])

    render :show
  end

  def edit
    @cat = Cat.find(params[:id])

    render :edit
  end

  def new
    @cat = Cat.new
    render(:new)
  end

  def create
    @cat = Cat.new(cat_params)

    if @cat.save
      redirect_to cat_url(@cat.id)
    else
      render(@cat.errors.full_messages.to_json, {status: 422})
    end
  end

  def update
    @cat = Cat.find(params[:id])

    if @cat.update(cat_params)
      redirect_to cat_url(@cat.id)
    else
      render plain: "Sorry. Cat does not exist"
    end
  end

  private

  def cat_params
    params.require(:cat).permit(:birth_date, :color, :name, :sex, :description)
  end
end
