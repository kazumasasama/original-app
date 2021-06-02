class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :phone_number1
      t.string :phone_number2
      t.string :email
      t.string :address
      t.string :prefecture
      t.string :post_code
      t.references :gender, foreign_key: true
      t.date :birthday
      t.text :memo
      t.boolean :new_or_returning

      t.timestamps
    end
  end
end
