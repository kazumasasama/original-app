class Api::V1::CustomersController < ApplicationController
  before_action :set_customer, only: %i[ show edit update destroy ]

  # GET /customers or /customers.json
  def index
    customers = Customer.all
    render json: { status: 'SUCCESS', message: 'Loaded customers', data: customers }
  end

  # GET /customers/1 or /customers/1.json
  def show
  end

  # GET /customers/new
  def new
    @customer = Customer.new
  end

  # GET /customers/1/edit
  def edit
  end

  # POST /customers or /customers.json
  def create
    @customer = Customer.new(customer_params)
    if @customer.save
      render json: { status: 'SUCCESS', message: 'Saved customer', data: @customer }
    end
  end
  #   respond_to do |format|
  #     if @customer.save
  #       format.html { redirect_to @customer, notice: "Customer was successfully created." }
  #       format.json { render :show, status: :created, location: @customer }
  #     else
  #       format.html { render :new, status: :unprocessable_entity }
  #       format.json { render json: @customer.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # PATCH/PUT /customers/1 or /customers/1.json
  def update
    respond_to do |format|
      if @customer.update(customer_params)
        format.html { redirect_to @customer, notice: "Customer was successfully updated." }
        format.json { render :show, status: :ok, location: @customer }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @customer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /customers/1 or /customers/1.json
  def destroy
    @customer.destroy
    respond_to do |format|
      format.html { redirect_to customers_url, notice: "Customer was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_customer
      @customer = Customer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def customer_params
      params.fetch(:customer, {}).permit(
        :name, :phone_number1, :phone_number2, :email, :post_code, :prefecture, :address, :gender_id, :birthday, :memo, :new_or_returning
      )
    end
end
