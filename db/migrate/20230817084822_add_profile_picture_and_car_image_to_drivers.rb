class AddProfilePictureAndCarImageToDrivers < ActiveRecord::Migration[7.0]
  def change
    add_column :drivers, :profile_picture, :string
    add_column :drivers, :car_image, :string
  end
end
