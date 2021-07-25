class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :phone_number1
      t.string :phone_number2
      t.string :email
      t.string :address
      t.integer :prefecture_id
      t.string :post_code
      t.integer :gender_id
      t.date :birthday
      t.text :memo
      t.integer :new_or_returning

      t.timestamps
    end
  end
end
