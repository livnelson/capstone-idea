class MyListsController < ApplicationController
  def create
    mylist = MyList.create!(mylist_params)
    render json: mylist, status: :created
  end

  def update
    mylist = MyList.find(params[:id])
    mylist.update!(mylist_params)
  end

  private

  def mylist_params
    params.permit(:name, :poster_path, :user_id, :movie_id)
  end
end
