class OrdersController < ApplicationController
    def index
        orders = Order.all
        render json: {
          orders: orders
        }
      end

    def show
        order = params[:id]
        order = Order.find(params[:id])
        render json: {
            status: 200,
            order: order
          }
    end

    def create
      listing_id = params["listing_id"]
      user_id = params["user_id"]
      sender = params["sender"]
      status = "new"
      name_on_pack = params["nameOnPack"]
      eta = params["eta"]
      meeting = params["meeting"]
      rating = nil

      order = Order.new(
        listing_id: listing_id,
        user_id: user_id,
        sender: sender,
        status: status,
        name_on_pack: name_on_pack,
        eta: eta,
        meeting: meeting,
        rating: rating)
        if order.valid?
          order.save
          render json: {
            status: 200,
            message: "New order created!",
            order: order
          }
        else
          render json: {
            status: 404,
            errors: "Error creating new order"
          }
        end
    end

    def update
      # sytnax: order.update(field: "value")
      order = Order.find(params[:id])
      order.update(order_params)
      render json: {
        status: 204,
        message: "order updated",
        order: order
      }
  end


  def order_params
    params.permit(:id, :listing_id, :user_id, :sender, :status, :name_on_pack, :eta, :meeting, :rating)
  end
end
