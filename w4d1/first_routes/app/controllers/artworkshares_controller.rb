class ArtworksharesController < ApplicationController

  def create
    artworkshare = ArtworkShare.new(artwork_shares_params)
    if artworkshare.save
      render json: artworkshare
    else
      render json: artworkshare.errors.full_messages, status: 422
    end
  end

  def destroy
    artworkshare = ArtworkShare.find_by(id: params[:id])

    if artworkshare
      artworkshare.destroy
      render json: artworkshare
    else
      render json: 'no! this artworkshare does not exist'
    end
  end

  private

  def artwork_shares_params
    params.require(:artworkshare).permit(:artwork_id, :viewer_id)
  end

end
