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

  def order_params
    params.require(:order).permit(:listing_id, :user_id, :sender, :status, :name_on_pack, :eta, :meeting, :rating, :created_at)
  end
end
