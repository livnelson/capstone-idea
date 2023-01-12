class UsersController < ApplicationController
  skip_before_action :authorize

  def index
    render json: User.all, status: :ok
  end

  def show
    user = User.find_by!(id: session[:user_id])
    render json: user, status: :ok
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content
    "User successfully deleted"
  end

end